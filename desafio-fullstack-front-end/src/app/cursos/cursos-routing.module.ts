import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuardRouterService } from '../shared/auth-guard-router.service';

const routes: Routes = [
  {
    path: '',
    component: CursosListaComponent,
    canActivate: [AuthGuardRouterService]
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
