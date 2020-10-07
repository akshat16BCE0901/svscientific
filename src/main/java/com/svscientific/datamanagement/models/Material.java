package com.svscientific.datamanagement.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Material {

    @Id
    @Column
    private String name;
}
