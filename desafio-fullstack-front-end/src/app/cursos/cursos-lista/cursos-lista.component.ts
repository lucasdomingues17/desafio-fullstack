import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit, AfterViewInit {
  carregando: boolean;
  cursos;
  erros;

  constructor(
    private cursosService: CursosService
  ) {
    this.cursos = [];
  }

  ngOnInit() {
    this.buscarCursos();
  }

  ngAfterViewInit() {

  }

  buscarCursos() {
    this.carregando = true;
    this.erros = null;

    this.cursosService.listar().subscribe(
      (response) => {
        this.carregando = false;
        this.cursos = response;
      },
      (error) => {
        this.carregando = false;
        this.erros = error;
        console.error('component', error);
      }
    );
  }
}
