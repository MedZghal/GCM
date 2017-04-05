/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global option, GetDateServeur */

var patient;
var date_consult;
var numFichPatientConsult ;
var ConsultType;
var num_conslt;
var antecedents =[];
var Err="";
$(function(){
    /*init*/
    patient =GetPatientByNumFichPatient(localStorage.getItem("numFichPatient"));
    numFichPatientConsult =patient.numFichPatient;
    num_conslt =localStorage.getItem("num_conslt");
    localStorage.setItem("patient",JSON.stringify(patient));
    ConsultType = localStorage.getItem("typeConsult");
    $("#imgpatient").attr("data-original-title","Consultation N° "+localStorage.getItem("num_conslt"));
    $("#typeConsult").append(ConsultType);
    Consults = JSON.parse(localStorage.getItem("Consults"));  
    $("#id").append('ID : '+numFichPatientConsult);
    window.parent.$("#nomprenompatient").append(patient.nom + " " +patient.prenom );
    $("#patientname").append(patient.nom + " " +patient.prenom );
    $("#date").append(FUllDateString(GetDateServeur()));
                
    /*end*/
    
    /*remplir liste motif/diag*/        
    $("#Motif").select2({
                    placeholder: "sélectionnez Motif",
                    width: '100%',
                    tags: true,
                    tokenSeparators: [',', ' ']
                });
    var motifs =GetListMotif();
    remplir_Motif(motifs);
    $("#Motif").css("height","100px");     
    
    
    $("#Diag").select2({
                    placeholder: "sélectionnez Diagnostic",
                    width: '100%'
                });
                
    var diags =GetListDiagnostic();
                remplir_Diag(diags);
                $("#Diag").css("margin-left","20px");
                $("[role='combobox']").css("padding-left","20px");
                $("[role='combobox']").css("background-color","#eef1f5");
                
    /*end*/
                
   
    /*init flat button back*/
                if(!window.parent.$("#menuback").hasClass('hide'))
                    window.parent.$("#menuback").toggleClass('hide');
    /*end*/        
    
    /*init ordonnance*/
                $('#HisSoins').append(Consults.length);
                var Prescp=JSON.parse(localStorage.getItem("Prescp")).length;
                if(Prescp>0)
                    $("#nbOrd").empty().append("1");
                else
                {
                    var PrOrd=GetConsultationByNum(num_conslt);
                        if(PrOrd!==null){
                            if(PrOrd.numOrd!== null)
                            $("#nbOrd").empty().append("1");
                        }
                }
    /*end*/
    
    /*Commande*/
                $("#ArchiMedical").click(function (){
                    localStorage.setItem("numFichPatient",numFichPatientConsult);
                    window.parent.$("#menuback").removeClass('hide');
                    window.location.href='ArchiveMedic.jsp';
                });
                
                $("#imgpatient").click(function (){
                    localStorage.setItem("Update","true");
                    localStorage.setItem("Consultation","true");
                    localStorage.setItem("numFichPatient",numFichPatientConsult);
                    window.parent.$("#menuback").removeClass('hide');
                    window.location.href='AjPatient.jsp';
                });
                
                $("#Ordonnance").click(function (){
                    if(GetConsultationByNum(num_conslt)!==null){
                    localStorage.setItem("numFichPatient",numFichPatientConsult);
                    window.parent.$("#menuback").removeClass('hide');
                    window.location.href='Ordonnance.jsp';
                    }
                    else
                        window.parent.toastr.error("Attention, la consultation n'est pas encore enregistrée!.",'Error',option);
                        
                });
                
                $("#ActeMédicale").click(function (){
                    if(GetConsultationByNum(num_conslt)!==null){
                    window.parent.$.SmartMessageBox({
                                    title : "<img src='../img/syringe.png'> Acte Médical",
                                    content : "Choisir le type de L'acte Médical",
                                    buttons : "[Annuler][Valider]",
                                    input : "select",
                                    options : "[Acte Médical Non Remboursable par la CNAM][Acte Médical Remboursable par la CNAM]"
                            }, function(ButtonPress, Value) {
                                if (ButtonPress === "Valider") {
                                    var type= Value.toString().split(" ")[2];
                                    localStorage.setItem("numFichPatient",numFichPatientConsult);
                                    window.parent.$("#menuback").removeClass('hide');
                                    if(type.toString()==="Remboursable"){
                                        localStorage.setItem("ActeRemborsable","true");
                                        window.location.href='../body_page/ActeMedicCnam.jsp';
                                    }else{
                                        localStorage.setItem("ActeRemborsable","false");
                                        window.location.href='../body_page/ActeMedic.jsp';
                                    }
                               }
                            });
                    }
                    else
                        window.parent.toastr.error("Attention, la consultation n'est pas encore enregistrée!.",'Error',option);
                        
                });
                
                $("#Hisjsp").click(function (){
                    if(parseInt($("#HisSoins").text())>0){
                    localStorage.setItem("Consultation","true");
                    localStorage.setItem("numFichPatient",numFichPatientConsult);
                    localStorage.setItem("motifs",JSON.stringify(motifs));
                    window.parent.$("#menuback").removeClass('hide');
                    window.location.href='HistoriqueSoins.jsp';
                    }else
                        window.parent.toastr.error("Ce patient n'a aucune consultation ?",'Error',option);
                });
                
                $("#ArchiMedical").click(function (){
                    window.parent.$("#confirmeemodal").attr("data-target","#invocie"); 
                    window.parent.$("#confirmeemodal").trigger("click");
                 });

                $("#submit").click(function (){
                        handleValidation1();

                        if( $('#FormConsult').valid() ){

                                Antecedents(antecedents,numFichPatientConsult);
                                if(patient.assurCnam !== null)
                                    window.parent.$("#confirmeemodal").attr("data-target","#ConsultCnam");
                                else
                                    window.parent.$("#confirmeemodal").attr("data-target","#Consult");

                                window.parent.$("#confirmeemodal").trigger("click");
                                window.parent.$("#dateConsultEng").val(d[1]+"/"+d[0]+"/"+d[2]);
                                window.parent.$("#Honoraire").val(30,500);
                                window.parent.$("#Tiket").val(30,500);
                                window.parent.$("#MontantCNAM").val(24,500);
                                window.parent.$("#dateConsultEngcnam").val(d[1]+"/"+d[0]+"/"+d[2]);
                        }else
                            window.parent.toastr.error('Vérifiez que tous les champs sont remplis correctement?','Error',option);
                    });
    /*end*/  
                
                
               
                
    /*init examen*/    
                var d = GetDateServeur().split('/');
                $('#dateta').append(d[1]+"/"+d[0]+"/"+d[2]);
                $('#date_consult').val(d[1]+"/"+d[0]+"/"+d[2]);
                
                $("#TA").inputmask('99/99', {
                    numericInput: true,
                    rightAlignNumerics: false,
                    greedy: false
                });
                 $("#Pouls").inputmask('999 bqM', {
                    numericInput: true,
                    rightAlignNumerics: false,
                    greedy: false
                });
                 $("#Température").inputmask('99 °C', {
                    numericInput: true,
                    rightAlignNumerics: false,
                    greedy: false
                });
                $("#Poids").inputmask('999 kg', {
                    numericInput: true,
                    rightAlignNumerics: true,
                    greedy: false
                });
                
                $("#Poids").val(patient.poids);
    /*end*/
    
    /*init slide patient*/
            var age = GetAge(patient.datenaiss);
            if(age === 0)
                age++;
            $("#patientprof").append(age+ " ans");
            $("#imgpatient").attr('src',ImgProfile(patient.datenaiss,patient.sexe));
            tree(patient,age) ; 
             /***cnam ***/
             if(patient.assurCnam !== null){
                 $("#cnam").append('<img src="../img/cnam.png" style="width: 28px;" alt="cardiogram"> : <label id="id" class="label label-primary uppercase" >'+patient.assurCnam.identUnique+'</label> ');
                 var htmlbody='* Numero Asuurance : '+patient.assurCnam.numAssur;
                 $("#cnam").attr("data-content",htmlbody);
                 $("#cnam").attr("data-content",htmlbody);
             }
             /***apci***/
             if(patient.codeApci !== ""){
                 $("#apci").removeClass('hide');
                 $("#apci").append('<img id="apci"  src="../img/apci_logo_600w.png" style="width: 30px;"  alt="apci">');
                 $("#traitementbody").removeClass("hide");
                 $("#apci").attr("data-content","* Code APCI : "+patient.codeApci);
                 /***Traitements APCI ***/
                 var traitapci = GetTraitementAPCIByNumPatient(numFichPatientConsult);
                 if(Object.keys(traitapci).length>0){
                     $.each(traitapci, function (i){
                         $("#triApci").tagsinput('add',traitapci[i].medicament.desgMedic);
                     });
                 }
             }else{
                 if(!$("#traitementbody").hasClass("hide"))
                     $("#traitementbody").toggleClass("hide");
                 if(!$("#apci").hasClass("hide"))
                     $("#apci").toggleClass("hide");
             }
             /***autreAssur***/
             if(patient.autreAssur !== "")
                 $("#autreAssur").append(AutreAssurImg(patient.autreAssur));
    /*end*/
             
    /*init antecedents*/
            $(".bootstrap-tagsinput").css("background-color","#eef1f5");
            $(".bootstrap-tagsinput input").css("width","100%");
            RemplirAntecedents(numFichPatientConsult);
    /*end*/
    
    /*init update mode*/
     if(localStorage.getItem('UpdateConsult')==="true")
            {
                var consult =JSON.parse(localStorage.getItem("conslt")); 
                localStorage.setItem("num_conslt",consult.numConsult);
                $("#imgpatient").attr("data-original-title","Consultation N° "+consult.numConsult);
                $("#date_consult").val(DateMM_DD_YYYY(consult.dateConsult));
                ConsultType =consult.typeConsult +" : "+consult.numConsult;
                $("#typeConsult").empty().append(ConsultType);
                var motifs = GetListMotifConsultByNumConsult(consult.numConsult);
                var valeur=[];
                 if(motifs.length>0){
                    $.each(motifs, function (i){
                        valeur.push(motifs[i].motif.numMotif);
                    });
                    $("#Motif").select2().val(valeur).trigger("change");
                }
                $("#Diag").select2().val(consult.diagconsult.numDiag).trigger("change");
                $("#Diag").css("margin-left","20px");
                $("[role='combobox']").css("padding-left","20px");
                $("[role='combobox']").css("background-color","#eef1f5");
                
                if(consult.numExamen !== null){
                    $("#collapse_1").toggleClass('in');
                    $("#collapse_1").attr('aria-expanded',true);
                    $("#collapse_1").removeAttr('style');
                    $("#TA").val(consult.numExamen.ta);
                    $("#Pouls").val(consult.numExamen.pouls);
                    $("#Température").val(consult.numExamen.temp);
                    $("#AirGan").val(consult.numExamen.airesGangl);
                    $("#AusCar").val(consult.numExamen.auscuCardi);
                    $("#AusPleuro").val(consult.numExamen.auscuPleuro);
                    $("#Etgeneral").val(consult.numExamen.etatGeneral);
                    $("#Exphy").val(consult.numExamen.examPhy);
                    $("#ExAbd").val(consult.numExamen.examenAbdominal);
                    $("#ExORL").val(consult.numExamen.examenORL);
                }
                if(consult.numOrd!==null)
                    $("#nbOrd").empty().append("1");
                $("#nbactemedicale").empty().append(GetListActeMedicauxAllByNumConsult(consult.numConsult).length);
            }
    /*end*/       
   
});
