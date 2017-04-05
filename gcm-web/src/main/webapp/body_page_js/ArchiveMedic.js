
/* global _ */

$(function (){
    /*init*/
    $('body').scrollTop(0);
    $("#date").append(FUllDateString(GetDateServeur()));
    $(".bootstrap-tagsinput").css("background-color","#eef1f5");
    $(".bootstrap-tagsinput input").css("width","130%");
    $(".bootstrap-tagsinput").css("margin-left","110px");
    $(".bootstrap-tagsinput").css("margin-top","-25px");
    $(".bootstrap-tagsinput").css("width","100%");
    $("[role='combobox']").css("padding-left","20px");
    $("[role='combobox']").css("background-color","#eef1f5");
    //$.fn.select2.defaults.set("theme", "bootstrap");
    /*end*/
    
    /*commande*/
    $("#select2-patient").change(function (){
       alert($("#select2-patient").val()); 
       RemplirAntecedents($("#select2-patient").val());
    });
    /*end*/
    
});
