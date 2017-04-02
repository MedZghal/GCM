/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.model;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author ASUS
 */
@Entity
@Table(name = "RDV")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Rdv.findAll", query = "SELECT r FROM Rdv r"),
    @NamedQuery(name = "Rdv.findByNumRDV", query = "SELECT r FROM Rdv r WHERE r.numRDV = :numRDV"),
    @NamedQuery(name = "Rdv.findByDateRDV", query = "SELECT r FROM Rdv r WHERE r.dateRDV = :dateRDV"),
    @NamedQuery(name = "Rdv.findByTypeRDV", query = "SELECT r FROM Rdv r WHERE r.typeRDV = :typeRDV"),
    @NamedQuery(name = "Rdv.findByAlerteRDV", query = "SELECT r FROM Rdv r WHERE r.alerteRDV = :alerteRDV"),
    @NamedQuery(name = "Rdv.findByEffSonorRDV", query = "SELECT r FROM Rdv r WHERE r.effSonorRDV = :effSonorRDV"),
    @NamedQuery(name = "Rdv.findByPresence", query = "SELECT r FROM Rdv r WHERE r.presence = :presence")})
public class Rdv implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "numRDV")
    private Integer numRDV;
    @Column(name = "dateRDV")
    @Temporal(TemporalType.DATE)
    private Date dateRDV;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "typeRDV")
    private String typeRDV;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "AlerteRDV")
    private String alerteRDV;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "effSonorRDV")
    private String effSonorRDV;
    @Basic(optional = false)
    @NotNull
    @Column(name = "presence")
    private int presence;
    @JoinColumns({
        @JoinColumn(name = "num_patient", referencedColumnName = "num_patient"),
        @JoinColumn(name = "num_medecin_trait", referencedColumnName = "code_Med_Trit")})
    @ManyToOne(optional = false)
    private FichPatient fichPatient;

    public Rdv() {
    }

    public Rdv(Integer numRDV) {
        this.numRDV = numRDV;
    }

    public Rdv(Integer numRDV, String typeRDV, String alerteRDV, String effSonorRDV, int presence) {
        this.numRDV = numRDV;
        this.typeRDV = typeRDV;
        this.alerteRDV = alerteRDV;
        this.effSonorRDV = effSonorRDV;
        this.presence = presence;
    }

    public Integer getNumRDV() {
        return numRDV;
    }

    public void setNumRDV(Integer numRDV) {
        this.numRDV = numRDV;
    }

    public Date getDateRDV() {
        return dateRDV;
    }

    public void setDateRDV(Date dateRDV) {
        this.dateRDV = dateRDV;
    }

    public String getTypeRDV() {
        return typeRDV;
    }

    public void setTypeRDV(String typeRDV) {
        this.typeRDV = typeRDV;
    }

    public String getAlerteRDV() {
        return alerteRDV;
    }

    public void setAlerteRDV(String alerteRDV) {
        this.alerteRDV = alerteRDV;
    }

    public String getEffSonorRDV() {
        return effSonorRDV;
    }

    public void setEffSonorRDV(String effSonorRDV) {
        this.effSonorRDV = effSonorRDV;
    }

    public int getPresence() {
        return presence;
    }

    public void setPresence(int presence) {
        this.presence = presence;
    }

    public FichPatient getFichPatient() {
        return fichPatient;
    }

    public void setFichPatient(FichPatient fichPatient) {
        this.fichPatient = fichPatient;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (numRDV != null ? numRDV.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Rdv)) {
            return false;
        }
        Rdv other = (Rdv) object;
        if ((this.numRDV == null && other.numRDV != null) || (this.numRDV != null && !this.numRDV.equals(other.numRDV))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.csys.gcm.model.Rdv[ numRDV=" + numRDV + " ]";
    }
    
}
