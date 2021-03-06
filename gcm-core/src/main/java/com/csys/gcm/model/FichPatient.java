/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.model;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author ASUS
 */
@Entity
@Table(name = "Fich_Patient")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "FichPatient.findAll", query = "SELECT f FROM FichPatient f"),
    @NamedQuery(name = "FichPatient.findByNumPatient", query = "SELECT f FROM FichPatient f WHERE f.fichPatientPK.numPatient = :numPatient"),
    @NamedQuery(name = "FichPatient.findByFichPatient", query = "SELECT f FROM FichPatient f WHERE f.fichPatientPK.numPatient = :numPatient and f.fichPatientPK.codeMedTrit = :codeMedTrit"),
    @NamedQuery(name = "FichPatient.findByCodeMedTrit", query = "SELECT f.patient FROM FichPatient f WHERE f.fichPatientPK.codeMedTrit = :codeMedTrit"),
    @NamedQuery(name = "FichPatient.findByDateCreation", query = "SELECT f FROM FichPatient f WHERE f.dateCreation = :dateCreation")})
public class FichPatient implements Serializable {

    private static final long serialVersionUID = 1L;
    @EmbeddedId
    protected FichPatientPK fichPatientPK;
    @Column(name = "date_creation")
    @Temporal(TemporalType.DATE)
    private Date dateCreation;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "fichPatient")
    private Collection<Rdv> rdvCollection;
    @JoinColumn(name = "num_patient", referencedColumnName = "num_fich_patient", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Patient patient;
    @JoinColumn(name = "code_Med_Trit", referencedColumnName = "code_Med_Trit", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Utilisateur utilisateur;

    public FichPatient() {
    }

    public FichPatient(FichPatientPK fichPatientPK) {
        this.fichPatientPK = fichPatientPK;
    }

    public FichPatient(int numPatient, int codeMedTrit) {
        this.fichPatientPK = new FichPatientPK(numPatient, codeMedTrit);
    }

    public FichPatientPK getFichPatientPK() {
        return fichPatientPK;
    }

    public void setFichPatientPK(FichPatientPK fichPatientPK) {
        this.fichPatientPK = fichPatientPK;
    }

    public Date getDateCreation() {
        return dateCreation;
    }

    public void setDateCreation(Date dateCreation) {
        this.dateCreation = dateCreation;
    }

    @XmlTransient
    public Collection<Rdv> getRdvCollection() {
        return rdvCollection;
    }

    public void setRdvCollection(Collection<Rdv> rdvCollection) {
        this.rdvCollection = rdvCollection;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public Utilisateur getUtilisateur() {
        return utilisateur;
    }

    public void setUtilisateur(Utilisateur utilisateur) {
        this.utilisateur = utilisateur;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (fichPatientPK != null ? fichPatientPK.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof FichPatient)) {
            return false;
        }
        FichPatient other = (FichPatient) object;
        if ((this.fichPatientPK == null && other.fichPatientPK != null) || (this.fichPatientPK != null && !this.fichPatientPK.equals(other.fichPatientPK))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.csys.gcm.model.FichPatient[ fichPatientPK=" + fichPatientPK + " ]";
    }
    
}
