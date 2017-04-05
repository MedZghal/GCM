/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
  function tree(patient,age) {
      
      if(patient.assurCnam !== null){    
             $("#tree").jstree({
            'plugins': ["wholerow", "types"],
            'core': {
                "themes" : {
                    "responsive": false
                },    
                'data': [{
                        "text": patient.nom + " " +patient.prenom +" "+age+"ans",
                        "icon": '../img/user.png',
                        "children": [{
                            "text": " : "+patient.numFichPatient,
                            "icon": '../img/idcard.png',
                            "state": {
                                "selected": true
                            }
                        }, {
                            "text": "Profession : "+patient.profession ,
                            "icon": '../img/engineer.png'
                        }, {
                            "text":" : "+ patient.assurCnam.numAssur,
                            "icon" : '../img/cnam-tree.png',
                            "state": {
                                "opened": false
                            },
                            "children": [
                                 {
                                    "text": "Ident-Unique : "+patient.assurCnam.identUnique,
                                    "icon": '../img/cnam-tree.png'
                                }, {
                                    "text": "Qualite : "+patient.assurCnam.qualite ,
                                    "icon": '../img/cnam-tree.png'
                                }, {
                                    "text": "Régime d'Affiliation : "+patient.assurCnam.regimeAffi ,
                                    "icon": '../img/cnam-tree.png'
                                }, {
                                    "text": "Type Assurance : "+patient.assurCnam.type ,
                                    "icon": '../img/cnam-tree.png'
                                }
                                , {
                                    "text": "Rang Assuré : "+patient.assurCnam.rangAssur ,
                                    "icon": '../img/cnam-tree.png'
                                }
                            ]
                        }, {
                            "text": "Sutuation Familiaire : " +patient.sutFam,
                            "icon": '../img/family.png'
                        }
                        , {
                            "text": "Ville : " +patient.ville.ville +" "+patient.ville.gouvernorat,
                            "icon": '../img/ville.png'
                        } 
                    ]
                    }
                ]
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-folder icon-state-warning icon-lg"
                },
                "file" : {
                    "icon" : "fa fa-file icon-state-warning icon-lg"
                }
            }
        });
            }
            else{
                $("#tree").jstree({
            'plugins': ["wholerow", "types"],
            'core': {
                "themes" : {
                    "responsive": false
                },    
                'data': [{
                        "text": patient.nom + " " +patient.prenom +" "+age+" Ans",
                        "icon": '../img/user.png',
                        "children": [{
                            "text": "ID : "+patient.numFichPatient,
                            "icon": '../img/idcard.png',
                            "state": {
                                "selected": true
                            }
                        }, {
                            "text": "Profession : "+patient.profession ,
                            "icon": '../img/engineer.png'
                        }, {
                            "text":" CNAM ",
                            "icon" : '../img/cnam-tree.png',
                            "state": {
                                "disabled": true
                            }
                        }, {
                            "text": "Sutuation Familiaire : " +patient.sutFam,
                            "icon": '../img/family.png'
                        }
                        , {
                            "text": "Ville : " +patient.ville.ville +" "+patient.ville.gouvernorat,
                            "icon": '../img/ville.png'
                        } 
                    ]
                    }
                ]
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-folder icon-state-warning icon-lg"
                },
                "file" : {
                    "icon" : "fa fa-file icon-state-warning icon-lg"
                }
            }
        });
            }
    }

function GetListActeMedicauxAllByNumConsult(NumConsult)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=consult&function=GetListActeMedicauxAllByNumConsult&NumConsult="+NumConsult,
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

function AjAntecedent(typ,descp,patient)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=update&function=AjAntecedent&typ="+typ+"&descp="+descp+"&patient="+patient,
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


function SuppAntecedentByPatient(patient)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=update&function=SuppAntecedentByPatient&patient="+patient,
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

function GetListAntecedents()
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=consult&function=GetListAntecedents",
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



