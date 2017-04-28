<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="fr">
    <!--<![endif]-->
    <!-- BEGIN HEAD -->

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Clinisys -- GCM</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <meta content="Preview page of Metronic Admin Theme #1 for blank page layout" name="description" />
        <meta content="" name="author" />
        <jsp:include page="../body_page/css_declare.jsp"/>
        <link rel="shortcut icon" href="../img/favicon/favicon.ico" /> 
    </head>
    <!-- END HEAD -->

    <body style="font-family: cursive;background: transparent" class="page-sidebar-closed-hide-logo page-content-white page-md page-header-fixed page-sidebar-fixed page-sidebar-closed">
        <div class="page-wrapper">
            <!-- BEGIN HEADER -->
            <div class="page-header navbar navbar-fixed-top">
                <!-- BEGIN HEADER INNER -->
                <div class="page-header-inner ">
                    <!-- BEGIN LOGO -->
                    <div class="page-logo">
                        <a href="index.jsp">
                            <!--<img src="../imcg/avatars/doctor.png" alt="logo" class="logo-default" />--> 
                        </a>
                        <div class="menu-toggler sidebar-toggler">
                            <span></span>
                        </div>
                    </div>
                    <!-- END LOGO -->
                    <!-- BEGIN RESPONSIVE MENU TOGGLER -->
                    <a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
                        <span></span>
                    </a>
                    <!-- END RESPONSIVE MENU TOGGLER -->
                    <!-- BEGIN TOP NAVIGATION MENU -->
                    <div class="top-menu">
                        <ul class="nav navbar-nav pull-right">
                            <!-- BEGIN NOTIFICATION DROPDOWN -->
                            <!-- DOC: Apply "dropdown-dark" class after "dropdown-extended" to change the dropdown styte -->
                            <!-- DOC: Apply "dropdown-hoverable" class after below "dropdown" and remove data-toggle="dropdown" data-hover="dropdown" data-close-others="true" attributes to enable hover dropdown mode -->
                            <!-- DOC: Remove "dropdown-hoverable" and add data-toggle="dropdown" data-hover="dropdown" data-close-others="true" attributes to the below A element with dropdown-toggle class -->
                            <li class="dropdown dropdown-extended dropdown-notification" id="header_notification_bar">
                                <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                    <i class="icon-bell"></i>
                                    <span class="badge badge-default"> 7 </span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="external">
                                        <h3>
                                            <span class="bold">12 pending</span> notifications</h3>
                                        <a href="page_user_profile_1.html">view all</a>
                                    </li>
                                    <li>
                                        <ul class="dropdown-menu-list scroller" style="height: 250px;" data-handle-color="#637283">
                                            <li>
                                                <a href="javascript:;">
                                                    <span class="time">just now</span>
                                                    <span class="details">
                                                        <span class="label label-sm label-icon label-success">
                                                            <i class="fa fa-plus"></i>
                                                        </span> New user registered. </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span class="time">3 mins</span>
                                                    <span class="details">
                                                        <span class="label label-sm label-icon label-danger">
                                                            <i class="fa fa-bolt"></i>
                                                        </span> Server #12 overloaded. </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span class="time">10 mins</span>
                                                    <span class="details">
                                                        <span class="label label-sm label-icon label-warning">
                                                            <i class="fa fa-bell-o"></i>
                                                        </span> Server #2 not responding. </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span class="time">14 hrs</span>
                                                    <span class="details">
                                                        <span class="label label-sm label-icon label-info">
                                                            <i class="fa fa-bullhorn"></i>
                                                        </span> Application error. </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span class="time">2 days</span>
                                                    <span class="details">
                                                        <span class="label label-sm label-icon label-danger">
                                                            <i class="fa fa-bolt"></i>
                                                        </span> Database overloaded 68%. </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span class="time">3 days</span>
                                                    <span class="details">
                                                        <span class="label label-sm label-icon label-danger">
                                                            <i class="fa fa-bolt"></i>
                                                        </span> A user IP blocked. </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span class="time">4 days</span>
                                                    <span class="details">
                                                        <span class="label label-sm label-icon label-warning">
                                                            <i class="fa fa-bell-o"></i>
                                                        </span> Storage Server #4 not responding dfdfdfd. </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span class="time">5 days</span>
                                                    <span class="details">
                                                        <span class="label label-sm label-icon label-info">
                                                            <i class="fa fa-bullhorn"></i>
                                                        </span> System Error. </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span class="time">9 days</span>
                                                    <span class="details">
                                                        <span class="label label-sm label-icon label-danger">
                                                            <i class="fa fa-bolt"></i>
                                                        </span> Storage server failed. </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <!-- END NOTIFICATION DROPDOWN -->
                            <!-- BEGIN INBOX DROPDOWN -->
                            <!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
                            <li class="dropdown dropdown-extended dropdown-inbox" id="header_inbox_bar">
                                <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                    <i class="icon-envelope-open"></i>
                                    <span class="badge badge-default"> 4 </span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="external">
                                        <h3>You have
                                            <span class="bold">7 New</span> Messages</h3>
                                        <a href="app_inbox.html">view all</a>
                                    </li>
                                    <li>
                                        <ul class="dropdown-menu-list scroller" style="height: 275px;" data-handle-color="#637283">
                                            <li>
                                                <a href="#">
                                                    <span class="photo">
                                                        <img src="../img/avatars/male.png" class="img-circle" alt=""> </span>
                                                    <span class="subject">
                                                        <span class="from"> Lisa Wong </span>
                                                        <span class="time">Just Now </span>
                                                    </span>
                                                    <span class="message"> Vivamus sed auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span class="photo">
                                                        <img src="../img/avatars/male.png" class="img-circle" alt=""> </span>
                                                    <span class="subject">
                                                        <span class="from"> Richard Doe </span>
                                                        <span class="time">16 mins </span>
                                                    </span>
                                                    <span class="message"> Vivamus sed congue nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span class="photo">
                                                        <img src="../img/avatars/male.png" class="img-circle" alt=""> </span>
                                                    <span class="subject">
                                                        <span class="from"> Bob Nilson </span>
                                                        <span class="time">2 hrs </span>
                                                    </span>
                                                    <span class="message"> Vivamus sed nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span class="photo">
                                                        <img src="../img/avatars/male.png" class="img-circle" alt=""> </span>
                                                    <span class="subject">
                                                        <span class="from"> Lisa Wong </span>
                                                        <span class="time">40 mins </span>
                                                    </span>
                                                    <span class="message"> Vivamus sed auctor 40% nibh congue nibh... </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span class="photo">
                                                        <img src="../img/avatars/male.png" class="img-circle" alt=""> </span>
                                                    <span class="subject">
                                                        <span class="from"> Richard Doe </span>
                                                        <span class="time">46 mins </span>
                                                    </span>
                                                    <span class="message"> Vivamus sed congue nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <!-- END INBOX DROPDOWN -->
                            <!-- BEGIN TODO DROPDOWN -->
                            <!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
                            <li class="dropdown dropdown-extended dropdown-tasks" id="header_task_bar">
                                <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                    <i class="icon-calendar"></i>
                                    <span class="badge badge-default"> 3 </span>
                                </a>
                                <ul class="dropdown-menu extended tasks">
                                    <li class="external">
                                        <h3>You have
                                            <span class="bold">12 pending</span> tasks</h3>
                                        <a href="app_todo.html">view all</a>
                                    </li>
                                    <li>
                                        <ul class="dropdown-menu-list scroller" style="height: 275px;" data-handle-color="#637283">
                                            <li>
                                                <a href="javascript:;">
                                                    <span class="task">
                                                        <span class="desc">New release v1.2 </span>
                                                        <span class="percent">30%</span>
                                                    </span>
                                                    <span class="progress">
                                                        <span style="width: 40%;" class="progress-bar progress-bar-success" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                                            <span class="sr-only">40% Complete</span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span class="task">
                                                        <span class="desc">Application deployment</span>
                                                        <span class="percent">65%</span>
                                                    </span>
                                                    <span class="progress">
                                                        <span style="width: 65%;" class="progress-bar progress-bar-danger" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                                                            <span class="sr-only">65% Complete</span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span class="task">
                                                        <span class="desc">Mobile app release</span>
                                                        <span class="percent">98%</span>
                                                    </span>
                                                    <span class="progress">
                                                        <span style="width: 98%;" class="progress-bar progress-bar-success" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100">
                                                            <span class="sr-only">98% Complete</span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span class="task">
                                                        <span class="desc">Database migration</span>
                                                        <span class="percent">10%</span>
                                                    </span>
                                                    <span class="progress">
                                                        <span style="width: 10%;" class="progress-bar progress-bar-warning" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                                            <span class="sr-only">10% Complete</span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span class="task">
                                                        <span class="desc">Web server upgrade</span>
                                                        <span class="percent">58%</span>
                                                    </span>
                                                    <span class="progress">
                                                        <span style="width: 58%;" class="progress-bar progress-bar-info" aria-valuenow="58" aria-valuemin="0" aria-valuemax="100">
                                                            <span class="sr-only">58% Complete</span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span class="task">
                                                        <span class="desc">Mobile development</span>
                                                        <span class="percent">85%</span>
                                                    </span>
                                                    <span class="progress">
                                                        <span style="width: 85%;" class="progress-bar progress-bar-success" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                                            <span class="sr-only">85% Complete</span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span class="task">
                                                        <span class="desc">New UI release</span>
                                                        <span class="percent">38%</span>
                                                    </span>
                                                    <span class="progress progress-striped">
                                                        <span style="width: 38%;" class="progress-bar progress-bar-important" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100">
                                                            <span class="sr-only">38% Complete</span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <!-- END TODO DROPDOWN -->
                            <!-- BEGIN USER LOGIN DROPDOWN -->
                            <!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
                            <li class="dropdown dropdown-user">
                                <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                    <img id="ImgConnect" alt="" class="img-circle" src="" />
                                    <span id="medecin" class="username username-hide-on-mobile"></span>
                                    <i class="fa fa-angle-down"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-default">
                                    <li>
                                        <a href="#" id='paramlog'>
                                            <i class="icon-user"></i> Mes Paramètres </a>
                                    </li>
                                    <li>
                                        <a href="#" id='callog'>
                                            <i class="icon-calendar"></i> Calendrier </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="icon-envelope-open"></i> My Inbox
                                            <span class="badge badge-danger"> 3 </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" >
                                            <i class="icon-rocket"></i> Statistiques
                                            <span class="badge badge-success"> 7 </span>
                                        </a>
                                    </li>
                                    <li class="divider"> </li>
                                    <li>
                                        <a href="#" id="Sécurité">
                                            <i class="icon-lock"></i> Sécurité </a>
                                    </li>
                                    <li>
                                        <a id="logout">
                                            <i class="icon-key"></i> Déconnexion </a>
                                    </li>
                                </ul>
                            </li>
                            <!-- END USER LOGIN DROPDOWN -->
                            <!-- BEGIN QUICK SIDEBAR TOGGLER -->
                            <!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
                            <li class="dropdown dropdown-quick-sidebar-toggler">
                                <a href="javascript:;" class="dropdown-toggle">
                                    <i class="icon-logout"></i>
                                </a>
                            </li>
                            <!-- END QUICK SIDEBAR TOGGLER -->
                        </ul>
                    </div>
                    <!-- END TOP NAVIGATION MENU -->
                </div>
                <!-- END HEADER INNER -->
            </div>
            <!-- END HEADER -->
            <!-- BEGIN HEADER & CONTENT DIVIDER -->
            <div class="clearfix"> </div>
            <!-- END HEADER & CONTENT DIVIDER -->
            <!-- BEGIN CONTAINER -->
            <div class="page-container">
                <!-- BEGIN SIDEBAR -->
                <div class="page-sidebar-wrapper">
                    <!-- BEGIN SIDEBAR -->
                    <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
                    <!-- DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed -->
                    <div class="page-sidebar navbar-collapse collapse">
                        <!-- BEGIN SIDEBAR MENU -->
                        <!-- DOC: Apply "page-sidebar-menu-light" class right after "page-sidebar-menu" to enable light sidebar menu style(without borders) -->
                        <!-- DOC: Apply "page-sidebar-menu-hover-submenu" class right after "page-sidebar-menu" to enable hoverable(hover vs accordion) sub menu mode -->
                        <!-- DOC: Apply "page-sidebar-menu-closed" class right after "page-sidebar-menu" to collapse("page-sidebar-closed" class must be applied to the body element) the sidebar sub menu mode -->
                        <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
                        <!-- DOC: Set data-keep-expand="true" to keep the submenues expanded -->
                        <!-- DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed -->
                        <ul class="page-sidebar-menu  page-header-fixed  page-sidebar-menu-closed" data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200" style="padding-top: 20px;height: 659px;">
                            <!-- DOC: To remove the sidebar toggler from the sidebar you just need to completely remove the below "sidebar-toggler-wrapper" LI element -->
                            <!-- BEGIN SIDEBAR TOGGLER BUTTON -->
                            <li class="sidebar-toggler-wrapper hide">
                                <div class="sidebar-toggler">
                                    <span></span>
                                </div>
                            </li>
                            <!-- END SIDEBAR TOGGLER BUTTON -->
                            <!-- DOC: To remove the search box from the sidebar you just need to completely remove the below "sidebar-search-wrapper" LI element -->
                            <li class="sidebar-search-wrapper">
                                <!-- BEGIN RESPONSIVE QUICK SEARCH FORM -->
                                <!-- DOC: Apply "sidebar-search-bordered" class the below search form to have bordered search box -->
                                <!-- DOC: Apply "sidebar-search-bordered sidebar-search-solid" class the below search form to have bordered & solid search box -->
                                <form class="sidebar-search  sidebar-search-bordered" action="page_general_search_3.html" method="POST">
                                    <a href="javascript:;" class="remove">
                                        <i class="icon-close"></i>
                                    </a>
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Search...">
                                        <span class="input-group-btn">
                                            <a href="javascript:;" class="btn submit">
                                                <i class="icon-magnifier"></i>
                                            </a>
                                        </span>
                                    </div>
                                </form>
                                <!-- END RESPONSIVE QUICK SEARCH FORM -->
                            </li>
                            <li class="nav-item start active">
                                <a href="javascript:;" class="nav-link nav-toggle" id="Accueil" >
                                    <i class="icon-home"></i>
                                    <span class="title">Accueil</span>
                                    <span class="arrow"></span>
                                    <span class="selected"></span>
                                </a>
                            </li>
                            <li class="heading">
                                <h3 class="uppercase">Services</h3>
                            </li>
                            <li class="nav-item  ">
                                <a href="javascript:;" class="nav-link nav-toggle" id="patient">
                                    <i class="icon-user-following"></i>
                                    <span class="title">Gestion des Patients</span>
                                </a>
                            </li>
                            <li class="nav-item  ">
                                <a href="javascript:;" class="nav-link nav-toggle">
                                    <i class="icon-clock"></i>
                                    <span class="title">Observation</span>
                                    <span class="arrow"></span>
                                </a>
                                <ul class="sub-menu">
                                    <li class="nav-item  ">
                                        <a href="#" class="nav-link " id="consultation">
                                            <i class="icon-clock"></i>
                                            <span class="title">Consultation</span>
                                        </a>
                                    </li>
                                    <li class="nav-item  ">
                                        <a href="#" class="nav-link " id="controle">
                                            <i class="icon-clock"></i>
                                            <span class="title">Contrôle</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item  ">
                                <a href="javascript:;" class="nav-link nav-toggle" id="ArchiveMedic">
                                    <i class="icon-layers"></i>
                                    <span class="title">Archive Médical</span>
                                </a>
                            </li>
                            <li class="nav-item  ">
                                <a href="javascript:;" class="nav-link nav-toggle" id="rdv">
                                    <i class="icon-calendar"></i>
                                    <span class="title">Gestion des RDV</span>
                                </a>
                            </li>
                            <li class="nav-item  ">
                                <a href="javascript:;" class="nav-link nav-toggle" id="parametre">
                                    <i class="icon-settings"></i>
                                    <span class="title">Paramétre</span>
                                    <span class="arrow"></span>
                                </a>
                                <ul class="sub-menu">
                                    <li class="nav-item  ">
                                        <a href="#" class="nav-link " id="Cabinet">
                                            <i class="icon-settings"></i>
                                            <span class="title">Paramétres Cabinet</span>
                                        </a>
                                    </li>
                                    <li class="nav-item  ">
                                        <a href="#" class="nav-link " id="Acces">
                                            <i class="icon-settings"></i>
                                            <span class="title">Paramétres Accés</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item  ">
                                <a href="javascript:;" class="nav-link nav-toggle">
                                    <i class="icon-diamond"></i>
                                    <span class="title">Comptabilité</span>
                                </a>
                            </li>
                            <li class="nav-item  ">
                                <a href="?p=" class="nav-link nav-toggle">
                                    <i class="icon-bar-chart"></i>
                                    <span class="title">Statistiques</span>
                                </a>
                            </li>
                            <li class="heading">
                                <h3 class="uppercase">Pharmacie</h3>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:;" class="nav-link nav-toggle">
                                    <i class="icon-layers"></i>
                                    <span class="title">Médicaments</span>
                                    <span class="arrow"></span>
                                </a>
                            </li>
                            <li class="heading">
                                <h3 class="uppercase">A propos</h3>
                            </li>
                            <li class="nav-item  ">
                                        <a href="#" class="nav-link ">
                                            <i class="icon-info"></i>
                                            <span class="title">About</span>
                                            <span class="arrow"></span>
                                        </a>
                            </li>
                        </ul>
                        <!-- END SIDEBAR MENU -->
                        <!-- END SIDEBAR MENU -->
                    </div>
                    <!-- END SIDEBAR -->
                </div>
                <!-- END SIDEBAR -->
                <!-- BEGIN CONTENT -->
                <div class="page-content-wrapper">
                    <!-- BEGIN CONTENT BODY -->
                    <div id="content" class="page-content">
                        <!-- BEGIN PAGE HEADER-->
                       
                        <!-- END PAGE TITLE-->
                        <!-- END PAGE HEADER-->
                       
                        
                    </div>
                    <!-- END CONTENT BODY -->
                </div>
                <!-- END CONTENT -->
                <!-- BEGIN QUICK SIDEBAR -->
                <a href="javascript:;" class="page-quick-sidebar-toggler">
                    <i class="icon-login"></i>
                </a>
                <div class="page-quick-sidebar-wrapper" data-close-on-body-click="false">
                    <div class="page-quick-sidebar">
                        <ul class="nav nav-tabs">
                            <li class="active">
                                <a href="javascript:;" data-target="#quick_sidebar_tab_1" data-toggle="tab"> Patient
                                    <span id='nblisteattende' class="badge badge-danger">0</span>
                                </a>
                            </li>
                            <li class="dropdown">
                                <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown"> Autre
                                    <i class="fa fa-angle-down"></i>
                                </a>
                                <ul class="dropdown-menu pull-right">
                                    <li>
                                        <a href="javascript:;" data-target="#quick_sidebar_tab_3" data-toggle="tab">
                                            <i class="icon-bell"></i> Vider Liste </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" data-target="#quick_sidebar_tab_3" data-toggle="tab">
                                            <i class="icon-info"></i> Notifications </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" data-target="#quick_sidebar_tab_3" data-toggle="tab">
                                            <i class="icon-speech"></i> Activities </a>
                                    </li>
                                    <li class="divider"></li>
                                    <li>
                                        <a href="javascript:;" data-target="#quick_sidebar_tab_3" data-toggle="tab">
                                            <i class="icon-settings"></i> Settings </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane active page-quick-sidebar-chat" id="quick_sidebar_tab_1">
                                <div class="page-quick-sidebar-chat-users" data-rail-color="#ddd" data-wrapper-class="page-quick-sidebar-list">
                                    <h3 class="list-heading"> <span class="label label-sm label-success"> Salle d'attente </span></h3>
                                    <ul id='listeDattende' class="media-list list-items scroller" style="height: 490px;" data-always-visible="1" data-rail-visible1="1">
                                        
                                    </ul>
                                    <div class="task-footer" style="margin-right: 10px;margin-bottom: 10px;">
                                            <div class="btn-arrow-link pull-right">
                                                <a onclick="Redirection('Rdv.jsp')">Voir tous les rendez-vous</a>
                                                <i class="icon-arrow-right"></i>
                                            </div>
                                        </div>
                                    
                                </div>
                                <div class="page-quick-sidebar-item">
                                    <div class="page-quick-sidebar-chat-user">
                                        <div class="page-quick-sidebar-nav">
                                            <a href="javascript:;" class="page-quick-sidebar-back-to-list">
                                                <i class="icon-arrow-left"></i>Back</a>
                                        </div>
                                        <div class="page-quick-sidebar-chat-user-messages">
                                            <div class="post out">
                                                <img class="avatar" src="../img/avatars/male.png" alt="...">
                                                <div class="message">
                                                    <span class="arrow"></span>
                                                    <a href="javascript:;" class="name">Bob Nilson</a>
                                                    <span class="datetime">20:15</span>
                                                    <span class="body"> When could you send me the report ? </span>
                                                </div>
                                            </div>
                                            <div class="post in">
                                                <img class="avatar" src="../img/avatars/male.png" alt="...">
                                                <div class="message">
                                                    <span class="arrow"></span>
                                                    <a href="javascript:;" class="name">Ella Wong</a>
                                                    <span class="datetime">20:15</span>
                                                    <span class="body"> Its almost done. I will be sending it shortly </span>
                                                </div>
                                            </div>
                                            <div class="post out">
                                                <img class="avatar" src="../img/avatars/male.png" alt="...">
                                                <div class="message">
                                                    <span class="arrow"></span>
                                                    <a href="javascript:;" class="name">Bob Nilson</a>
                                                    <span class="datetime">20:15</span>
                                                    <span class="body"> Alright. Thanks! :) </span>
                                                </div>
                                            </div>
                                            <div class="post in">
                                                <img class="avatar" src="../img/avatars/male.png" alt="...">
                                                <div class="message">
                                                    <span class="arrow"></span>
                                                    <a href="javascript:;" class="name">Ella Wong</a>
                                                    <span class="datetime">20:16</span>
                                                    <span class="body"> You are most welcome. Sorry for the delay. </span>
                                                </div>
                                            </div>
                                            <div class="post out">
                                                <img class="avatar" src="../img/avatars/male.png" alt="...">
                                                <div class="message">
                                                    <span class="arrow"></span>
                                                    <a href="javascript:;" class="name">Bob Nilson</a>
                                                    <span class="datetime">20:17</span>
                                                    <span class="body"> No probs. Just take your time :) </span>
                                                </div>
                                            </div>
                                            <div class="post in">
                                                <img class="avatar" src="../img/avatars/male.png" alt="...">
                                                <div class="message">
                                                    <span class="arrow"></span>
                                                    <a href="javascript:;" class="name">Ella Wong</a>
                                                    <span class="datetime">20:40</span>
                                                    <span class="body"> Alright. I just emailed it to you. </span>
                                                </div>
                                            </div>
                                            <div class="post out">
                                                <img class="avatar" src="../img/avatars/male.png" alt="...">
                                                <div class="message">
                                                    <span class="arrow"></span>
                                                    <a href="javascript:;" class="name">Bob Nilson</a>
                                                    <span class="datetime">20:17</span>
                                                    <span class="body"> Great! Thanks. Will check it right away. </span>
                                                </div>
                                            </div>
                                            <div class="post in">
                                                <img class="avatar" src="../img/avatars/male.png" alt="...">
                                                <div class="message">
                                                    <span class="arrow"></span>
                                                    <a href="javascript:;" class="name">Ella Wong</a>
                                                    <span class="datetime">20:40</span>
                                                    <span class="body"> Please let me know if you have any comment. </span>
                                                </div>
                                            </div>
                                            <div class="post out">
                                                <img class="avatar" src="../img/avatars/male.png" alt="...">
                                                <div class="message">
                                                    <span class="arrow"></span>
                                                    <a href="javascript:;" class="name">Bob Nilson</a>
                                                    <span class="datetime">20:17</span>
                                                    <span class="body"> Sure. I will check and buzz you if anything needs to be corrected. </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="page-quick-sidebar-chat-user-form">
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Type a message here...">
                                                <div class="input-group-btn">
                                                    <button type="button" class="btn green">
                                                        <i class="icon-paper-clip"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane page-quick-sidebar-settings" id="quick_sidebar_tab_3">
                                <div class="page-quick-sidebar-settings-list">
                                    <h3 class="list-heading">General Settings</h3>
                                    <ul class="list-items borderless">
                                        <li> Enable Notifications
                                            <input type="checkbox" class="make-switch" checked data-size="small" data-on-color="success" data-on-text="ON" data-off-color="default" data-off-text="OFF"> </li>
                                        <li> Allow Tracking
                                            <input type="checkbox" class="make-switch" data-size="small" data-on-color="info" data-on-text="ON" data-off-color="default" data-off-text="OFF"> </li>
                                        <li> Log Errors
                                            <input type="checkbox" class="make-switch" checked data-size="small" data-on-color="danger" data-on-text="ON" data-off-color="default" data-off-text="OFF"> </li>
                                        <li> Auto Sumbit Issues
                                            <input type="checkbox" class="make-switch" data-size="small" data-on-color="warning" data-on-text="ON" data-off-color="default" data-off-text="OFF"> </li>
                                        <li> Enable SMS Alerts
                                            <input type="checkbox" class="make-switch" checked data-size="small" data-on-color="success" data-on-text="ON" data-off-color="default" data-off-text="OFF"> </li>
                                    </ul>
                                    <h3 class="list-heading">System Settings</h3>
                                    <ul class="list-items borderless">
                                        <li> Security Level
                                            <select class="form-control input-inline input-sm input-small">
                                                <option value="1">Normal</option>
                                                <option value="2" selected>Medium</option>
                                                <option value="e">High</option>
                                            </select>
                                        </li>
                                        <li> Failed Email Attempts
                                            <input class="form-control input-inline input-sm input-small" value="5" /> </li>
                                        <li> Secondary SMTP Port
                                            <input class="form-control input-inline input-sm input-small" value="3560" /> </li>
                                        <li> Notify On System Error
                                            <input type="checkbox" class="make-switch" checked data-size="small" data-on-color="danger" data-on-text="ON" data-off-color="default" data-off-text="OFF"> </li>
                                        <li> Notify On SMTP Error
                                            <input type="checkbox" class="make-switch" checked data-size="small" data-on-color="warning" data-on-text="ON" data-off-color="default" data-off-text="OFF"> </li>
                                    </ul>
                                    <div class="inner-content">
                                        <button class="btn btn-success">
                                            <i class="icon-settings"></i> Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END QUICK SIDEBAR -->
            </div>
            <!-- END CONTAINER -->
            <!-- BEGIN FOOTER -->
            <div class="page-footer">
                <div class="page-footer-inner"> 2016 &copy; Metronic Theme By
                    <a target="_blank" href="http://keenthemes.com">Keenthemes</a> &nbsp;|&nbsp;
                    <a href="http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes" title="Purchase Metronic just for 27$ and get lifetime updates for free" target="_blank">Purchase Metronic!</a>
                </div>
                <div class="scroll-to-top">
                    <i class="icon-arrow-up"></i>
                </div>
            </div>
            <!-- END FOOTER -->
        </div>
        
        <!-- BEGIN QUICK NAV -->
        <nav class="quick-nav hide">
            <a class="quick-nav-trigger" href="#0">
                <span aria-hidden="true"></span>
            </a>
            <ul>
                <li>
                    <a href="https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes" target="_blank" class="active">
                        <span>Purchase Metronic</span>
                        <i class="icon-basket"></i>
                    </a>
                </li>
                <li>
                    <a href="https://themeforest.net/item/metronic-responsive-admin-dashboard-template/reviews/4021469?ref=keenthemes" target="_blank">
                        <span>Customer Reviews</span>
                        <i class="icon-users"></i>
                    </a>
                </li>
                <li>
                    <a href="http://keenthemes.com/showcast/" target="_blank">
                        <span>Showcase</span>
                        <i class="icon-user"></i>
                    </a>
                </li>
                <li>
                    <a href="http://keenthemes.com/metronic-theme/changelog/" target="_blank">
                        <span>Changelog</span>
                        <i class="icon-graph"></i>
                    </a>
                </li>
            </ul>
            <span aria-hidden="true" class="quick-nav-bg"></span>
        </nav>
        <div class="quick-nav-overlay"></div>
        <!-- END QUICK NAV -->
        
        <!-- fire button -->
        <a id="confirmeemodal" class="btn btn-outline dark hide" data-target="" data-toggle="modal"></a>
        
         <!-- Modal eng Consultation -->
                <div id="Consult" class="modal container fade fast" style="font-family: cursive;" tabindex="-1">
                             <div class="modal-header">
                                 <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                                 <h4 class="modal-title" style="font-family: cursive;"> <img src='../img/bloc.png'></img> Enregistrer Consultation</h4>
                             </div>
                             <div class="modal-body">
                                 <p><img src='../img/ERR.png'> Vous voulez vraiment Enrigister la Consultation de Mr(s) <span id="nomprenompatient"></span></p>
                                 <div class="col-md-4">
                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="Honoraire" name="Honoraire" type="number" class="form-control" placeholder="Honoraire Consultation">
                                                                <label for="form_control_1">Honoraire Consultation</label>
                                                                <span class="help-block">Entrer Honoraire Consultation</span>
                                                                <i class="fa fa-anchor" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="dateConsultEng" name="dateConsultEng" class="form-control form-control-inline  date-picker" type="text" size="120" value="" placeholder="Entrez la date de Consultation">
                                                                <label for="form_control_1">Date de Consultation</label>
                                                                <i class="fa fa-calendar"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                             </div>
                             <div class="modal-footer">
                                 <button id="anuulerEng" type="button" data-dismiss="modal" class="btn btn-outline dark">Annuler</button>
                                 <button id="confirmer" type="submit" class="btn green"> Enregistrer </button>
                             </div>
                         </div>
         <!-- Modal eng Consultation cnam-->
                <div id="ConsultCnam" class="modal container fade fast" style="font-family: cursive;" tabindex="-1">
                             <div class="modal-header">
                                 <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                                 <h4 class="modal-title" style="font-family: cursive;"> <img src='../img/bloc.png'></img> Enregistrer Consultation CNAM</h4>
                             </div>
                             <div class="modal-body">
                                 <p><img src='../img/ERR.png'> Vous voulez vraiment Enrigister la Consultation de Mr(s) <span id="nomprenompatientcnam"></span></p>
                                                    <div class="col-md-4">
                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="Tiket" name="Tiket" type="number" class="form-control" placeholder="Tiket Modérateur">
                                                                <label for="form_control_1">Tiket Modérateur</label>
                                                                <span class="help-block">Entrer Tiket Modérateur</span>
                                                                <i class="fa fa-anchor" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                     <div class="col-md-4">
                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="MontantCNAM" name="MontantCNAM" type="number" class="form-control" placeholder="Montant CNAM">
                                                                <label for="form_control_1"> Montant CNAM </label>
                                                                <span class="help-block">Entrer Montant CNAM</span>
                                                                <i class="fa fa-anchor" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="dateConsultEngcnam" name="dateConsultEng" class="form-control form-control-inline  date-picker" type="text" size="120" value="" placeholder="Entrez la date de Consultation">
                                                                <label for="form_control_1">Date de Consultation</label>
                                                                <i class="fa fa-calendar"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                             </div>
                             <div class="modal-footer">
                                 <button id="anuulerEngCnam" type="button" data-dismiss="modal" class="btn btn-outline dark">Annuler</button>
                                 <button id="confirmerCnam" type="submit" class="btn green"> Enregistrer </button>
                             </div>
                         </div>
        
          <!-- Modal Aj acte-->
                <div id="ajactemodal" class="modal container fade fast" style="font-family: cursive;" tabindex="-1">
                             <div class="modal-header">
                                 <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                                 <h4 class="modal-title" style="font-family: cursive;"> <img src='../img/ajacte.png' style="width: 30px;"></img> Ajouter un nouvel acte médical CNAM</h4>
                             </div>
                             <div class="modal-body">
                                 <form id="modalActeForm" role="form" novalidate="novalidate" method="POST">
                                     <div class="alert alert-danger display-hide">
                                                    <button class="close" data-close="alert"></button><i class="fa-fw fa fa-times"></i> Vous avez des erreurs dans le formulaire. Veuillez vérifier ci-dessous. </div>
                                                <div class="alert alert-success display-hide">
                                                    <button class="close" data-close="alert"></button><i class="fa-fw fa fa-check"></i> Votre validation de formulaire est réussie ! </div>
                                                    
                                                    <div class="col-md-4">
                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="libacte" name="libacte" type="text" class="form-control" placeholder="Libellé Acte">
                                                                <label for="form_control_1">Libellé Acte</label>
                                                                <span class="help-block">Entrer Libellé</span>
                                                                <i class="fa fa-anchor" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                     <div class="col-md-4">

                                                                    <div class="form-group form-md-line-input has-success ">
                                                                        <div class="input-icon">
                                                                            <input id="montantacte" name="montantacte" type="number" class="form-control" placeholder="Montant Acte" >
                                                                            <label for="form_control_1">Montant Acte</label>
                                                                            <span class="help-block">Entrer Montant</span>
                                                                             <i class="fa fa-dollar" aria-hidden="true"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                    <div class="col-md-4">
                                                                    <div class="form-group form-md-line-input has-success ">
                                                                        <div class="input-icon">
                                                                            <input id="Tiketacte" name="Tiketacte" type="number" class="form-control" placeholder="Tiket Modérateur">
                                                                            <label for="form_control_1">Tiket Modérateur</label>
                                                                            <span class="help-block">Entrer Tiket Modérateur</span>
                                                                            <i class="fa fa-money"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                    
                                                    <div class="row" style="margin-left: 200px; font-style: italic; font-family: monospace; font-size: larger;">
                                                                <div class="md-radio-inline">
                                                                    <div class="md-radio">
                                                                        <input type="radio" id="avec" name="radio2" class="md-radiobtn" value="1">
                                                                        <label for="avec">
                                                                            <span class="inc"></span>
                                                                            <span class="check"></span>
                                                                            <span class="box"></span> Avec Accord Préalable CNAM </label>
                                                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                    <div class="md-radio">
                                                                        <input type="radio" id="sans" name="radio2" class="md-radiobtn" checked="" value="0">
                                                                        <label for="sans">
                                                                            <span class="inc"></span>
                                                                            <span class="check"></span>
                                                                            <span class="box"></span> Sans Accord Préalable CNAM </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                             <div class="col-md-12">
                                                                    <div class="form-group form-md-line-input has-success ">
                                                                        <div class="input-icon">
                                                                            <input id="Cotationacte" name="Cotationacte" type="number" class="form-control" placeholder="Cotation">
                                                                            <label for="form_control_1"> Cotation </label>
                                                                            <span class="help-block">Entrer Cotation</span>
                                                                            <i class="fa fa-money"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                     </form>
                             </div>
                             <div class="modal-footer">
                                 <button id="anuulerActe" type="reset" data-dismiss="modal" class="btn btn-outline dark">Annuler</button>
                                 <button id="confirmerActe" type="submit" class="btn green"> Enregistrer </button>
                             </div>
                         </div>
          <!-- Modal patient consult-->
                <div id="consultpatientmodal" class="modal container fade fast" style="font-family: cursive;" tabindex="-1">
                             <div class="modal-header">
                                 <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                                 <h4 class="modal-title" style="font-family: cursive;"> <img src='../img/ajacte.png' style="width: 30px;"> Ajouter une Nouvelle Consultation</h4>
                             </div>
                             <div class="modal-body">
                                 <form id="modalActeForm" role="form" novalidate="novalidate" method="POST">
                                     <div class="col-md-12">
                                            <div class="portlet light bordered" style="background-color: #fff;margin: 5px;height: 130px;">
                                                <div class="portlet-title tabbable-line">
                                                    <div class="caption">
                                                        <i class="icon-bubbles font-dark hide"></i>
                                                        <span class="caption-subject font-dark bold uppercase"><img src="../img/pillsapci.png" alt="details" > &nbsp;Patients </span>
                                                    </div>
                                                    <ul class="nav nav-tabs">
                                                        <li class="active">
                                                            <a href="#portlet_comments_1" data-toggle="tab"> Liste des Patients &nbsp;<img src="../img/pills.png" style="width: 20px;margin-top: -5px;" alt=""> </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" id="Npatient2"> Nouveau Patient <img src="../img/drugs.png" style="width: 20px;margin-top: -5px;" alt=""> </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="portlet-body">
                                                         <div class="col-sm-12">
                                                             <div class="form-group form-md-line-input has-success " style=" margin-top: -15px; ">
                                                                     <div class="input-icon">
                                                                         <select id="select2-patient2" class="form-control"></select>
                                                                         <label for="form_control_1">Patient</label>
                                                                         <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                                                                     </div>
                                                                 </div>
                                                         </div>
                                                </div>
                                            </div>
                                            </div>
                                     </form>
                             </div>
                             <div class="modal-footer">
                                 <button id="anuulerconsultpatient" type="reset" data-dismiss="modal" class="btn btn-outline dark">Annuler</button>
                                 <button id="confirmerconsultpatient" type="submit" class="btn green"> Nouvelle Consultation </button>
                             </div>
                         </div>
          
          <!-- Modal patient contole-->
                <div id="controlemodal" class="modal container fade fast" style="font-family: cursive;" tabindex="-1">
                             <div class="modal-header">
                                 <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                                 <h4 class="modal-title" style="font-family: cursive;"> <img src='../img/ajacte.png' style="width: 30px;"> Contrôle </h4>
                             </div>
                             <div class="modal-body">
                                 <form id="modalActeForm" role="form" novalidate="novalidate" method="POST">
                                     <div class="col-md-12">
                                            <div class="portlet light bordered" style="background-color: #fff;margin: 5px;height: 130px;">
                                                <div class="portlet-title tabbable-line">
                                                    <div class="caption">
                                                        <i class="icon-bubbles font-dark hide"></i>
                                                        <span class="caption-subject font-dark bold uppercase"><img src="../img/pillsapci.png" alt="details" > &nbsp;Patients </span>
                                                    </div>
                                                    <ul class="nav nav-tabs">
                                                        <li class="active">
                                                            <a href="#portlet_comments_1" data-toggle="tab"> Liste des Patients &nbsp;<img src="../img/pills.png" style="width: 20px;margin-top: -5px;" alt=""> </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" id="Npatient1"> Nouveau Patient <img src="../img/drugs.png" style="width: 20px;margin-top: -5px;" alt=""> </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="portlet-body">
                                                         <div class="col-sm-12">
                                                             <div class="form-group form-md-line-input has-success " style=" margin-top: -15px; ">
                                                                     <div class="input-icon">
                                                                         <select id="select2-patient1" class="form-control"></select>
                                                                         <label for="form_control_1">Patient</label>
                                                                         <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                                                                     </div>
                                                                 </div>
                                                         </div>
                                                </div>
                                            </div>
                                            </div>
                                     </form>
                             </div>
                             <div class="modal-footer">
                                 <button id="anuulercontrole" type="reset" data-dismiss="modal" class="btn btn-outline dark">Annuler</button>
                                 <button id="confirmercontrole" type="submit" class="btn green"> Nouvelle Contrôle </button>
                             </div>
                         </div>
          
           <!--ModalAcces-->
	 <div id="Accesmodal" class="modal container fade fast" style="font-family: cursive;" tabindex="-1">
                             <div class="modal-header">
                                 <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                                 <h4 class="modal-title" style="font-family: cursive;margin-bottom: -10px;"> <img src='../img/worldwide.png' style="width: 40px;">&nbsp; Gestion d'Accés (Sécurite)</h4>
                             </div>
                             <div class="modal-body">
                                  <div class="mt-element-ribbon col-md-8" style="padding: 0px 0px 0px 10px;" data-auto-scroll="true" data-slide-speed="200">
            
            
                                    <div class="portlet-body form">
                                        <form role="form" id="FormVALUtilisateur" novalidate="novalidate" method="POST">
                                                
                                                <div class="panel-group accordion" id="accordion3">
                                                    
                                                <div class="panel panel-default">
                                                   
                                                    <div id="collapse_3" class="panel-collapse collapse in" aria-expanded="true" >
                                                        <div class="row" style="margin-left: 0px;">
                                                   <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                        <div class="ribbon-sub ribbon-clip"></div>
                                                                        <img  src="../img/nurse_.png" alt="details">&nbsp;<span id='typeaction'> Nouvel utilisateur </span></div>
                                                    </div>
                                                        <div class="panel-body">
                                                            <!-- Begin Acte body -->
                                                             <div class="row">
                                                                <div class="col-md-6">

                                                                    <div class="form-group form-md-line-input has-success ">
                                                                        <div class="input-icon">
                                                                            <input id="Login" name="Login" type="text" class="form-control" placeholder="Login Utilisateur" >
                                                                            <label for="form_control_1">Login</label>
                                                                            <span class="help-block">Entrer Login</span>
                                                                             <i class="fa fa-dollar" aria-hidden="true"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">

                                                                    <div class="form-group form-md-line-input has-success ">
                                                                        <div class="input-icon">
                                                                            <input id="Passe" name="Passe" type="text" class="form-control" placeholder="Mot de Passe Utilisateur" >
                                                                            <label for="form_control_1">Mot de Passe</label>
                                                                            <span class="help-block">Entrer Mot de Passe</span>
                                                                             <i class="fa fa-dollar" aria-hidden="true"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                    </div>
                                                            <div class="col-md-12">
                                                         <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                        <select id="Type" name="Type" class="form-control">
                                                            
                                                        </select>
                                                                <label for="form_control_1">Type</label>
                                                                <i class="fa fa-user-md"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                            <!-- End Acte body -->
                                                            <br/><br/>
                                                            
                                                              <div class="margiv-top-10 center-wrap">
                                                                    <a id="submitacces" href="javascript:;" class="btn blue" style="margin-left: 120px;"> Enregister Utilisateur <span class="glyphicon glyphicon-cog"></span> </a>&nbsp;&nbsp;&nbsp;
                                                                    <a type="reset" data-dismiss="modal"class="btn default"> Annuler l'enregistrement <span class="glyphicon glyphicon-alert"> </span></a>
                                                                    
                                                                </div>
                                                            
                                                            </div>
                                                    </div>
                                                </div>
                                                </div>
                                        </form>
                                    </div>
                        </div>
                        <div class="mt-element-ribbon col-md-4" style="padding: 0px 0px 0px 10px;" data-auto-scroll="true" data-slide-speed="200">
            
            
                                    <div class="portlet-body form">
                                        <form role="form" id="FormVAL1" novalidate="novalidate" method="POST">
                                                
                                                <div class="panel-group accordion" id="accordion2">
                                                    
                                                <div class="panel panel-default">
                                                   
                                                    <div id="collapse_2" class="panel-collapse collapse in" aria-expanded="true" >
                                                        <div class="row" style="margin-left: 0px;">
                                                            <span id="nbUtilisateurs" class="badge badge-danger pull-left" style="margin-left: 233px; margin-bottom: -20px; z-index: 6; position: relative;"> 0 </span>      
                                                   <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                 
                                                       <div class="ribbon-sub ribbon-clip"></div>
                                                                        <img  src="../img/nurse_.png" alt="details">&nbsp;Liste des Utilisateurs </div>
                                                            
                                                    </div>
                                                        <div class="panel-body">
                                                            
                                                            <div class="alert alert-danger display-hide">
                                                                   <button class="close" data-close="alert"></button><i class="fa-fw fa fa-times"></i> Cette consultation n'a pas des actes médical. </div>
                                                            <!-- Begin utilisateur body -->
                                                            <div id="listeUtilisateurs" style=" font-family: cursive;">
                                                                
                                                            </div>
                                                            
                                                            <!-- End utilisateur body -->
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                        </form>
                                    </div>
                            </div>
                             </div>
                         </div>
         
        <!-- Back Consult -->
                <ul id="menuback" class="mfb-component--br mfb-zoomin hide" data-mfb-toggle="hover">
                        <li class="mfb-component__wrap">
                          <a href="#" class="mfb-component__button--main">
                              <img src='../img/observation.png' style="padding-top: 10px;padding-left: 8px;">
                          </a>
                          <ul class="mfb-component__list">
                            <li>
                              <a href="javascript:CALLBACK();" data-mfb-label="Retour à la Fenétre Consultation" class="mfb-component__button--child" >
                                <img src='../img/exit.png' style="padding-top: 12px;padding-left: 11px;">
                              </a>
                            </li>
                            <li>
                              <a href="javascript:Annuler();" data-mfb-label="Annuler Consultation" class="mfb-component__button--child">
                                <img src='../img/basket.png' style="padding-top: 12px;padding-left: 11px;">
                              </a>
                            </li>
                          </ul>
                        </li>
                </ul>

       <jsp:include page="../body_page/js_declare.jsp"/>

        <script src="../js/plugin/other-plugin/mymenu.js"></script>
        
        <!-- END THEME LAYOUT SCRIPTS -->
    </body>

</html>