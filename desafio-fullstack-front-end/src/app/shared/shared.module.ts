import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal';

import { LocalStorageService } from './local-storage.service';
import { AuthGuardRouterService } from './auth-guard-router.service';
import { NomePipe } from './nome.pipe';


@NgModule({
    imports: [
        CommonModule,
        ModalModule.forRoot()
    ],
    declarations: [
        NomePipe
    ],
    providers: [
        LocalStorageService,
        AuthGuardRouterService
    ],
    exports: [
        NomePipe,
        ModalModule
    ]
})
export class SharedModule { }