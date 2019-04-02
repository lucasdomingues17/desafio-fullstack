import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from './local-storage.service';
import { AuthGuardRouterService } from './auth-guard-router.service';
import { NomePipe } from './nome.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        NomePipe
    ],
    providers: [
        LocalStorageService,
        AuthGuardRouterService
    ],
    exports: [
        NomePipe
    ]
})
export class SharedModule { }