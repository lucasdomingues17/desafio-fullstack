import { Component, OnInit, AfterViewInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElementRef } from '@angular/core';

import { map } from 'rxjs/operators';
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
  targetCursoId;
  cursoInFocus;

  @ViewChild("templateModalConfirmacaoApagar")
  templateModalConfirmacaoApagar;
  modalConfirmacaoApagarRef: BsModalRef;

  cursoApagar;

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private elementRef: ElementRef
  ) {
    this.cursos = [];
  }

  ngOnInit() {
    this.buscarCursos();
  }

  ngAfterViewInit() {
    this.verificarCursoEmDestaque();
  }

  verificarCursoEmDestaque() {
    this.route.paramMap
      .pipe(map(() => window.history.state)).subscribe(
        (response) => {
          this.targetCursoId = response['targetCursoId'];
        }
      );
  }

  destacarCurso() {
    let el = this.elementRef.nativeElement.querySelector('#curso-' + this.targetCursoId);
    if (el) {
      el.scrollIntoView();
    }

    this.cursoInFocus = this.targetCursoId;
  }

  buscarCursos() {
    this.carregando = true;
    this.erros = null;

    this.cursosService.listar().subscribe(
      (response) => {
        this.carregando = false;
        this.cursos = response;

        let self = this;

        setTimeout(function () {
          self.destacarCurso();

        }, 1000);
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

  apagarCurso(curso) {
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

