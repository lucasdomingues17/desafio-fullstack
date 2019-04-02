import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { ErrorResponse } from '../shared/error-response';
import { LocalStorageService } from '../shared/local-storage.service';

interface DadosDeAcesso {
  token: string;
  usuario: Usuario
}

export class Usuario {
  uid: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  token: string;
  usuario: Usuario;

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService,
  ) {
    this.token = this.localStorage.get('accessToken');
    this.usuario = this.localStorage.getObject('usuario');
  }

  login(data) {
    return this.http.post(`${environment.enderecoApi}autenticacao/login`, data)
      .pipe(
        tap(
          (dadosDeAcesso: DadosDeAcesso) => {
            this.salvarDadosDeAcesso(dadosDeAcesso)
          }
        ),
        catchError(ErrorResponse.get)
      );
  }

  salvarDadosDeAcesso(dadosDeAcesso) {
    if (dadosDeAcesso['token']) {
      this.localStorage.set('accessToken', dadosDeAcesso['token']);
    }

    if (dadosDeAcesso['usuario']) {
      this.localStorage.setObject('usuario', dadosDeAcesso['usuario']);
    }
  }



  public isAuthorized() {
    return this.localStorage.get('accessToken') ? true : false;
  }

}

