<%-- 
    Document   : Ordonnance
    Created on : 21 mars 2017, 15:52:20
    Author     : ASUS
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <title> Archive Médical </title>
        <jsp:include page="../body_page/css_declare.jsp"/>
    </head>
    
    <body style="font-family: cursive;background-color: transparent;height: 100%;"  >
          <!-- BEGIN PAGE BAR -->
                        <div class="page-bar" style="padding-top: 5px">
                            <ul class="page-breadcrumb">
                                <li>
                                    <i class="icon-home"></i>
                                    <a href="index.html">Home</a>
                                    <i class="fa fa-circle"></i>
                                </li>
                                <li>
                                    <i class="icon-chemistry"></i>
                                    <span> Archive Médical </span>
                                </li>
                            </ul>
                            <div class="page-toolbar">
                                <div class="btn-group pull-right">
                                    <div class="page-toolbar">
                               <div class="page-toolbar">
                                <div id="dashboard-report-range" class="pull-right tooltips btn btn-sm" data-container="body" data-placement="bottom" data-original-title="Change dashboard date range">
                                    <i class="icon-calendar"></i>&nbsp;
                                    <span id="date" class="uppercase has-success"></span>&nbsp;
                                    <i class="fa fa-angle-down"></i>
                                </div>
                               </div>
                            </div>
                                </div>
                            </div>
                            
                        </div>
                        <!-- END PAGE BAR -->
                          <div class="mt-element-ribbon" style="padding: 0px 0px 0px 10px;" data-auto-scroll="true" data-slide-speed="200">
            
            
                                    <div class="portlet-body form">
                                        <form role="form" id="FormVAL" novalidate="novalidate" method="POST">
                                                
                                                <div class="panel-group accordion" id="accordion3">
                                                    
                                                <div class="panel panel-default">
                                                   
                                                    <div id="collapse_3" class="panel-collapse collapse in" aria-expanded="true" >
                                                        <div class="row" style="margin-left: 0px;">
                                                   <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                        <div class="ribbon-sub ribbon-clip"></div>
                                                                        <img id="fichelog" src="../img/pills.png" alt="details">&nbsp; Archive Médical </div>
                                                    </div>
                                                        <div class="panel-body">
                                                

                                                                <div class="alert alert-danger display-hide">
                                                                   <button class="close" data-close="alert"></button><i class="fa-fw fa fa-times"></i> Cette consultation n'a pas de prescription ou n'est pas validée. Veuillez vérifier ci-dessous. </div>
                                                               <div class="alert alert-success display-hide">
                                                                   <button class="close" data-close="alert"></button><i class="fa-fw fa fa-check"></i> Votre Ordonnance est Validé ! </div>


                                                                           <div class="row">
                                                                               <div class="col-md-6">
                                                                               <div class="portlet light bordered" style="background-color: #fff;margin: 5px;height: 130px;">
                                                                                   <div class="portlet-title tabbable-line">
                                                                                       <div class="caption">
                                                                                           <i class="icon-bubbles font-dark hide"></i>
                                                                                           <span class="caption-subject font-dark bold uppercase"><img src="../img/pillsapci.png" alt="details" > &nbsp;Patients </span>
                                                                                       </div>
                                                                                       <ul class="nav nav-tabs">
                                                                                           <li class="active">
                                                                                               <a href="#portlet_comments_1" data-toggle="tab"> Liste des Patients &nbsp;<img src="../img/pills.png" style="width: 20px;margin-top: -5px;" alt="Ordonnance"> </a>
                                                                                           </li>
                                                                                           <li>
                                                                                               <a href="javascript:window.location.href='AjPatient.jsp';"> Ajouter Patient <img src="../img/drugs.png" style="width: 20px;margin-top: -5px;" alt="Ordonnance"> </a>
                                                                                           </li>
                                                                                       </ul>
                                                                                   </div>
                                                                                   <div class="portlet-body">
                                                                                            <div class="col-sm-12">
                                                                                                <div class="form-group form-md-line-input has-success " style=" margin-top: -15px; ">
                                                                                                        <div class="input-icon">
                                                                                                            <select id="select2-patient" class="form-control"></select>
                                                                                                            <label for="form_control_1">Patient</label>
                                                                                                            <i class="fa fa-user-circle-o" aria-hidden="true" style=" margin-bottom: 6px; "></i>
                                                                                                        </div>
                                                                                                    </div>
                                                                                            </div>
                                                                                   </div>
                                                                               </div>
                                                                               </div>
                                                                                <div class="col-md-6" >
                                                                               <div class="panel-group accordion scrollable" id="accordion2">
                                                                             <div class="panel panel-default">
                                                                                <div class="panel-heading">

                                                                                    <div class="panel-title" style="height: 60px">
                                                                                        <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                                         <div class="ribbon-sub ribbon-clip"></div>
                                                                                         <img src="../img/test-tube.png" alt="assur">&nbsp;Antécedents </div>
                                                                                        <a id="accordion-toggle" class="accordion-toggle accordion-toggle-styled collapsed" style="font-family: cursive;padding-top: 20px " data-toggle="collapse" data-parent="#accordion1" href="#collapse_2" aria-expanded="false"> Détails antécedents </a>
                                                                                    </div>

                                                                                </div>

                                                                                    <div id="collapse_2" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;">
                                                                                        <div class="panel-body" >
                                                                                            <label class="label label-danger uppercase pull-left"><i class="fa fa-user"></i>&nbsp; Antécidents Personnels</label><br/>
                                                                    
                                                                    <br/>
                                                                    
                                                                    <div class="row">
                                                                        <label class="label label-sm label-success uppercase pull-left" style="margin-left: 40px;margin-right: 22px;"><i class="fa fa-medkit"></i>&nbsp;Médicaux</label>
                                                                            <div class="form-group">
                                                                                <div class="col-md-10">
                                                                                    <img class="pull-left" src="../img/pulse.png" alt="Details" style="margin-left: 110px; margin-top: -25px;">
                                                                                    <input id="antMedic" type="text" class="form-control input-large" value="" data-role="tagsinput" style="height: 250px;" placeholder="Entrer antécidents médicaux"> 
                                                                                </div>
                                                                            </div>
                                                                    </div>
                                                                    <br/>
                                                                    <div class="row">
                                                                        <label class="label label-sm label-success uppercase pull-left" style="margin-left: 19px"><i class="fa fa-user-md"></i>&nbsp;Chirurgicaux</label>
                                                                            <div class="form-group">
                                                                                <div class="col-md-10">
                                                                                    <img class="pull-left" src="../img/cherig.png" alt="Details" style="margin-left: 110px; margin-top: -25px;">
                                                                                    <input id="antch" type="text" class="form-control input-large" value="" data-role="tagsinput" style="height: 250px;" placeholder="Entrer antécidents chirurgicaux"> 
                                                                                </div>
                                                                            </div>
                                                                    </div>
                                                                    
                                                                    <br/>
                                                                    
                                                                    <label class="label label-danger uppercase pull-left"><i class="fa fa-users"></i>&nbsp; Antécidents Familiaux</label><br/>
                                                                     <br/>
                                                                    
                                                                    <div class="row">
                                                                       
                                                                            <div class="form-group">
                                                                                <div class="col-md-10" style="margin-top: 15px;">
                                                                                    <img class="pull-left" src="../img/dru_gs.png" alt="Details" style="margin-left: 115px; margin-top: -20px;">
                                                                                    <input id="antFami" type="text" class="form-control input-large" value="" data-role="tagsinput" style="height: 250px;" placeholder="Entrer antécidents familiaux"> 
                                                                                </div>
                                                                            </div>
                                                                    </div>
                                                                     
                                                                     <br/>
                                                                     <label class="label label-danger uppercase pull-left"><i class="fa fa-user"></i>&nbsp; Antécidents Allergies</label><br/>
                                                                     <br/>
                                                                    
                                                                    <div class="row">
                                                                       
                                                                            <div class="form-group">
                                                                                <div class="col-md-10" style="margin-top: 15px;">
                                                                                    <img class="pull-left" src="../img/nurse_.png" alt="Details" style="margin-left: 115px; margin-top: -20px;">
                                                                                    <input id="antAllg" type="text" class="form-control input-large" value="" data-role="tagsinput" style="height: 250px;" placeholder="Entrer antécidents allergies"> 
                                                                                </div>
                                                                            </div>
                                                                    </div>
                                                                     <div id="traitementbody" class="hide">
                                                                         <br/>
                                                                     <label class="label label-warning uppercase pull-left"><i class="fa fa-medkit"></i>&nbsp; Traitements APCI</label><br/>
                                                                     <br/>
                                                                    
                                                                    <div class="row">
                                                                       
                                                                            <div class="form-group">
                                                                                <div class="col-md-10" style="margin-left: 140px;">
                                                                                    <img class="pull-left" src="../img/pill_s.png" style="margin: 5px;" alt="Details">
                                                                                    <input id="triApci" type="text" class="form-control input-large" value="" data-role="tagsinput" style="height: 250px;" placeholder="Entrer traitements apci"> 
                                                                                </div>
                                                                            </div>
                                                                    </div>
                                                                     </div>
                                                                                        </div>
                                                                                    </div>
                                                                                 </div>
                                                                        </div>
                                                                               </div>
                                                                        <div class="col-sm-6 pull-right">
                                                                               <div class="panel-group accordion scrollable" id="accordion1">
                                                                                  <div class="panel panel-default">
                                                                                        <div class="panel-heading">

                                                                                            <div class="panel-title" style="height: 60px">
                                                                                                <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                                                 <div class="ribbon-sub ribbon-clip"></div>
                                                                                                 <img src="../img/apci.png" alt="cnam">&nbsp; CNAM </div>

                                                                                                 <a>
                                                                                                 <div id="SuppCnam"  class="ribbon ribbon-right ribbon-vertical-right ribbon-border-dash ribbon-color-danger ribbon-round ribbon-shadow uppercase hide" style="margin-right: 40px">
                                                                                                     <i class="icon-trash" style="margin-left: -3px"></i>
                                                                                                </div>
                                                                                                 </a>

                                                                                                <a id="hidecnam" class="accordion-toggle accordion-toggle-styled collapsed" style="font-family: cursive;padding-top: 20px " data-toggle="collapse" data-parent="#accordion1" href="#collapse_1" aria-expanded="false"> Asureé CNAM </a>

                                                                                            </div>



                                                                                        </div>

                                                                                        <div id="collapse_1" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;">
                                                                                            <div class="panel-body form">
                                                                                                        <div class="col-md-12 " >
                                                                                                    <!-- BEGIN SAMPLE FORM PORTLET-->
                                                                                                        <div  id ="cnam" class="portlet-body form">
                                                                                                                <div class="form-body">
                                                                                                                    <div class="row">
                                                                                                                    <div class="col-md-6">
                                                                                                                             <div class="form-group form-md-line-input has-success ">
                                                                                                                                <div class="input-icon">
                                                                                                                            <select id="regime_affi" name="regime_affi" class="form-control select2-bootstrap-append">
                                                                                                                                <option value> sélectionnez </option>
                                                                                                                                <option value="CNSS">CNSS</option>
                                                                                                                                <option value="CNRPS">CNRPS</option>
                                                                                                                            </select>
                                                                                                                                    <label for="form_control_1">Régime d'Affiliation</label>
                                                                                                                                    <i class="fa fa-hospital-o"></i>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    <div class="col-md-6">
                                                                                                                            <div class="form-group form-md-line-input has-success ">
                                                                                                                                <div class="input-icon">
                                                                                                                                    <input id="ident_unique" name="ident_unique" type="text" class="form-control" placeholder="Identifient CNAM">
                                                                                                                                    <label for="form_control_1">Identifient Unique</label>
                                                                                                                                    <span class="help-block">Entrer Identifient CNAM</span>
                                                                                                                                    <i class="fa fa-mobile" aria-hidden="true"></i>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div class="row">
                                                                                                                         <div class="col-md-6">
                                                                                                                             <div class="form-group form-md-line-input has-success ">
                                                                                                                                <div class="input-icon">
                                                                                                                                    <select id="qualite" name="qualite" class="form-control select2-bootstrap-append">
                                                                                                                                <option value> sélectionnez </option>
                                                                                                                                <option value="Assuré">Assuré</option>
                                                                                                                                <option value="Conjoint">Conjoint</option>
                                                                                                                                <option value="Enfant à charge">Enfant à charge</option>
                                                                                                                                <option value="Pére à charge">Pére à charge</option>
                                                                                                                                <option value="Mére à charge">Mére à charge</option>
                                                                                                                            </select>
                                                                                                                                    <label for="form_control_1">Qualité</label>
                                                                                                                                    <i class="fa fa-hospital-o"></i>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                         <div class="col-md-6">
                                                                                                                            <div class="form-group form-md-line-input has-success ">
                                                                                                                                <div class="input-icon">
                                                                                                                                    <input id="date_valid_cnam" name="date_valid_cnam" class="form-control form-control-inline  date-picker" type="text" size="120" value="" placeholder="Entrez la date de Validation">
                                                                                                                                    <label for="form_control_1">Date de Validation Carnet CNAM</label>
                                                                                                                                    <i class="fa fa-calendar"></i>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div class="row">
                                                                                                                        <div class="col-md-6">
                                                                                                                             <div class="form-group form-md-line-input has-success ">
                                                                                                                                <div class="input-icon">
                                                                                                                                    <select id="type_cnam" name="type_cnam" class="form-control select2-bootstrap-append">
                                                                                                                                <option value> sélectionnez </option>
                                                                                                                                <option value="Filiére publique">Filiére publique</option>
                                                                                                                                <option value="Remboursement">Remboursement</option>
                                                                                                                                <option value="Tiers Payant">Tiers Payant</option>
                                                                                                                            </select>
                                                                                                                                    <label for="form_control_1"> Type Assurance </label>
                                                                                                                                    <i class="fa fa-hospital-o"></i>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                        <div class="col-md-6">
                                                                                                                            <div class="form-group form-md-line-input has-success ">
                                                                                                                                <div class="input-icon">
                                                                                                                                    <input id="rang_Assur" name="rang_Assur" type="number" class="form-control" placeholder="Rang">
                                                                                                                                    <label for="form_control_1">Rang Assuré</label>
                                                                                                                                    <span class="help-block">Entrer le Rang Assuré</span>
                                                                                                                                    <i class="fa fa-anchor" aria-hidden="true"></i>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                    <!-- END SAMPLE FORM PORTLET-->
                                                                </div>
                                                            
                                                            </div>
                                                        </div>

                                                </div> 
                                                                               </div>
                                                                               
                                                                           </div>

                                                                </div>
                    
                                                             
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                        </form>
                                    </div>
                          </div>
         <jsp:include page="js_declare.jsp"/>
        <script src="../body_page_js/ArchiveMedic_function.js?version=<%=session.getAttribute("versionJS")%>"></script>
        <script src="../body_page_js/ArchiveMedic.js?version=<%=session.getAttribute("versionJS")%>"></script>
    </body>
</html>
