import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { ErrorResponse } from '../shared/error-response';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(
    private http: HttpClient
  ) {

  }

  listar() {
    return this.http.get(`${environment.enderecoApi}cursos`)
      .pipe(
        catchError((error) => {
          if (error.status === 0 || error.status === 404) {
            error.error = 'Cursos não encontrados!';
          }

          return ErrorResponse.get(error);
        })
      );
  }

  detalhe(uid) {
    return this.http.get(`${environment.enderecoApi}cursos/${uid}`);
  }
}
