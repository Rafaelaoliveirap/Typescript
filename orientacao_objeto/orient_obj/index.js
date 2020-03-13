// inicio da definição da classe 
var Cumprimento = /** @class */ (function () {
    // criando o metodo construtor
    function Cumprimento(_nome, _idade) {
        this.nome = _nome;
        this.idade = _idade;
    }
    Cumprimento.prototype.mostrarNomeIdade = function (nome, idade) {
        return "A pessoa " + nome + " tem " + idade + " anos";
    };
    return Cumprimento;
}());
// fim da definição da classe
// invocando a função e armazenando em uma variável chamada resposta
var pessoa1 = new Cumprimento("", "");
console.log(pessoa1.mostrarNomeIdade("Luzia", "56"));
