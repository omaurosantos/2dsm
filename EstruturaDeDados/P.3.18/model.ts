export interface Pessoa {
    nome: string;
    idade: number;
}

export function insercao(pessoas: Pessoa[]): Pessoa[] {
    for (let i = 0; i < pessoas.length; i++) {
        // armazena temporariamente
        let elemento = pessoas[i];
        // deixa posicao na mesma pos. inicial
        let pos = i;

        while (pos > 0 && (
            // compara nome atual com nome anterior
            pessoas[pos - 1].nome > elemento.nome || 
            // se nome for igual, compara as idades
            (pessoas[pos - 1].nome === elemento.nome && pessoas[pos - 1].idade > elemento.idade)
        )) {

            pessoas[pos] = pessoas[pos - 1];
            // define a posicao para poder seguir com os outros
            pos--;
        }
        // insere
        pessoas[pos] = elemento;
    }
    return pessoas;
}
