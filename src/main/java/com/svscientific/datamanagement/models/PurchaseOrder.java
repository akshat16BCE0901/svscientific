package com.svscientific.datamanagement.models;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
public class PurchaseOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Long id;

    @Column(unique = true)
    private String purchaseorderid;

    @Column
    private Date inserteddate;

    @OneToOne
    private CounterParty counterparty;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPurchaseorderid() {
        return purchaseorderid;
    }

    public void setPurchaseorderid(String purchaseOrderId) {
        this.purchaseorderid = purchaseOrderId;
    }

    public Date getInserteddate() {
        return inserteddate;
    }

    public void setInserteddate(Date insertedDate) {
        this.inserteddate = insertedDate;
    }

    public CounterParty getCounterparty() {
        return counterparty;
    }

    public void setCounterparty(CounterParty counterParty) {
        this.counterparty = counterParty;
    }

    @Override
    public String toString() {
        return "PurchaseOrder{" +
                "id=" + id +
                ", purchaseOrderId='" + purchaseorderid + '\'' +
                ", insertedDate=" + inserteddate +
                ", counterParty=" + counterparty +
                '}';
    }
}
