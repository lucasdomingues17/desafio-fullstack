import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    private cursosService: CursosService,
	private route: ActivatedRoute
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
	//console.log('this.route.snapshot', this.route.snapshot);

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
