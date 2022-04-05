import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import '../../pages/carros/carros.component.css';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {



  constructor(private router:Router) { }

  nextStep(){
    const page2: string[] = ['carros'];
    this.router.navigate(page2);
  };

  ngOnInit(): void {
  }

}
