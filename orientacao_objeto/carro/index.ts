class Carro {

    modelo: string
    velocidadeAtual: number
    velocidadeMaxima: number

    constructor(_modelo: string = "", _velocidadeMaxima: number =0, _velocidadeAtual: number = 0) {
        this.modelo = _modelo
        this.velocidadeAtual = _velocidadeAtual
        this.velocidadeMaxima = _velocidadeMaxima
    }

    Acelerar(velocidadeMaxima: number) {
        console.log(this.velocidadeAtual)
        while (this.velocidadeAtual < velocidadeMaxima) {
            this.velocidadeAtual++
            console.log(this.velocidadeAtual)
        }
    }
    Desacelerar(velocidadeAtual: number) {
        while (this.velocidadeAtual > this.velocidadeMaxima) {
            this.velocidadeAtual--
            console.log(this.velocidadeAtual)
        }
    }
}

let Carro1 = new Carro()
Carro1.Acelerar(5)

Carro1.Desacelerar(8)

