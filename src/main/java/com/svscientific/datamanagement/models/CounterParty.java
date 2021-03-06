package com.svscientific.datamanagement.models;

import javax.persistence.*;

@Entity
@Table(name = "`counterparty`")
public class CounterParty {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id;

    @Column
    private String name;

    @Column
    private String email;

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public CounterParty() {
    }

    public CounterParty(Long id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    @Override
    public String toString() {
        return "CounterParty{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
