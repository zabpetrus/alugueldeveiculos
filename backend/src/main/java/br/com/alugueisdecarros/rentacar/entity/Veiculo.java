package br.com.alugueisdecarros.rentacar.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

public class Veiculo {

    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    private String nomedocarro;

    private String descricao_curta;

    private GrupoVeicular grupoVeicular;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
