
$(function(){
    /*init*/
        if(!window.parent.$("#menuback").hasClass('hide'))
                window.parent.$("#menuback").toggleClass('hide');
        var nbpatient= createBackGrid();
        $(window).on('load', function(){
            $("#nbpatient").attr("data-value",nbpatient);  
            $('#nbpatient').counterUp({
                    delay: 10,
                    time: 1000,
                    offset: 70,
                    beginAt: 100,
                    formatter: function (n) {
                      return n.replace(/,/g, '.');
                    }});

         });
        
        $("#date").append(FUllDateString(GetDateServeur()));
   
        
        window.parent.$("div.backgrid-paginator ul").toggleClass("pagination");
    /*end*/
      
    /*commande*/
    $("#Addpatient").unbind("click");
    $("#Addpatient").bind("click", function (e)
    {
       localStorage.setItem("Consultation","false");
       localStorage.setItem("Update","false");
       window.location.href='AjPatient.jsp';
    });
    /*end*/
});
