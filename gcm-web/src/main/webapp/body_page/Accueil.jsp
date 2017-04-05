<%-- 
    Document   : Acceuil
    Created on : 29 mars 2017, 14:23:52
    Author     : ASUS
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <jsp:include page="../body_page/css_declare.jsp"/>
        <link href="../css/style_Accueil.css" rel="stylesheet" type="text/css" />
        <title>Accueil</title>
    </head>
    <body style="font-family: cursive;" class="page-portlet-fullscreen">
        
         <!-- BEGIN PAGE BAR -->
                        <div class="page-bar" style="padding-top: 5px">
                            <ul class="page-breadcrumb">
                                <li>
                                    <i class="icon-home"></i>
                                    <a href="javascript:window.location.reload();">Home</a>
                                    <i class="fa fa-circle"></i>
                                </li>
                                <li>
                                    <i class="fa fa-medkit"></i>
                                    <a href="#">Accueil</a>
                                </li>
                            </ul>
                            
                            <div class="page-toolbar">
                               <div class="page-toolbar">
                                <div id="dashboard-report-range" class="pull-right tooltips btn btn-sm" data-container="body" data-placement="bottom" data-original-title="Date d'aujourd'hui ">
                                    <i class="icon-calendar"></i>&nbsp;
                                    <span id="date" class="uppercase has-success"></span>&nbsp;
                                    <i class="fa fa-angle-down"></i>
                                </div>
                               </div>
                            </div>
                        </div>
                        <!-- END PAGE BAR -->
                        
                        <!--div class="page-title">
                            <div class="row titleRow">
                                <h2 style="font-family: cursive;">Gestion de Cabinet Médicale</h2>
                            </div>
                         </div-->
                        <h1 class="page-title"> <span style="font-family: monospace;font-size: -webkit-xxx-large;font-style: oblique;">Gestion de Cabinet Médicale</span>
                            <small style="font-family: cursive;">accueil</small>
                        </h1>
                        
                        <div class="row">
                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div class="dashboard-stat2 ">
                                    <div class="display">
                                        <div class="number">
                                            <h3 class="font-green-sharp">
                                                <span data-counter="counterup" data-value="7800">7800</span>
                                                <small class="font-green-sharp">$</small>
                                            </h3>
                                            <small>Recette Pour Aujourd'hui</small>
                                        </div>
                                        <div class="icon">
                                            <i class="icon-pie-chart"></i>
                                        </div>
                                    </div>
                                    <div class="progress-info">
                                        <div class="progress">
                                            <span style="width: 76%;" class="progress-bar progress-bar-success green-sharp">
                                                <span class="sr-only">76% progress</span>
                                            </span>
                                        </div>
                                        <div class="status">
                                            <div class="status-title"> progress </div>
                                            <div class="status-number"> 76% </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div class="dashboard-stat2 ">
                                    <div class="display">
                                        <div class="number">
                                            <h3 class="font-red-haze">
                                                <span data-counter="counterup" data-value="1349">1349</span>
                                            </h3>
                                            <small>Rendez-Vous</small>
                                        </div>
                                        <div class="icon">
                                            <i class="icon-like"></i>
                                        </div>
                                    </div>
                                    <div class="progress-info">
                                        <div class="progress">
                                            <span style="width: 85%;" class="progress-bar progress-bar-success red-haze">
                                                <span class="sr-only">85% change</span>
                                            </span>
                                        </div>
                                        <div class="status">
                                            <div class="status-title"> change </div>
                                            <div class="status-number"> 85% </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div class="dashboard-stat2 ">
                                    <div class="display">
                                        <div class="number">
                                            <h3 class="font-blue-sharp">
                                                <span data-counter="counterup" data-value="567">567</span>
                                            </h3>
                                            <small>Consultation</small>
                                        </div>
                                        <div class="icon">
                                            <i class="icon-chemistry"></i>
                                        </div>
                                    </div>
                                    <div class="progress-info">
                                        <div class="progress">
                                            <span style="width: 45%;" class="progress-bar progress-bar-success blue-sharp">
                                                <span class="sr-only">45% grow</span>
                                            </span>
                                        </div>
                                        <div class="status">
                                            <div class="status-title"> grow </div>
                                            <div class="status-number"> 45% </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div class="dashboard-stat2 ">
                                    <div class="display">
                                        <div class="number">
                                            <h3 class="font-purple-soft">
                                                <span data-counter="counterup" data-value="276">276</span>
                                            </h3>
                                            <small>Patients</small>
                                        </div>
                                        <div class="icon">
                                            <i class="icon-user"></i>
                                        </div>
                                    </div>
                                    <div class="progress-info">
                                        <div class="progress">
                                            <span style="width: 57%;" class="progress-bar progress-bar-success purple-soft">
                                                <span class="sr-only">56% change</span>
                                            </span>
                                        </div>
                                        <div class="status">
                                            <div class="status-title"> change </div>
                                            <div class="status-number"> 57% </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <section class="row service_tab" style="background-color: white;">
                            <!--section class="row page_intro">
                            <div class="row m0 inner">
                                <div class="container">
                                    <div class="row">
                                        <h5>service</h5>
                                        <h2>medicalpro services</h2>
                                    </div>
                                </div>
                            </div>
                        </section-->
        <div class="container">
            
            <div class="row">
        <!-- Nav tabs -->
                <ul class="nav nav-tabs nav-justified" role="tablist" id="service_tab">
                    <li role="presentation" class="active"><a href="#heart_surgery" aria-controls="heart_surgery" role="tab" data-toggle="tab"><span></span>heart surgery</a></li>
                    <li role="presentation"><a href="#dna_testing" aria-controls="dna_testing" role="tab" data-toggle="tab"><span></span>dna testing</a></li>
                    <li role="presentation"><a href="#gen_treatment" aria-controls="gen_treatment" role="tab" data-toggle="tab"><span></span>gen treatment</a></li>
                    <li role="presentation"><a href="#emergency_care" aria-controls="emergency_care" role="tab" data-toggle="tab"><span></span>emergency care</a></li>
                    <li role="presentation"><a href="#ear_treatment" aria-controls="ear_treatment" role="tab" data-toggle="tab"><span></span>ear treatment</a></li>
                    <li role="presentation"><a href="#dental_care" aria-controls="dental_care" role="tab" data-toggle="tab"><span></span>dental care</a></li>
                </ul>
            </div>
        
      
                <!-- Tab panes -->
                <section class="row quick_blocks_row quick_blocks_row_home2">
        <div class="container">
            <div >
                <div class="col-sm-4 quick_block emmergency">
                    <div class=" m0 inner">
                        <div class=" heading m0">
                            <h5>quick help</h5>
                            <h3>Emergency cases</h3>
                        </div>
                        <a href="contact.html">CONTACT US NOW</a>
                    </div>
                </div>
                <div class="col-sm-4 quick_block branches">
                    <div class=" m0 inner">
                        <div class=" heading m0">
                            <h5>in your country</h5>
                            <h3>263 branches</h3>
                        </div>
                        <a href="contact.html">nearest location</a>
                    </div>
                </div>
                <div class="col-sm-4 quick_block bill_payments">
                    <div class=" m0 inner">
                        <div class=" heading m0">
                            <h5>smooth and easy</h5>
                            <h3>online bill payments</h3>
                        </div>
                        <a href="contact.html">pay your bill now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
                </div>
         </section>
        <jsp:include page="js_declare.jsp"/>
        <script src="../body_page_js/Accueil.js?version=<%=session.getAttribute("versionJS")%>"></script>
    </body>
</html>
