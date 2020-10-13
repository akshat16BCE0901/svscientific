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
    private String purchaseOrderId;

    @Column
    @OneToMany(fetch = FetchType.EAGER)
    private List<Order> order;

    @Column
    private Date insertedDate;

    @Column
    @OneToOne
    private CounterParty counterParty;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPurchaseOrderId() {
        return purchaseOrderId;
    }

    public void setPurchaseOrderId(String purchaseOrderId) {
        this.purchaseOrderId = purchaseOrderId;
    }

    public List<Order> getOrder() {
        return order;
    }

    public void setOrder(List<Order> order) {
        this.order = order;
    }

    public Date getInsertedDate() {
        return insertedDate;
    }

    public void setInsertedDate(Date insertedDate) {
        this.insertedDate = insertedDate;
    }

    public CounterParty getCounterParty() {
        return counterParty;
    }

    public void setCounterParty(CounterParty counterParty) {
        this.counterParty = counterParty;
    }

    @Override
    public String toString() {
        return "PurchaseOrder{" +
                "id=" + id +
                ", purchaseOrderId='" + purchaseOrderId + '\'' +
                ", order=" + order +
                ", insertedDate=" + insertedDate +
                ", counterParty=" + counterParty +
                '}';
    }
}
