import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../../frontend/src/app/pages/home/home.component';
import { CarrosComponent } from './pages/carros/carros.component';
import { PessoalComponent } from './pages/pessoal/pessoal.component';
import { TarifasComponent } from './pages/tarifas/tarifas.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },
  {
    path: 'carros',
    component: CarrosComponent
  },
  {
    path: 'tarifas',
    component: TarifasComponent
  },
  {
    path: 'pessoal',
    component: PessoalComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
