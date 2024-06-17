import Militar from "./Militar";

class Soldado extends Militar {
  cim: number;
  soldo: number;

  constructor(nome: string, idade: number, altura: number, email: string, cim: number, soldo: number) {
    super(nome, idade, altura, email);
    this.cim = cim;
    this.soldo = soldo;

    if (!this.validaEmail()) {
      console.log('Email inválido');
    }

    if (!this.requisitos()) {
        console.log('Não está apto!');
    }
  }

  validaEmail(): boolean {
    const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailMilitar = /@(?:eb|marinha|fab)\.mil\.br$/;
    return email.test(this.email) && emailMilitar.test(this.email);
  }

  requisitos(): boolean {
    return this.idade >= 18 && this.idade <= 32 && this.altura >= 1.6;
  }
}

export default Soldado;
