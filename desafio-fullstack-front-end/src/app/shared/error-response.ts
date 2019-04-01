

import { HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { Util } from './util';


export class ErrorResponse {
    mensagem: string;
    name: string;
    target: string;

    constructor(msg) {
        this.mensagem = msg;
    }

    static map(data) {
        if (Util.isObject(data) && data.hasOwnProperty('message')) {
            return [new ErrorResponse(data['message'])];
        }
        else if (Array.isArray(data) && data.some(d => d.message)) {
            return data.map(d => new ErrorResponse(d['message']));
        }

        return [new ErrorResponse(data)];
    }

    static get(error: HttpErrorResponse) {
        let mensagens;

        if (error.error instanceof ErrorEvent || error.error instanceof ProgressEvent) {
            mensagens = [new ErrorResponse('Ocorreu um erro inesperado. Tente novamente mais tarde!')];
        }
        else {
            mensagens = ErrorResponse.map(error.error);
        }

        return throwError(mensagens);
    }
}
