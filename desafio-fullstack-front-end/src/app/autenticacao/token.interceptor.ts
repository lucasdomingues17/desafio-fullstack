import { AutenticacaoService } from './autenticacao.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { throwError, BehaviorSubject, Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

    constructor(
        private autenticacaoService: AutenticacaoService
    ) {

    }


    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        request = this.addToken(request, this.autenticacaoService.token);

        return next.handle(request).pipe(
            catchError((error) => {
                if (
                    error instanceof HttpErrorResponse &&
                    error.status === 401
                ) {
                    return this.handle401Error(request, next, error);
                } else {
                    return throwError(error);
                }
            })
        );

    }

    addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
        if (
            token &&
            request.url.indexOf('autenticacao/login') === -1
        ) {
            request = request.clone({
                setHeaders: { Authorization: 'Bearer ' + token }
            });
        }
        return request;
    }

    handle401Error(
        req: HttpRequest<any>,
        next: HttpHandler,
        error: HttpErrorResponse
    ) {
        if (error.url.indexOf('autenticacao/login') === -1) {

            // return this.tokenSubject
            //     .filter(token => token != null)
            //     .take(1)
            //     .switchMap(token => {
            //         return next.handle(this.addToken(req, this.autenticacaoService.token));
            //     });

        }

        return throwError(error);
    }
}