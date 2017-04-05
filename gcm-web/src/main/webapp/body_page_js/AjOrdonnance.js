/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var Medicaments;
var prix_ =0;
var medics;
var iframe = document.getElementById('result');
$(function(){
    /*init*/
    var dateServeur=GetDateServeur();
	 var paramater = JSON.parse(localStorage.getItem("paramater"));
         var num_consult = localStorage.getItem("num_conslt");
         $("#numeroOrd").empty().append(num_consult);
        if(paramater!==null){
            $("#drname").empty().append("Dr."+paramater.prenomMedecin+" "+paramater.nomMedecin);
            $("#adresse").empty().append(FUllDateString(dateServeur).toString().substr(0,24));
            $("#dateOrd").empty().append("le "+dateServeur);
            $("#sp").empty().append("Spécialité : "+paramater.specialite);
            $("#gcm").empty().append("Tel &nbsp;&nbsp; : "+paramater.gsm);
            $("#tel").empty().append("Fixe &nbsp;&nbsp; : "+paramater.fixe);
        }
        
        $("#medic").on('save', function(e, params) {
            prix_+=parseInt(get_Medicament_Prix(params.newValue));
            $("#mntOrd").empty().append(prix_.toFixed(2));
        });
        $("#date").append(FUllDateString(dateServeur));
        var form = $('#container'),cache_width = form.width(),a4  =[ 595.28,  841.89];  // for a4 size paper width and height
        /*end*/
        
        /*commande*/
               $('#create_pdf').on('click',function(){
                   var Prescp=[];
                   $('#preOrd > tbody  > tr').each(function(tr) {
                       $this = $(this);
                       Prescp.push({
                           id:$this.find("[data-type='select2']").data('editable').value,
                            medc: $this.find("[data-type='select2']").text(),
                            posologie: $this.find("[data-type='address']").text()
                        }); 
                    });
                    
                    localStorage.setItem("Prescp",JSON.stringify(Prescp));
                       var form = $('#container'),
                       cache_width = form.width(),
                       a4  =[ 595.28,  841.89];  // for a4 size paper width and height

                       $('body').scrollTop(0);
                       createPDF(form,cache_width,a4);
               });	
               
            $('body').scrollTop(0);
            createPDF(form,cache_width,a4);
        /*end*/
    
		
                  
    /*remplir list medicament/posomogie*/
    Medicaments =GetListMedicament();
    localStorage.setItem("Medicaments",JSON.stringify(Medicaments));
    
    medics = [];
    $.each(Medicaments, function (i){
     medics.push({
                id: Medicaments[i].numMedic,
                text: Medicaments[i].desgMedic
            });   
    });
    
      $('#posologie').editable();
        
    $("#medic").editable({
        placement: 'right',
        select2:{
          width:'600px'  
        },
     inputclass: 'form-control input-medium',
            source: medics
    });
    /*end*/
    
    

                       
        
});