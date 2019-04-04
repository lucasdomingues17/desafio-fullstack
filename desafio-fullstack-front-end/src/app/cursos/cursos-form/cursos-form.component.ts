import { Curso } from './../curso';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../cursos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {
  mensagemDeStatus;
  mensagensDeErro;
  cursoForm: FormGroup;
  curso: Curso;
  opcoesProfessores;
  opcoesSalas;

  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService,
    private formBuilder: FormBuilder
  ) {
    this.curso = new Curso;
  }

  ngOnInit() {
    this.curso = new Curso;
    this.inicializarFormulario();
  }

  carregarOpcoes() {
    return forkJoin(
      this.cursosService.obterOpcoesDeProfessores(),
      this.cursosService.obterOpcoesDeSalas()
    );
  }

  inicializarFormulario() {
    this.mensagemDeStatus = "Carregando...";
    this.carregarOpcoes().subscribe(
      ([responseProfessores, responseSalas]) => {        
        this.opcoesProfessores = responseProfessores;
        this.opcoesSalas = responseSalas;

        this.cursoForm = this.formBuilder.group({
          nome: [null, [Validators.required]],
          professores: [null, [Validators.required]],
          salas: [null, [Validators.required]],
          horario_inicio: [null, [Validators.required]],
          horario_fim: [null, [Validators.required]],
        });

        this.buscarCurso(this.route.snapshot.params.Id);
      },
      (error) => {
        console.error('error', error);
        this.mensagensDeErro = error;
        this.mensagemDeStatus = null;
      }
    );
  }

  buscarCurso(id) {
    if (id) {
      this.mensagemDeStatus = "Carregando informações sobre o curso...";
      this.cursosService.detalhe(id).subscribe(
        (response: Curso) => {          
          this.curso.map(response);          
          this.atualizarForm();
          this.mensagemDeStatus = null;
        },
        (error) => {
          console.error('error component', error);
          this.mensagensDeErro = error;          
          this.mensagemDeStatus = null;
        }
      );
    }
    else {
      this.mensagemDeStatus = null;
    }
  }

  atualizarForm() {    
    this.cursoForm.patchValue({
      id: this.curso.id,
      nome: this.curso.nome,
      professores: this.curso.obterIdsProfessores(),
      salas: this.curso.obterIdsSalas(),
      horario_inicio: this.curso.horario_inicio,
      horario_fim: this.curso.horario_fim
    });
  }

  salvar() {
	let dadosASeremEnviados = Object.assign({}, this.cursoForm.value);
	
	console.log('dadosASeremEnviados', dadosASeremEnviados);
	
	if(this.curso.id <= 0){
		this.cadastrar(dadosASeremEnviados);
	}else{
		this.atualizar(dadosASeremEnviados);
	}
  }
  
  cadastrar(dadosASeremEnviados){
	  this.mensagemDeStatus = "Enviando dados...";
	  
	  this.cursosService.cadastrar(dadosASeremEnviados).subscribe(
		(response) => {
			console.log('cadastrar response', response);
			
			this.mensagemDeStatus = null;
		},
		(error) => {
			console.error('cadastrar error', error);
			this.mensagensDeErro = error;      
			this.mensagemDeStatus = null;
			
		}			
	  );
	  
  }
  
  atualizar(dadosASeremEnviados){
	  this.mensagemDeStatus = "Enviando dados...";
	  
	  this.cursosService.atualizar(this.curso.id, dadosASeremEnviados).subscribe(
		(response) => {
			console.log('atualizar response', response);
			
			this.mensagemDeStatus = null;
		},
		(error) => {
			console.error('atualizar error', error);
			this.mensagensDeErro = error;      
			this.mensagemDeStatus = null;
		}			
	  );
  }
	  
}
