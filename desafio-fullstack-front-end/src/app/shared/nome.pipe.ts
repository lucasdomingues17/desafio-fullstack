import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'nome' })
export class NomePipe implements PipeTransform {
    transform(value: any[], prefixNome: string) {
        if (value) {
            const listaNomes = value.map(v => {
                if (prefixNome) {
                    return `${prefixNome} ${v['nome']}`;
                }

                return v['nome'];
            });
            let nomes = listaNomes.join(', ');

            const n = nomes.lastIndexOf(',');
            nomes = nomes.slice(0, n) + nomes.slice(n).replace(', ', ' e ');
            console.log('nome', nomes);

            return nomes || '-';
        }

        return value || '-';
    }
}