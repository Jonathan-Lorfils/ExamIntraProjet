package com.example.examintra.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Data
@Entity
public class CoupDeDee implements Serializable {

    @Id
    @GeneratedValue
    private int id;

    private String nom;

    private String guessUser;

    private String guessRandom;
}
