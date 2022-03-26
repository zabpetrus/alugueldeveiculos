package br.com.alugueisdecarros.rentacar.entity;

import javax.persistence.*;


public class Cliente {

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String nome;

    private String nacionalidade;

    private Documento documento;

    private Telefone telefone1;

    private Telefone telefone2;

    private String email;

    private Genero genero;

    private String senha;



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
