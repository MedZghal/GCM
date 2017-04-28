 var option=  toastr.options = {
  "closeButton": true,
  "debug": false,
  "positionClass": "toast-top-right",
  "onclick": null,
  "showDuration": "1000",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};

function GetListConsultationByPatient(NumFichPatient)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=consult&function=GetListConsultationByPatient&NumFichPatient="+NumFichPatient,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}


function GetPatientByNumFichPatient(NumFichPatient)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=consult&function=GetPatientByNumFichPatient&NumFichPatient="+NumFichPatient,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function GetAssuranceCNAMByPatient(NumFichPatient)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=consult&function=GetAssuranceCNAMByPatient&NumFichPatient="+NumFichPatient,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}



/*Grid des patients*/
function createBackGrid() {

            App.startPageLoading({animate: true});

            window.setTimeout(function() {
                App.stopPageLoading();
            }, 2000);
        
    var Territory = Backbone.Model.extend({});
    var paramater = JSON.parse(localStorage.getItem("paramater"));
    var Territories = Backbone.PageableCollection.extend({
        model: Territory,
        url: "../Gestion_Patient?type=consult&function=GetListPatientByMedecin&code_Med_Trit="+paramater.codeMedTrit.codeMedTrit,
        mode:"client",
         state: {
             firstPage:1,
                pageSize: 9
              }
    });

    var territories = new Territories();
    /*
    var ExpandCell = Backbone.View.extend({
        events: {
          "click .btn": "triggerRowExpand"
        },
        triggerRowExpand: function () {
          this.expanded = !this.expanded;
          this.model.trigger("backgrid:row:expand", this.model, this.expanded);
        }
      });
      var ExpandableRow = Backgrid.Row.extend({
        initialize: function () {
          ExpandableRow.__super__.initialize.apply(arguments);
          this.listenTo(this.model, "backgrid:row:expand", this.expandRowMaybe);
        },
        expandRowMaybe: function (model, expand) {
          if (expand && this.model == model) this.$el.after(YOUR_EXPANSION_ROW);
          else {
            // REMOVE YOUR EXPANSION ROW
          }
        }
      });*/
      
    var columns = [
        {
            name: "sexe",
            label: "",
            editable: false,
             cell: Backgrid.Cell.extend({
             className: "image-cell",

	  render: function () {
		this.$el.empty();
		this.$el.html( this.renderImage( this.model ) );
		this.delegateEvents();
		return this;
	  },

	  renderImage: function(model) {
	  	var img = this.model.attributes.image;
                var data=this.model.get("sexe");
                var datenaiss =this.model.get("datenaiss");
                 var age =GetAge(datenaiss);
                    if (data === "Femme" )
                    {

                        if(age < 12)
                            return '<img src="../img/avatars/icon_girl-512.png" width="40" alt="" />';
                        else
                            if(age>=12 && age<=20)
                               return '<img src="../img/avatars/girl.png" width="40" alt="" />';
                       else
                            if(age>20 && age<=50)
                                return '<img src="../img/avatars/034-user-6.png" width="40" alt="" />';
                       else
                           return '<img src="../img/avatars/019-social-1.png" width="40" alt="" />';
                    }
                    else
                         {
                          if(age < 12)
                            return '<img src="../img/avatars/icon_boy-512.png" width="40" alt="" />';
                        else
                             if(age>=12 && age<=20)
                               return '<img src="../img/avatars/boy.png" width="40" alt="" />';
                            else
                                 if(age>20 && age<=50)
                                     return '<img src="../img/avatars/043-man-1.png" width="40" alt="" />';
                       else
                           return '<img src="../img/avatars/042-man-2.png" width="40" alt="" />';
                    }
		
	  }
                 
            })
           
        },
        {
            name: "numFichPatient", // The key of the model attribute
            label: "Patient", // The name to display in the header
            editable: false, // By default every cell in a column is editable, but ID shouldn't be
            // Defines a cell type, and ID is displayed as an integer without the ',' separating 1000s.
            cell: Backgrid.Cell.extend({
                render: function (e) {
                var cnam="", apci ="" , AutreAurr="";
		this.$el.empty();
                var nom =this.model.get("numFichPatient");
                
                 if(this.model.get("assurCnam") !== null)
                        cnam ="<img src='../img/cnam.png' style='width: 28px;' >&nbsp;";
                 if(this.model.get("codeApci") !== "")
                        apci ="<img src='../img/apci_logo_600w.png' style='width: 28px;' >&nbsp;";
                 if(this.model.get("autreAssur") !== "")
                        AutreAurr =AutreAssurImg(this.model.get("autreAssur"));
                    
		this.$el.html(nom +"<br/> "+cnam +" "+apci+" "+AutreAurr);
                    
		return this;
            }
            })
        }, 
        {
            name: "",
            label: "Name et Prénom",
            editable: false,
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.StringCell.extend({
               render: function (e) {
                    
		this.$el.empty();
                var nom =this.model.get("nom");
                var prenom =this.model.get("prenom");
		this.$el.append(nom +" "+prenom);
                    
		return this;
            }
            }) // This is converted to "StringCell" and a corresponding class in the Backgrid package namespace is looked up
        },
        {
            name: "datenaiss",
            label: "Date Naissance",
            editable: false,
            cell: Backgrid.DateCell.extend({
                render: function (e) {
                    
		this.$el.empty();
                var Client =this.model.get("datenaiss");
		this.$el.append(AddZero(parseInt(Client.day)+2)+"/"+AddZero(parseInt(Client.month))+"/"+Client.year);
                    
		return this;
            }
           })
       },
        {
           name:"",
            label: "Age",
            editable: false,
           
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.StringCell.extend({
                    render: function (e) {
                    
		this.$el.empty();
                var DateNaiss =this.model.get("datenaiss");
                var age =GetAge(DateNaiss);
                if(age === 0)
                    age++;
                
                this.$el.append(age +" ans");
                    
		return this;
            }
    
            }) 
        },
        {
            name: "poids",
            label: "Poids",
            editable: false,
           
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.StringCell.extend({
                  className: 'string-cell-2'
    
            }) 
        },
        {
            name: "profession",
            label: "profession",
            editable: false,
           
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.StringCell.extend({
                  className: 'string-cell-2'
    
            }) 
        },
        {
            name: "adresse",
            label: "Adresse",
            editable: false,
           
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.StringCell.extend({
                  className: 'string-cell-2'
    
            }) 
        },
        {
            name: "fixe",
            label: "Fixe",
            editable: false,
           
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.StringCell.extend({
                  className: 'string-cell-2'
    
            }) 
        },
        {
            name: "gsm",
            label: "Gsm",
            editable: false,
           
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.StringCell.extend({
                  className: 'string-cell-2'
    
            }) 
        },
        {
            name: "ville",
            label: "Ville",
            editable: false,
            cell: Backgrid.StringCell.extend({
                render: function (e) {
		this.$el.empty();
                var Client =this.model.get("ville");
		this.$el.append(Client.ville);
		return this;
            }
           })
       },
        {
            name: "",
            label: "Action",
            editable: false,
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.Cell.extend({
                template: _.template('<ul class="social-icons"> <li><a id="edit" data-tooltip="tooltip" title="" href="javascript:void(0);" data-placement="top"  data-original-title="Modifier" class="tooltips myspace"> </a> </li><li><a id="Consult" href="javascript:;" data-original-title="Conultation" class="last-fm"> </a></li><li><a id="delete" href="javascript:;" data-original-title="Supprimer" class="dropbox"> </a></li></ul>'),
                events: {
                    "click a#edit": "ClickEdit",
                    "click a#delete": "ClickDelete",
                    "click a#Consult": "ClickConsult"
                        },
                render: function () {
                    this.$el.html(this.template());
                    this.delegateEvents();
                    return this;
                        },
            ClickEdit: function () {
               localStorage.setItem("Update","true");
               localStorage.setItem("Consultation","false");
               localStorage.setItem("numFichPatient",this.model.get("numFichPatient"));
               window.location.href='AjPatient.jsp';
            },
            ClickConsult: function () {
                var Secretaire =JSON.parse(localStorage.getItem("Secretaire"));
        if(Object.keys(Secretaire).length>0)
            toastr.error("L'accés n'est autorisé  !!!.",'Error',option);
        else
            {
                var Model =this.model;
                Consults =GetListConsultationByPatient(Model.get("numFichPatient"));
                
                if(Object.keys(Consults).length>0){
                    window.parent.$.SmartMessageBox({
                                    title : "<img src='../img/bloc.png'> Observation",
                                    content : "Sélectionner type de demande!!",
                                    buttons : "[Annuler][Valider]",
                                    input : "select",
                                    options : "[Demande de Consultation][Demande de Contrôle]"
                            }, function(ButtonPress, Value) {
                                if (ButtonPress === "Valider") {
                                    var type= Value.toString().split(" ")[2];
                                    
                                    if(type === "Contrôle"){
                                        var dateconsult =Consults[(Consults.length-1)].dateConsult;
                                        type="Contrôle Pour Consultation "+AddZero(parseInt(dateconsult.month))+"/"+AddZero(parseInt(dateconsult.day)+2)+"/"+dateconsult.year;
                                    }
                                     
                                    localStorage.setItem("num_conslt",GetCptParamByCode("CptConsult"));
                                    localStorage.setItem("Prescp",JSON.stringify([]));
                                    localStorage.setItem("typeConsult",type);
                                    localStorage.setItem("Ordonnance","false");
                                    localStorage.setItem("UpdateConsult","false");
                                    localStorage.setItem("Consults",JSON.stringify(Consults));
                                    localStorage.setItem("numFichPatient",Model.get("numFichPatient"));
                                    window.location.href='../body_page/Consultation.jsp';
                                }
                            });
                        }else{
                            localStorage.setItem("num_conslt",GetCptParamByCode("CptConsult"));
                            localStorage.setItem("Prescp",JSON.stringify([]));
                            localStorage.setItem("Ordonnance","false");
                            localStorage.setItem("UpdateConsult","false");
                            localStorage.setItem("Consults",JSON.stringify([]));
                            localStorage.setItem("typeConsult","Consultation");
                            localStorage.setItem("numFichPatient",Model.get("numFichPatient"));
                            window.location.href='../body_page/Consultation.jsp';
                        }
                    	
                }
            },
            ClickDelete: function () {
                var Model =this.model;
                var idpatient = this.model.get("numFichPatient");
                window.parent.$.SmartMessageBox({
                    title : "<img src='../img/ERR.png'></img>  Attention!",
                    content : "Etes Vous Sûre De La Suppression de Cette Patient",
                    buttons : '[Annuler][Valider]'
                    }, function(ButtonPressed) {
                        if (ButtonPressed === "Valider") {
                            
                                
                               var Err= SuppPatient(idpatient.toString());
                               
                                if(Err.toString()==="true"){
                                    window.location.reload();
                                    window.parent.swal("Notification !", "Patient Supprimé Avec Succès", "success");
                                    Model.collection.remove(Model);
                                }else
                                    window.parent.swal("Notification !!! ", "Ce patient à des consultations", "error");
                                    
                                 
                                  
                        }
                            
                });

                     
            }
            
            }) 
            
                    
            
        }
    ];
    
    
    var FocusableRow = Backgrid.Row.extend({
        highlightColor:'#BAD2E4',
        events:{
            click :'Click',
            mouseover :'mouseovercard'
        },
        rowFocused:function (){
          $('tbody.table-editable tr').removeAttr('style');
          this.$el.css('background-color',this.highlightColor);
        },
        Click : function(){
            var patient =this.model.get("numFichPatient");
            console.log(patient);
        },
        mouseovercard: function() {
        console.log('hello world');
        /*var template='<button class="btn btn-default btn-xs item_button_remove"><span class="glyphicon glyphicon-trash"></span> <span data-i18n="Hide">Hide</span></button>';
          this.$el.append(template);*/
    }
    });
    
    /*var ScrollableBody = Backgrid.Body.extend({
  // maybe you'd like to implement table body that is a block element so you can detect scroll events,
  // and may be implement fixed header (wink wink) https://github.com/wyuenho/backgrid/issues/4
});*/
// Initialize a new Grid instance
    var grid = new Backgrid.Grid({
        
        columns: columns,
        collection: territories,
        //row: FocusableRow,
        className: 'table table-bordered  table-editable no-margin table-hover full-height-content full-height-content-scrollable'
        //body: window.Backgrid.SummedColumnBody.extend({ columnsToSum: ['name', 'value'] })
    });
    
     var patientSideFilter = new Backgrid.Extension.ClientSideFilter({
        
        collection: territories,
        placeholder: "Search by patient",
        id: "rechercher",
        fields: ['numFichPatient','nom'],
        wait: 150
    });
    $(patientSideFilter.el).css({float: "right", margin: "0 0 10px 0"});
    
    
 
   
    $("#contents").before(patientSideFilter.render().el);
    document.getElementById("search").focus();
    
// Render the grid and attach the root to your HTML document
    $("#contents").append(grid.render().el);
    
            var paginator = new Backgrid.Extension.Paginator({
                       collection: territories
                     });
        $("#contents").append(paginator.render().el);
        
   
   


    territories.fetch({reset: true});
      return columns.length;
  }