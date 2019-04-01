import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'cursos'
  },
  {
    path: 'autenticacao',
    loadChildren: './autenticacao/autenticacao.module#AutenticacaoModule'
  },
  {
    path: 'cursos',
    loadChildren: './cursos/cursos.module#CursosModule'
  },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],,
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
