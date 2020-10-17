package com.svscientific.datamanagement.models;

import javax.persistence.*;

@Entity
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String purchaseorderid;

    @OneToOne
    @JoinColumn(name = "material")
    private Material material;

    @OneToOne
    @JoinColumn(name="quantity")
    private Quantity quantity;

    @OneToOne
    @JoinColumn(name = "make")
    private Make make;

    @Column(name="numitems")
    private double numitems;

    @Column
    private String catid;

    @Column
    private double rate;

    @Column
    private String per;

    @Column
    private String disc;

    @Column
    private String hsncode;

    @Column
    private String gst;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Material getMaterial() {
        return material;
    }

    public void setMaterial(Material material) {
        this.material = material;
    }

    public Quantity getQuantity() {
        return quantity;
    }

    public void setQuantity(Quantity quantity) {
        this.quantity = quantity;
    }

    public Make getMake() {
        return make;
    }

    public void setMake(Make make) {
        this.make = make;
    }

    public double getNumitems() {
        return numitems;
    }

    public void setNumitems(double num_items) {
        this.numitems = num_items;
    }

    public String getCatid() {
        return catid;
    }

    public void setCatid(String catid) {
        this.catid = catid;
    }

    public double getRate() {
        return rate;
    }

    public void setRate(double rate) {
        this.rate = rate;
    }

    public String getPer() {
        return per;
    }

    public void setPer(String per) {
        this.per = per;
    }

    public String getDisc() {
        return disc;
    }

    public void setDisc(String disc) {
        this.disc = disc;
    }

    public String getHsncode() {
        return hsncode;
    }

    public void setHsncode(String hsncode) {
        this.hsncode = hsncode;
    }

    public String getGst() {
        return gst;
    }

    public void setGst(String gst) {
        this.gst = gst;
    }

    public Orders() {
    }

    public Orders(Long id, Material material, Quantity quantity, Make make, double numItems, String catid, double rate, String per, String disc, String HSNCode, String GST, String purchaseorderid) {
        this.id = id;
        this.make = make;
        this.material = material;
        this.numitems = numItems;
        this.catid = catid;
        this.disc = disc;
        this.gst = GST;
        this.hsncode = HSNCode;
        this.rate = rate;
        this.per = per;
        this.quantity = quantity;
        this.purchaseorderid = purchaseorderid;
    }

    @Override
    public String toString() {
        return "Orders{" +
                "id=" + id +
                ", purchaseorderid='" + purchaseorderid + '\'' +
                ", material=" + material +
                ", quantity=" + quantity +
                ", make=" + make +
                ", numitems=" + numitems +
                ", catid='" + catid + '\'' +
                ", rate=" + rate +
                ", per='" + per + '\'' +
                ", disc='" + disc + '\'' +
                ", hsncode='" + hsncode + '\'' +
                ", gst='" + gst + '\'' +
                '}';
    }
}
