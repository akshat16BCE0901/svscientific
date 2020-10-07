package com.svscientific.datamanagement.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Quantity {

    @Id
    @Column
    private String name;

    @Column
    private String abbreviation;
}
