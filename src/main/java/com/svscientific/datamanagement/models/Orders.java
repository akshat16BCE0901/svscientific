package com.svscientific.datamanagement.models;

import javax.persistence.*;

@Entity
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne
    @JoinColumn(name = "material")
    private Material material;

    @OneToOne
    @JoinColumn(name="quantity")
    private Quantity quantity;

    @OneToOne
    @JoinColumn(name = "make")
    private Make make;

    @Column
    private double numItems;

    @Column
    private String catid;

    @Column
    private double rate;

    @Column
    private String per;

    @Column
    private String disc;

    @Column
    private String HSNCode;

    @Column
    private String GST;

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

    public double getNumItems() {
        return numItems;
    }

    public void setNumItems(double num_items) {
        this.numItems = num_items;
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

    public String getHSNCode() {
        return HSNCode;
    }

    public void setHSNCode(String HSNCode) {
        this.HSNCode = HSNCode;
    }

    public String getGST() {
        return GST;
    }

    public void setGST(String GST) {
        this.GST = GST;
    }

    public Orders() {
    }

    public Orders(Long id, Material material, Quantity quantity, Make make, double numItems, String catid, double rate, String per, String disc, String HSNCode, String GST) {
        this.id = id;
        this.make = make;
        this.material = material;
        this.numItems = numItems;
        this.catid = catid;
        this.disc = disc;
        this.GST = GST;
        this.HSNCode = HSNCode;
        this.rate = rate;
        this.per = per;
    }

    @Override
    public String toString() {
        return "Orders{" +
                "id=" + id +
                ", material=" + material +
                ", quantity=" + quantity +
                ", make=" + make +
                ", numItems=" + numItems +
                ", catid='" + catid + '\'' +
                ", rate=" + rate +
                ", per='" + per + '\'' +
                ", disc='" + disc + '\'' +
                ", HSNCode='" + HSNCode + '\'' +
                ", GST='" + GST + '\'' +
                '}';
    }
}
