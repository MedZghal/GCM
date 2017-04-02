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
@Table(name = "Recette")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Recette.findAll", query = "SELECT r FROM Recette r"),
    @NamedQuery(name = "Recette.findByNumTrans", query = "SELECT r FROM Recette r WHERE r.numTrans = :numTrans"),
    @NamedQuery(name = "Recette.findByMontant", query = "SELECT r FROM Recette r WHERE r.montant = :montant"),
    @NamedQuery(name = "Recette.findByDateTrans", query = "SELECT r FROM Recette r WHERE r.dateTrans = :dateTrans"),
    @NamedQuery(name = "Recette.findByLibelle", query = "SELECT r FROM Recette r WHERE r.libelle = :libelle"),
    @NamedQuery(name = "Recette.findByType", query = "SELECT r FROM Recette r WHERE r.type = :type")})
public class Recette implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "num_trans")
    private Integer numTrans;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "montant")
    private String montant;
    @Column(name = "date_trans")
    @Temporal(TemporalType.DATE)
    private Date dateTrans;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 250)
    @Column(name = "libelle")
    private String libelle;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "type")
    private String type;
    @JoinColumn(name = "num_consult", referencedColumnName = "num_consult")
    @ManyToOne(optional = false)
    private Consultation numConsult;

    public Recette() {
    }

    public Recette(Integer numTrans) {
        this.numTrans = numTrans;
    }

    public Recette(Integer numTrans, String montant, String libelle, String type) {
        this.numTrans = numTrans;
        this.montant = montant;
        this.libelle = libelle;
        this.type = type;
    }

    public Integer getNumTrans() {
        return numTrans;
    }

    public void setNumTrans(Integer numTrans) {
        this.numTrans = numTrans;
    }

    public String getMontant() {
        return montant;
    }

    public void setMontant(String montant) {
        this.montant = montant;
    }

    public Date getDateTrans() {
        return dateTrans;
    }

    public void setDateTrans(Date dateTrans) {
        this.dateTrans = dateTrans;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Consultation getNumConsult() {
        return numConsult;
    }

    public void setNumConsult(Consultation numConsult) {
        this.numConsult = numConsult;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (numTrans != null ? numTrans.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Recette)) {
            return false;
        }
        Recette other = (Recette) object;
        if ((this.numTrans == null && other.numTrans != null) || (this.numTrans != null && !this.numTrans.equals(other.numTrans))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.csys.gcm.model.Recette[ numTrans=" + numTrans + " ]";
    }
    
}
