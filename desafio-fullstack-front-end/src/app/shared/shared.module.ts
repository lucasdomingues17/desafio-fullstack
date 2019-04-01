import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from './local-storage.service';
import { AuthGuardRouterService } from './auth-guard-router.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        LocalStorageService,
        AuthGuardRouterService
    ]
})
export class SharedModule { }