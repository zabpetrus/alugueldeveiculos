package br.com.alugueisdecarros.rentacar.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


public class Disponibilidade {

    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    private String local_retirada;

    private String data_retirada;

    private String hora_retirada;

    private String local_devolucao;

    private String data_devolucao;

    private String hora_devolucao;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
