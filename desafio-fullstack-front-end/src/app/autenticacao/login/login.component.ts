import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AutenticacaoService } from '../autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading: boolean;
  erros;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private autenticacaoService: AutenticacaoService
  ) {
    this.initForm();

  }

  ngOnInit() {
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  realizarLogin() {
    this.isLoading = true;
    this.erros = null;
    this.autenticacaoService.login(this.loginForm.value)
      .subscribe(
        (response) => {
          this.router.navigateByUrl('/cursos');
          this.isLoading = false;
        },
        (error) => {
          this.erros = error;
          this.isLoading = false;
        }
      );
  }
}
