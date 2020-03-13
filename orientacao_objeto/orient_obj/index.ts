// inicio da definição da classe 
class Cumprimento {
    // atributos
    // nome do atributo: tipo
    nome: string;
    idade: string

    // criando o metodo construtor

    constructor(_nome: string, _idade: string) {
        this.nome = _nome
        this.idade = _idade
    }
    mostrarNomeIdade(nome:string, idade:string) {
         return `A pessoa ${nome} tem ${idade} anos`
    }
}
// fim da definição da classe

// invocando a função e armazenando em uma variável chamada resposta
let pessoa1 = new Cumprimento("","")
console.log(pessoa1.mostrarNomeIdade("Luzia", "56"))

