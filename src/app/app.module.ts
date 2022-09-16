import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PainelAdmComponent } from './painel-adm/painel-adm.component';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { FuncionarioCadastroComponent } from './funcionario-cadastro/funcionario-cadastro.component';
import { OrdenServicoComponent } from './orden-servico/orden-servico.component';
import { EquipamentoCadastroComponent } from './equipamento-cadastro/equipamento-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PainelAdmComponent,
    ClienteCadastroComponent,
    FuncionarioCadastroComponent,
    OrdenServicoComponent,
    EquipamentoCadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
