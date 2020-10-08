package com.svscientific.datamanagement.models;

import javax.persistence.*;

@Entity
public class CounterParty {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String name;

    @Column
    private String email;

}
