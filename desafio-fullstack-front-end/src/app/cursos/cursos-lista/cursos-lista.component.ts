import { Component, OnInit, AfterViewInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

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
  
  apagandoCurso: boolean;
  errosApagandoCurso;

  @ViewChild("templateModalConfirmacaoApagar")
  templateModalConfirmacaoApagar;
  modalConfirmacaoApagarRef: BsModalRef;
  
  cursoApagar;

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private modalService: BsModalService
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
  
  abrirModalConfirmacaoApagar(e, curso) {	  
	this.cursoApagar = curso;
    this.modalConfirmacaoApagarRef = this.modalService.show(this.templateModalConfirmacaoApagar);		
  }

  fecharModalApagar() {
    this.modalConfirmacaoApagarRef.hide();
	this.cursoApagar = null;
  }
  
  apagarCurso(curso){
	this.apagandoCurso = true;
    this.errosApagandoCurso = null;
	
	this.cursosService.apagar(curso.id).subscribe(
      (response) => {
        this.apagandoCurso = false;
        this.fecharModalApagar();
      },
      (error) => {
        this.apagandoCurso = false;
        this.errosApagandoCurso = error;
        console.error('component', error);
      }
    );
	  
  }
}

