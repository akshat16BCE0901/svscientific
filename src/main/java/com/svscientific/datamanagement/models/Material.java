package com.svscientific.datamanagement.models;

import javax.persistence.*;

@Entity
public class Material {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Material() {
    }

    public Material(Long id, String name){
        this.id = id;
        this.name = name;
    }

    @Override
    public String toString() {
        return "Material{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
