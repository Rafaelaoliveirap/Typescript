var Carro = /** @class */ (function () {
    function Carro(_modelo, _velocidadeMaxima, _velocidadeAtual) {
        if (_modelo === void 0) { _modelo = ""; }
        if (_velocidadeMaxima === void 0) { _velocidadeMaxima = 0; }
        if (_velocidadeAtual === void 0) { _velocidadeAtual = 0; }
        this.modelo = _modelo;
        this.velocidadeAtual = _velocidadeAtual;
        this.velocidadeMaxima = _velocidadeMaxima;
    }
    Carro.prototype.Acelerar = function (velocidadeMaxima) {
        console.log(this.velocidadeAtual);
        while (this.velocidadeAtual < velocidadeMaxima) {
            this.velocidadeAtual++;
            console.log(this.velocidadeAtual);
        }
    };
    Carro.prototype.Desacelerar = function (velocidadeAtual) {
        while (this.velocidadeAtual > this.velocidadeMaxima) {
            this.velocidadeAtual--;
            console.log(this.velocidadeAtual);
        }
    };
    return Carro;
}());
var Carro1 = new Carro();
Carro1.Acelerar(5);
Carro1.Desacelerar(8);
