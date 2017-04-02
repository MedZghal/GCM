/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.dao;

import com.csys.gcm.model.Rdv;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Date;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;

/**
 *
 * @author ASUS
 */
public class RdvDao {
   EntityManager em=FactoriesRepository.GetEntityManager(FactoriesRepository.GetDmiPU());
    MyConnection myconn = new MyConnection();
    
    /**
     *
     * @return
     */
    public List<Rdv> GetListRdv(){
        Query query =em.createNamedQuery("Rdv.findAll",Rdv.class);
        return query.setFirstResult(0).setMaxResults(50).getResultList();
    }
    
    
    public String AjRdv(Date date ,String typ , String Alert, String sonor,int pres,int Codpat) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "insert into Rdv(dateRDV,typeRDV,AlerteRDV,effSonorRDV,presence,patient) values(?,?,?,?,?,?)";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setDate(1,new java.sql.Date(date.getTime()));
                 pstmt.setString(2,typ);
                 pstmt.setString(3,Alert);
                 pstmt.setString(4,sonor);
                 pstmt.setInt(5,pres);
                 pstmt.setInt(6,Codpat);
                 
                 n=pstmt.executeUpdate();
                 pstmt.close();
             }
             
         }catch(SQLException EX){
             System.err.printf(EX.getMessage());
             Err=EX.getMessage()+"";
            }finally{
             if(conn!=null){
                 try{
                     conn.close();
                 }catch(SQLException EX){
                 }
             }
         }
    
         return Err ;
    
    }
    
     public boolean SuppRdv  (String id ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from Rdv where numRDV='"+id+"'";
                 n=stm.executeUpdate(query);
                 stm.close();
             }
             
         }catch(SQLException EX){
             System.err.printf(EX.getMessage());
            }finally{
             if(conn!=null){
                 try{
                     conn.close();
                 }catch(SQLException EX){
                 }
             }
         }
    
         return n>0 ;
    
    }
     
     public String UpdateRdv(String num_rdv,Date date ,String typ , String Alert, String sonor,int pres,int Codpat) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "update Rdv set dateRdv=?,typeRdv=?,AlerteRdv=?,effSonorRdv=?,presence=?,patient=? where numRdv=?";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setDate(1,new java.sql.Date(date.getTime()));
                 pstmt.setString(2,typ);
                 pstmt.setString(3,Alert);
                 pstmt.setString(4,sonor);
                 pstmt.setInt(5,pres);
                 pstmt.setInt(6,Codpat);
                 pstmt.setString(7,num_rdv);
                 
                 n=pstmt.executeUpdate();
                 pstmt.close();
                         }
            
         }catch(SQLException EX){
             System.err.printf(EX.getMessage());
             Err=EX.getMessage()+"";
            }finally{
             if(conn!=null){
                 try{
                     conn.close();
                 }catch(SQLException EX){
                 }
             }
         }
    
         return Err ;
    
    }
}
