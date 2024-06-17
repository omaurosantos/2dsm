import { Pessoa, insercao } from './model';

function exibir(pessoas: Pessoa[]): void {
    pessoas.forEach(pessoa => {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
    });
}

const pessoas: Pessoa[] = [ 
    { nome: "Fabricio", idade: 50 },
    { nome: "Isaac", idade: 34 },
    { nome: "Felipe", idade: 20 },
    { nome: "Fabricio", idade: 12 },
    { nome: "Mauro", idade: 19 },
    { nome: "Adalberto", idade: 67 },
    { nome: "Adalberto", idade: 19 }
];

const ordenacao = insercao(pessoas);
exibir(ordenacao);
