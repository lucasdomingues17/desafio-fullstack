export class Curso {
    id: number;
    nome: string;
    professores: number[];
    salas: number[];
    horario_inicio: string;
    horario_fim: string;

    constructor() { 
		this.id = 0;
		this.nome = null;
		this.professores = [];
		this.salas = [];
		this.horario_inicio = null;
		this.horario_fim = null;
	}

    map(data) {
        Object.keys(this).forEach(prop => {
			console.log('prop', prop);
			console.log('data[prop]', data[prop]);
            if (data[prop]) {
                this[prop] = data[prop];
            }
        });
    }

    obterIdsProfessores() {
        if (this.professores) {
            return this.professores.map(p => p['id']);
        }

        return [];
    }

    obterIdsSalas() {
        if (this.salas) {
            return this.salas.map(p => p['id']);
        }

        return [];
    }
}

export interface ICurso {
    id: number;
    nome: string;
    professores: number[];
    salas: number[];
    horario_inicio: string;
    horario_fim: string;
}