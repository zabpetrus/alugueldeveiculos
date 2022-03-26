package br.com.alugueisdecarros.rentacar.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@CrossOrigin
@Controller
public class AlterController{

    @RequestMapping("/hello")
    @ResponseBody
    void home() {
        System.out.println("call by angular");
    }

    @RequestMapping("/foo")
    @ResponseBody
    void home2() {
        System.out.println("call by angular - part 2");
    }
}
