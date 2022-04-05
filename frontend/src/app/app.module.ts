import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { BarComponent } from './components/bar/bar.component';
import { FormsModule } from '@angular/forms';
import { AgendamentoComponent } from './components/agendamento/agendamento.component';
import { GruposCarrosComponent } from './components/grupos-carros/grupos-carros.component';
import { PromocoesComponent } from './components/promocoes/promocoes.component';
import { ResumoComponent } from './components/resumo/resumo.component';
import { ResumoItemComponent } from './components/resumo/resumo-item/resumo-item.component';
import { SeguroComponent } from './components/seguro/seguro.component';
import { ToastsComponent } from './components/seguro/toasts/toasts.component';
import { ConfirmacaoComponent } from './components/confirmacao/confirmacao.component';
import { PagamentoComponent } from './components/pagamento/pagamento.component';
import { FinalComponent } from './components/final/final.component';
import { HeaderComponent } from './contents/header/header.component';
import { FooterComponent } from './contents/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CarrosComponent } from './pages/carros/carros.component';
import { TarifasComponent } from './pages/tarifas/tarifas.component';
import { PessoalComponent } from './pages/pessoal/pessoal.component';
import { NavComponent } from './contents/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BarComponent,
    AgendamentoComponent,
    GruposCarrosComponent,
    PromocoesComponent,
    ResumoComponent,
    ResumoItemComponent,
    SeguroComponent,
    ToastsComponent,
    ConfirmacaoComponent,
    PagamentoComponent,
    FinalComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarrosComponent,
    TarifasComponent,
    PessoalComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
