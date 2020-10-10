package com.svscientific.datamanagement.models;

import javax.persistence.*;

@Entity
public class Quantity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Long id;

    @Column
    private String name;

    @Column
    private String abbreviation;
}
