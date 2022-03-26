package br.com.alugueisdecarros.rentacar.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PrivacidadeController {

    @GetMapping("/privacidade")
    public String privacidade(){
        return "privacidade";
    }
}
