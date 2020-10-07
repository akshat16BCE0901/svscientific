package com.svscientific.datamanagement.models;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Quotation {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column
    private String quotationID;

    @Column
    private String instrumentName;

    @Column
    private Double quantity;

    @Column
    private String unit;

    @Column
    private LocalDate entryDate;

    @Column
    private int followUpDate;

    @Column
    private boolean completed;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getQuotationID() {
        return quotationID;
    }

    public void setQuotationID(String quotationID) {
        this.quotationID = quotationID;
    }

    public String getInstrumentName() {
        return instrumentName;
    }

    public void setInstrumentName(String instrumentName) {
        this.instrumentName = instrumentName;
    }

    public Double getQuantity() {
        return quantity;
    }

    public void setQuantity(Double quantity) {
        this.quantity = quantity;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public LocalDate getEntryDate() {
        return entryDate;
    }

    public void setEntryDate(LocalDate entryDate) {
        this.entryDate = entryDate;
    }

    public int getFollowUpDate() {
        return followUpDate;
    }

    public void setFollowUpDate(int followUpDate) {
        this.followUpDate = followUpDate;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    @Override
    public String toString() {
        return "Quotation{" +
                "id=" + id +
                ", quotationID='" + quotationID + '\'' +
                ", instrumentName='" + instrumentName + '\'' +
                ", quantity=" + quantity +
                ", unit='" + unit + '\'' +
                ", entryDate=" + entryDate +
                ", followUpDate=" + followUpDate +
                ", completed=" + completed +
                '}';
    }
}
