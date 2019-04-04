import { Curso, ICurso } from './curso';
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
            error.error = 'Nenhum curso foi encontrado!';
          }

          return ErrorResponse.get(error);
        })
      );
  }

  detalhe(id) {
    return this.http.get<Curso>(`${environment.enderecoApi}cursos/${id}`)
      .pipe(
        catchError((error) => {
          if (error.status === 0 || error.status === 404) {
            error.error = 'Curso não encontrado!';
          }

          return ErrorResponse.get(error);
        })
      );
  }

  obterOpcoesDeProfessores() {
    return this.http.get(`${environment.enderecoApi}professores`)
      .pipe(
        catchError((error) => {
          if (error.status === 0 || error.status === 404) {
            error.error = 'Nenhuma opção de professor foi encontrada!';
          }

          return ErrorResponse.get(error);
        })
      );
  }

  obterOpcoesDeSalas() {
    return this.http.get(`${environment.enderecoApi}salas`)
      .pipe(
        catchError((error) => {
          if (error.status === 0 || error.status === 404) {
            error.error = 'Nenhuma opção de sala foi encontrada!';
          }

          return ErrorResponse.get(error);
        })
      );
  }
  
  cadastrar(data) {
    return this.http.post(`${environment.enderecoApi}cursos`, data)
      .pipe(
        catchError((error) => {
          if (error.status === 0 || error.status === 404) {
            error.error = 'Não foi possível cadastrar o curso, ocorreu um erro insesperado!';
          }

          return ErrorResponse.get(error);
        })
      );
  }
  
  atualizar(id, data) {
    return this.http.put(`${environment.enderecoApi}cursos/${id}`, data)
      .pipe(
        catchError((error) => {
          if (error.status === 0 || error.status === 404) {
            error.error = 'Não foi possível atualizar o curso, ocorreu um erro insesperado!';
          }

          return ErrorResponse.get(error);
        })
      );
  }
  
  apagar(id, data) {
    return this.http.delete(`${environment.enderecoApi}cursos/${id}`)
      .pipe(
        catchError((error) => {
          if (error.status === 0 || error.status === 404) {
            error.error = 'Curso não encontrado!';
          }

          return ErrorResponse.get(error);
        })
      );
  }
}
