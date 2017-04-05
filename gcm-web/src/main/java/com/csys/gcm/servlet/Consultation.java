/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.servlet;

import com.csys.gcm.generic.WS;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeFactory;
import javax.xml.datatype.XMLGregorianCalendar;

/**
 *
 * @author ASUS
 */
public class Consultation extends HttpServlet {

    
    WS webservice;
    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, DatatypeConfigurationException, ParseException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            
            if(WS.PortCltWS == null){
                        webservice= new WS();
                        webservice.GcmEventWS();
                    }
        
            Gson gson = new GsonBuilder().serializeNulls().create();
            HttpSession session=request.getSession(true);
            SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy");
            String function=request.getParameter("function");
            String type=request.getParameter("type");
            
            if(type.equals("consult")){
                switch (function) {
                    case "GetListMotif":
                            {
                                out.println(gson.toJson(WS.PortCltWS.getListMotif()));
                                break;
                            }
                    case "GetListDiagnostic":        
                            {
                                out.println(gson.toJson(WS.PortCltWS.getListDiagnostic()));
                                break;
                            }
                    case "GetListAntecedents":        
                            {
                                out.println(gson.toJson(WS.PortCltWS.getListAntecedents()));
                                break;
                            }
                    case "GetListActe":        
                            {
                                out.println(gson.toJson(WS.PortCltWS.getListActe()));
                                break;
                            }
                    case "GetMaxActe":        
                            {
                                out.println(gson.toJson(WS.PortCltWS.getMaxActe()));
                                break;
                            }
                    case "GetListActeNonRemborsable":        
                            {
                                out.println(gson.toJson(WS.PortCltWS.getListActeNonRemborsable()));
                                break;
                            }
                    case "GetActeNonRemborsablebyLibelle":        
                            {
                                String libelle=request.getParameter("libelle");
                                out.println(gson.toJson(WS.PortCltWS.getActeNonRemborsablebyLibelle(libelle)));
                                break;
                            }
                    case "GetListAntecedentsByPatient":        
                            {
                                int patient=Integer.parseInt(request.getParameter("patient"));
                                out.println(gson.toJson(WS.PortCltWS.getListAntecedentsByPatient(patient)));
                                break;
                            }
                    case "GetListConsultationByPatient":        
                            {
                                int NumFichPatient=Integer.parseInt(request.getParameter("NumFichPatient"));
                                out.println(gson.toJson(WS.PortCltWS.getListConsultationByPatient(NumFichPatient)));
                                break;
                            }
                    case "GetListMotifConsultByNumConsult":        
                            {
                                int NumConsult=Integer.parseInt(request.getParameter("NumConsult"));
                                out.println(gson.toJson(WS.PortCltWS.getListMotifConsultByNumConsult(NumConsult)));
                                break;
                            }
                    case "GetListActeMedicauxAllByNumConsult":        
                            {
                                int NumConsult=Integer.parseInt(request.getParameter("NumConsult"));
                                out.println(gson.toJson(WS.PortCltWS.getListActeMedicauxAllByNumConsult(NumConsult)));
                                break;
                            }
                    case "GetListActeMedicauxByNumConsult":        
                            {
                                int NumConsult=Integer.parseInt(request.getParameter("NumConsult"));
                                out.println(gson.toJson(WS.PortCltWS.getListActeMedicauxByNumConsult(NumConsult)));
                                break;
                            }
                    case "GetListActeMedicauxNonRembByNumConsult":        
                            {
                                int NumConsult=Integer.parseInt(request.getParameter("NumConsult"));
                                out.println(gson.toJson(WS.PortCltWS.getListActeMedicauxNonRembByNumConsult(NumConsult)));
                                break;
                            }
                    case "GetConsultationByNum":        
                            {
                                int num_consult=Integer.parseInt(request.getParameter("num_consult"));
                                out.println(gson.toJson(WS.PortCltWS.getConsultationByNum(num_consult)));
                                break;
                            }
                    case "GetListPrescriptionOrdByNumOrd":        
                            {
                                int Num_Ord=Integer.parseInt(request.getParameter("Num_Ord"));
                                out.println(gson.toJson(WS.PortCltWS.getListPrescriptionOrdByNumOrd(Num_Ord)));
                                break;
                            }
                    case "GetExamenByNumExamen":        
                            {
                                int NumConsult=Integer.parseInt(request.getParameter("NumConsult"));
                                out.println(gson.toJson(WS.PortCltWS.getExamenByNumExamen(NumConsult)));
                                break;
                            }
                    case "GetOrdonnanceByNum":        
                            {
                                int num_consult=Integer.parseInt(request.getParameter("num_consult"));
                                out.println(gson.toJson(WS.PortCltWS.getOrdonnanceByNum(num_consult)));
                                break;
                            }
                    default:
                        break;
                }
            }else
                 if(type.equals("update")){
                     switch (function) {
                        case "AjAntecedent":
                            {
                                String typ=request.getParameter("typ");
                                String descp=request.getParameter("descp");
                                int patient=Integer.parseInt(request.getParameter("patient"));
                                out.println(gson.toJson(WS.PortCltWS.ajAntecedent(typ, descp, patient)));
                                break;
                            } 
                        case "SuppAntecedentByPatient":
                            {
                                int patient=Integer.parseInt(request.getParameter("patient"));
                                out.println(gson.toJson(WS.PortCltWS.suppAntecedentByPatient(patient)));
                                break;
                            }
                        case "SuppPrescriptionOrdByNum_Ord":
                            {
                                int num_ord=Integer.parseInt(request.getParameter("num_ord"));
                                out.println(gson.toJson(WS.PortCltWS.suppPrescriptionOrdByNumOrd(num_ord)));
                                break;
                            }
                        case "SuppOrdonnance":
                            {
                                String num_ord=request.getParameter("num_ord");
                                out.println(gson.toJson(WS.PortCltWS.suppOrdonnance(num_ord)));
                                break;
                            }
                        case "AjExamen":
                            {
                                String TA=request.getParameter("TA");
                                String pouls=request.getParameter("pouls");
                                String temp=request.getParameter("temp");
                                String exam_phy=request.getParameter("exam_phy");
                                String etat_general=request.getParameter("etat_general");
                                String auscu_cardi=request.getParameter("auscu_cardi");
                                String auscu_pleuro=request.getParameter("auscu_plo");
                                String examen_ORL=request.getParameter("examen_ORL");
                                String aires_gangl=request.getParameter("aires_gangl");
                                String examen_abdominal=request.getParameter("examen_abdominal");
                                
                                int num_consult=Integer.parseInt(request.getParameter("num_consult"));
                                out.println(gson.toJson(WS.PortCltWS.ajExamen(TA, pouls, temp, exam_phy, etat_general, auscu_cardi, auscu_pleuro, examen_ORL, aires_gangl, examen_abdominal, num_consult)));
                                break;
                            }
                        case "UpdateExamen":
                            {
                                String TA=request.getParameter("TA");
                                String pouls=request.getParameter("pouls");
                                String temp=request.getParameter("temp");
                                String exam_phy=request.getParameter("exam_phy");
                                String etat_general=request.getParameter("etat_general");
                                String auscu_cardi=request.getParameter("auscu_cardi");
                                String auscu_plo=request.getParameter("auscu_plo");
                                String examen_ORL=request.getParameter("examen_ORL");
                                String aires_gangl=request.getParameter("aires_gangl");
                                String examen_abdominal=request.getParameter("examen_abdominal");
                                
                                int num_consult=Integer.parseInt(request.getParameter("num_consult"));
                                out.println(gson.toJson(WS.PortCltWS.updateExamen(TA,pouls,temp,exam_phy,etat_general,auscu_cardi,auscu_plo,examen_ORL,aires_gangl,examen_abdominal,num_consult)));
                                break;
                            }
                        case "AjConsultation":
                            {
                                String date_consult=request.getParameter("date_consult");
                                Date datnaiss = sdf.parse(date_consult);
                                GregorianCalendar c = new GregorianCalendar();
                                c.setTime(datnaiss);
                                XMLGregorianCalendar dateC = DatatypeFactory.newInstance().newXMLGregorianCalendar(c);
                                int num_patient=Integer.parseInt(request.getParameter("num_patient"));
                                int Diag_consult=Integer.parseInt(request.getParameter("Diag_consult"));
                                int code_Med_Trit=Integer.parseInt(request.getParameter("code_Med_Trit"));
                                String type_consult=request.getParameter("type_consult");
                                int num_examen=Integer.parseInt(request.getParameter("num_examen"));
                                int num_ord=Integer.parseInt(request.getParameter("num_ord"));
                               
                                out.println(gson.toJson(WS.PortCltWS.ajConsultation(dateC, num_patient, Diag_consult, type_consult,code_Med_Trit,num_examen,num_ord)));
                                break;
                            } 
                        case "AjOrdonnance":
                            {
                                String date_Ord=request.getParameter("date_Ord");
                                Date date_Ordn = sdf.parse(date_Ord);
                                GregorianCalendar c = new GregorianCalendar();
                                c.setTime(date_Ordn);
                                XMLGregorianCalendar dateOrd = DatatypeFactory.newInstance().newXMLGregorianCalendar(c);
                                int num_ord=Integer.parseInt(request.getParameter("num_ord"));
                              
                                out.println(gson.toJson(WS.PortCltWS.ajOrdonnance(dateOrd, num_ord)));
                                break;
                            }
                        case "AjPrescriptionOrd":
                            {
                                int num_medc=Integer.parseInt(request.getParameter("num_medc"));
                                int num_ord=Integer.parseInt(request.getParameter("num_ord"));
                                String dure=request.getParameter("dure");
                                String qunt_med=request.getParameter("qunt_med");
                                String nb_fois_util=request.getParameter("nb_fois_util");
                              
                                out.println(gson.toJson(WS.PortCltWS.ajPrescriptionOrd(num_medc, num_ord, dure, qunt_med, nb_fois_util)));
                                break;
                            } 
                        case "UpdateConsultationOrd":
                            {
                                int num_Consult=Integer.parseInt(request.getParameter("num_Consult"));
                                int num_ord=Integer.parseInt(request.getParameter("num_ord"));
                               
                                out.println(gson.toJson(WS.PortCltWS.updateConsultationOrd(num_Consult, num_ord)));
                                break;
                            } 
                        case "UpdateConsultation":
                            {
                                String date_consult=request.getParameter("date_consult");
                                Date datnaiss = sdf.parse(date_consult);
                                GregorianCalendar c = new GregorianCalendar();
                                c.setTime(datnaiss);
                                XMLGregorianCalendar dateC = DatatypeFactory.newInstance().newXMLGregorianCalendar(c);
                                int num_Consult=Integer.parseInt(request.getParameter("num_Consult"));
                                int num_patient=Integer.parseInt(request.getParameter("num_patient"));
                                int Diag_consult=Integer.parseInt(request.getParameter("Diag_consult"));
                                String type_consult=request.getParameter("type_consult");
                               
                                out.println(gson.toJson(WS.PortCltWS.updateConsultation(num_Consult,dateC, num_patient, Diag_consult, type_consult)));
                                break;
                            } 
                        case "AjMotifConsult":
                            {
                                int num_Motif=Integer.parseInt(request.getParameter("num_Motif"));
                                int num_consult=Integer.parseInt(request.getParameter("num_consult"));
                               
                                out.println(gson.toJson(WS.PortCltWS.ajMotifConsult(num_Motif, num_consult)));
                                break;
                            }
                        case "AjActe":
                            {
                                String libelle=request.getParameter("libelle");
                                int accord=Integer.parseInt(request.getParameter("accord"));
                                String tiket_moder=request.getParameter("tiket_moder");
                                String montant=request.getParameter("montant");
                                String Description=request.getParameter("Description");
                                String cotation=request.getParameter("cotation");
                                String type_acte=request.getParameter("type_acte");
                               
                                out.println(gson.toJson(WS.PortCltWS.ajActe(libelle, accord, tiket_moder, montant, Description, cotation, type_acte)));
                                break;
                            }
                        case "AjActeMedicaux":
                            {
                                String date_acte=request.getParameter("date_acte");
                                Date date_acte_ = sdf.parse(date_acte);
                                GregorianCalendar c = new GregorianCalendar();
                                c.setTime(date_acte_);
                                XMLGregorianCalendar dateacte = DatatypeFactory.newInstance().newXMLGregorianCalendar(c);
                                int num_acte=Integer.parseInt(request.getParameter("num_acte"));
                                int num_consult=Integer.parseInt(request.getParameter("num_consult"));
                                int nb_pr_chg=Integer.parseInt(request.getParameter("nb_pr_chg"));
                               
                               
                                out.println(gson.toJson(WS.PortCltWS.ajActeMedicaux(num_acte,num_consult,dateacte,nb_pr_chg)));
                                break;
                            }
                        case "SuppConsultation":
                            {
                                String num_consult=request.getParameter("num_consult");
                               
                                out.println(gson.toJson(WS.PortCltWS.suppConsultation(num_consult)));
                                break;
                            } 
                        case "SuppMotifConsultbyNum_Consult":
                            {
                                int num_consult=Integer.parseInt(request.getParameter("num_consult"));
                               
                                out.println(gson.toJson(WS.PortCltWS.suppMotifConsultbyNumConsult(num_consult)));
                                break;
                            } 
                        case "SuppActeMedicaux":
                            {
                                String num_consult=request.getParameter("num_consult");
                                String num_acte=request.getParameter("num_acte");
                               
                                out.println(gson.toJson(WS.PortCltWS.suppActeMedicaux(num_acte, num_consult)));
                                break;
                            } 
                        case "SuppActeMedicauxbyNum_Consult":
                            {
                                int num_consult=Integer.parseInt(request.getParameter("num_consult"));
                               
                                out.println(gson.toJson(WS.PortCltWS.suppActeMedicauxbyNumConsult(num_consult)));
                                break;
                            } 
                        case "UpdateActeMedicauxbyNum_Consult":
                            {
                                int num_consult_old=Integer.parseInt(request.getParameter("num_consult_old"));
                                int num_consult_New=Integer.parseInt(request.getParameter("num_consult_New"));
                               
                                out.println(gson.toJson(WS.PortCltWS.updateActeMedicauxbyNumConsult(num_consult_old, num_consult_New)));
                                break;
                            } 
                        default:
                                    break;
                            }
                  }
         }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (DatatypeConfigurationException ex) {
            Logger.getLogger(Consultation.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ParseException ex) {
            Logger.getLogger(Consultation.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (DatatypeConfigurationException ex) {
            Logger.getLogger(Consultation.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ParseException ex) {
            Logger.getLogger(Consultation.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
