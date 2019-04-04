import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosService } from './cursos.service';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CursosListaComponent, CursosFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    CursosRoutingModule
  ],
  providers: [CursosService],
})
export class CursosModule { }
