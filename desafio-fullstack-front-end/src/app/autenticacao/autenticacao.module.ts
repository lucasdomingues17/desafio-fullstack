import { AutenticacaoService } from './autenticacao.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AutenticacaoRoutingModule } from './autenticacao-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AutenticacaoRoutingModule
  ],
  providers: [
    AutenticacaoService
  ]
})
export class AutenticacaoModule { }
