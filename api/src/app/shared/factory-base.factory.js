class FactoryBase {
    constructor() {
        this.propriedadesCadastraveis = ['nome'];
        this.propriedadesAtualizaveis = ['nome'];
    }

    atualizarPropriedadesCadastraveis(propriedadesCadastraveis) {
        this.propriedadesCadastraveis = propriedadesCadastraveis;
    }

    atualizarPropriedadesAtualizaveis(propriedadesAtualizaveis) {
        this.propriedadesCadastraveis = propriedadesAtualizaveis;
    }

    obterDadosParaCriacao(objetoViewModel) {
        let dadosParaCriacao = {};

        Object.keys(objetoViewModel).forEach(p => {
            if (this.propriedadesCadastraveis.some(pa => pa === p)) {
                dadosParaCriacao[p] = objetoViewModel[p];
            }
        });

        if (!Object.keys(dadosParaCriacao).length > 0) {
            dadosParaCriacao = null;
        }

        return dadosParaCriacao;
    }

    obterDadosParaAtualizacao(usuario, objetoViewModel) {
        let dadosParaAtualizacao = {};

        Object.keys(objetoViewModel).forEach(p => {
            if (this.propriedadesAtualizaveis.some(pa => pa === p) && usuario[p] && usuario[p] !== objetoViewModel[p]) {
                dadosParaAtualizacao[p] = objetoViewModel[p];
                usuario[p] = objetoViewModel[p];
            }
        });

        if (!Object.keys(dadosParaAtualizacao).length > 0) {
            dadosParaAtualizacao = null;
        }

        return dadosParaAtualizacao;
    }
}

module.exports = FactoryBase;