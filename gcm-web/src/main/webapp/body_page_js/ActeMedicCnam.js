/* global option */

var Err;
var update;
$(function (){
    /*init*/
   $('body').scrollTop(0);
   var date =GetDateServeur();
   $("#date").append(FUllDateString(date));
   var num_consult = localStorage.getItem("num_conslt");
   update =localStorage.getItem("UpdateConsult");
   var ActeRemborsable =localStorage.getItem("ActeRemborsable");
   /*end*/
   
   /*Patient*/
   patient = JSON.parse(localStorage.getItem("patient"));  
   $("#imgpatient").attr('src',ImgProfile(patient.datenaiss,patient.sexe));
   $("#imgpatient").attr("data-original-title","Patient N° "+patient.numFichPatient);
     var age = GetAge(patient.datenaiss);
   if(age === 0)
       age++;
   $("#patientdetails").empty().append("Acte Médicale Pour  "+patient.prenom + " " +patient.nom +" "+age+ " ans");
   var cnam="", apci ="" , AutreAurr="";
        if(patient.assurCnam !== null)
            cnam ="<img src='../img/cnam.png' style='width: 28px;'class='tooltips' data-tooltip='tooltip' title='' data-original-title="+patient.assurCnam.numAssur+" alt='' >&nbsp;"+"N°"+patient.assurCnam.numAssur+"&nbsp;";
        if(patient.codeApci !== "")
            apci ="<img src='../img/apci_logo_600w.png' style='width: 28px;' >&nbsp;"+"N°"+patient.codeApci+"&nbsp;";
        if(patient.autreAssur !== "")
            AutreAurr =AutreAssurImg(patient.autreAssur);
        $("#details").empty().append(cnam +" "+apci+" "+AutreAurr);
    $("#patientDate").empty().append(FUllDateString(date));
   /*end*/
   
   /*remplir select2*/
    $("#acte").select2({
                    placeholder: "sélectionnez Acte Médicale",
                    width: '100%'
                });
     $("#dsgacte").select2({
                    placeholder: "sélectionnez Acte Médicale",
                    width: '100%'
                });
    $("#acte").css("margin-left","20px");
    $("#libacte").select2({
                    placeholder: "sélectionnez Libellé Acte ",
                    width: '100%'
                });
    $("#libacte").css("margin-left","20px");
    $("[role='combobox']").css("padding-left","30px");
    $("[role='combobox']").css("background-color","#eef1f5");
                
    var acte =GetListActe();
    remplir_Acte(acte,$('#acte'));          
    remplir_libacte(acte,$('#libacte'));     
    localStorage.setItem("ActeCnam",JSON.stringify(acte));
    var d = date.split('/');
    $('#date_Acte').val(d[1]+"/"+d[0]+"/"+d[2]);
    /*end*/
   
    
    /*liste acte*/
      if(ActeRemborsable.toString()==="true"){
        $("#libacte").val($("#acte").val().trim()).trigger("change"); 
            var ActeObj=GetActe(JSON.parse(localStorage.getItem("ActeCnam")),$("#acte").val().trim());
            $("#Montant").val(ActeObj.montant);
            $("#Cotation").val(ActeObj.cotation);
            $("#Tiket").val(ActeObj.tiketModer);
            if(ActeObj.accord.toString()==="1")
                $('#radio6').prop("checked", true);
            else
                $('#radio7').prop("checked", true);
            
            remplirActeMedical(update,num_consult);
            
        }else
            remplirActeMedicalNonRemb(update,num_consult);
    /*end*/
                
                
    /*commande*/
  
        
    $("#acte").change(function (){
        $("#libacte").val($("#acte").val().trim()).trigger("change"); 
        var ActeObj=GetActe(JSON.parse(localStorage.getItem("ActeCnam")),$("#acte").val().trim());
        $("#Montant").val(ActeObj.montant);
        $("#Cotation").val(ActeObj.cotation);
        $("#Tiket").val(ActeObj.tiketModer);
        if(ActeObj.accord.toString()==="1")
            $('#radio6').prop("checked", true);
        else
            $('#radio7').prop("checked", true);
   
    });
    
    $("#AjActe").click(function (){
       window.parent.$("#confirmeemodal").attr("data-target","#ajactemodal");
       window.parent.$("#confirmeemodal").trigger("click"); 
    });
    
    
    $("#submit").click(function (){
       $('#FormVAL').data('validator', null);
       handleValidation();
       if($('#FormVAL').valid()){
           
            if(update==="false")
               Err= AjActeMedicaux($("#acte").val().trim(),"0",$('#date_Acte').val(),$("#price").val());
           else
               Err= AjActeMedicaux($("#acte").val().trim(),num_consult,$('#date_Acte').val(),$("#price").val());
           
           if(Err.toString()==="true"){
                window.parent.swal("Notification !", "Acte insérer Avec Succès ", "success");
                
                 if(update==="true")
                    actes=GetListActeMedicauxByNumConsult(num_consult);
                
                RemplirActes(actes);
                $('.alert-danger').hide();
                treeRefresh();
                $("#nbActeMedic").empty().append(actes.length);
            }
            else
                if(Err.toString().includes("dupliquée"))
                     window.parent.toastr.error('Cette acte est déja existe?','Error',option);
             else
                 window.parent.toastr.error('Vérifiez que tous les champs sont remplis correctement?','Error',option);
        }
         else
             window.parent.toastr.error('Vérifiez que tous les champs sont remplis correctement?','Error',option);
    });
    /*end*/
                
    /*tree*/
        treeRefresh();
    /*end*/
                
    /*Acte Non Rembousable*/
        if(ActeRemborsable.toString()==="false"){
            $("#dsgacte").select2({
                tags: true
              });
              
            $("#dsgacte").css("margin-left","20px");
            $("[role='combobox']").css("padding-left","30px");
            $("[role='combobox']").css("background-color","#eef1f5");
            var acte =GetListActeNonRemborsable();
            remplir_ActeNOnRemb(acte,$('#dsgacte'));    
            
             var ActeObj=GetActe(acte,$("#dsgacte").val());
                $("#Montant").val(ActeObj.montant);
                $("#dspacte").val(ActeObj.description);
                
            $("#dsgacte").change(function (){
                var ActeObj=GetActe(acte,$("#dsgacte").val());
                $("#Montant").val(ActeObj.montant);
                $("#dspacte").val(ActeObj.description);

            });
        
         
        $("#submitacte").click(function (){
           $('#FormVALacte').data('validator', null);
           handleValidationActe();
           if($('#FormVALacte').valid()){
               if(GetActeNonRemborsablebyLibelle($("#dsgacte").select2('data')[0]['text'].trim())=== null){
                   Err=AjActe($("#dsgacte").val(),"0","",$("#Montant").val(),$("#dspacte").val(),"","");
                   var cpt =GetMaxActe();
                   if(update==="true")
                        Err= AjActeMedicaux(cpt,num_consult,$('#date_Acte').val(),"0");
                }else
                {
                    Err="true";
                    if(update==="true")
                        Err= AjActeMedicaux($("#dsgacte").val(),num_consult,$('#date_Acte').val(),"0");
                }
               if(Err.toString()==="true"){
                   
                    window.parent.swal("Notification !", "Acte insérer Avec Succès ", "success");
                    var acte =GetListActeNonRemborsable();
                    remplir_ActeNOnRemb(acte,$('#dsgacte')); 
          
                     if(update==="true")
                        actes=GetListActeMedicauxNonRembByNumConsult(num_consult);

                    RemplirActesNonRemb(actes);
                    $('.alert-danger').hide();
                    treeRefresh();
                    $("#nbActeMedic").empty().append(actes.length);
                }
                else
                    if(Err.toString().includes("dupliquée"))
                         window.parent.toastr.error('Cette acte est déja existe?','Error',option);
            }
             else
                 window.parent.toastr.error('Vérifiez que tous les champs sont remplis correctement?','Error',option);
        });
        
        }
    /*end*/            
                
                
                
});
