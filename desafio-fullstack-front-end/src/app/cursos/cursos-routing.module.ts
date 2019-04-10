import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuardRouterService } from '../shared/auth-guard-router.service';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardRouterService],
    redirectTo: 'listar',
    pathMatch: 'full'
  },
  {
    path: '',
    canActivate: [AuthGuardRouterService],
    children: [
      {
        path: 'listar',
        component: CursosListaComponent,
		data: {
			targetCursoId: 0
		}
      },
	  {
        path: 'cadastrar',
        component: CursosFormComponent
      },
      {
        path: ':Id/detalhe',
        component: CursosFormComponent
      }
    ]
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