function GetListMotif()
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=consult&function=GetListMotif",
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

function remplir_Motif(data){
    
    var select_html="";
    $.each(data , function(i){
        select_html+="<option value='"+data[i].numMotif+"'>&nbsp;&nbsp;&nbsp;&nbsp;"+data[i].libelle+"</option>";
    });
    $("#Motif").empty().append(select_html);
    
}


function GetListDiagnostic()
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=consult&function=GetListDiagnostic",
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

function remplir_Diag(data){
    
    var select_html="";
    $.each(data , function(i){
        select_html+="<option value='"+data[i].numDiag+"'>&nbsp;&nbsp;&nbsp;&nbsp;"+data[i].libelle+"</option>";
    });
    $("#Diag").empty().append(select_html);
    
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



function Antecedents(antecedents,numFichPatient){
    
      if(Object.keys(antecedents).length>0)
            SuppAntecedentByPatient(numFichPatient);
    /***Médicaux ***/
    var antMedic = $("#antMedic").tagsinput('items') ;
        var antMedictab = antMedic.toString().split(',');
        if(antMedictab[0]!==""){
            $.each(antMedictab , function (i){
                AjAntecedent("Médicaux",antMedictab[i],numFichPatient) ;
            });
        }
    /***Chirurgicaux ***/
    var antch = $("#antch").tagsinput('items') ;
        var antchtab = antch.toString().split(',');
        if(antchtab[0]!==""){
            $.each(antchtab , function (i){
                AjAntecedent("Chirurgicaux",antchtab[i],numFichPatient) ;
            });
        }
    /***Familiaux ***/
    var antFami = $("#antFami").tagsinput('items') ;
        var antFamitab = antFami.toString().split(',');
        if(antFamitab[0]!==""){
            $.each(antFamitab , function (i){
                AjAntecedent("Familiaux",antFamitab[i],numFichPatient) ;
            });
        }
    /***Allergies ***/
    var antAllg = $("#antAllg").tagsinput('items') ;
        var antAllgtab = antAllg.toString().split(',');
        if(antAllgtab[0]!==""){
            $.each(antAllgtab , function (i){
                AjAntecedent("Allergies",antAllgtab[i],numFichPatient) ;
            });
        }
}

function handleValidation1() {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation
        var form2 = $('#FormConsult');
            var error2 = $('.alert-danger', form2);
            var success2 = $('.alert-success', form2);

        form2.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "", // validate all fields including form hidden input
            messages: {
                Motif: {
                    maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                    minlength: jQuery.validator.format("At least {0} items must be selected")
                }
                ,
                Diag: {
                    maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                    minlength: jQuery.validator.format("At least {0} items must be selected")
                }
            },
            rules: {
                Motif: {
                    required: true
                },
                Diag: {
                    required: true
                },
                date_consult: {
                    required: true,
                    date: true
                }
            },
            invalidHandler: function (event, validator) { //display error alert on form submit              
                    success2.hide();
                    error2.show();
                    App.scrollTo(error2, -200);
                },

                errorPlacement: function (error, element) { // render error placement for each input type
                    var icon = $(element).parent('.input-icon').children('i');
                    icon.removeClass('fa-check').addClass("fa-warning");  
                    icon.attr("data-original-title", error.text()).tooltip({'container': 'body'});
                },

                highlight: function (element) { // hightlight error inputs
                    $(element)
                        .closest('.form-group').removeClass("has-success").addClass('has-error'); // set error class to the control group   
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    
                },

                success: function (label, element) {
                    var icon = $(element).parent('.input-icon').children('i');
                    $(element).closest('.form-group').removeClass('has-error').addClass('has-success'); // set success class to the control group
                    icon.removeClass("fa-warning").addClass("fa-check");
                },

                submitHandler: function (form) {
                    success2.show();
                    error2.hide();
                    form[0].submit(); // submit the form
                }
        });
    }
    
    