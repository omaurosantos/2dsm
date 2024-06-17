import Militar from "./Militar";

class Oficial extends Militar {
  cim: number;
  soldo: number;
  patente: number;

  constructor(nome: string, idade: number, altura: number, email: string, cim: number, soldo: number, patente: number) {
    super(nome, idade, altura, email);
    this.cim = cim;
    this.soldo = soldo;
    this.patente = patente;

    if (!this.validaEmail()) {
      console.log('Email inválido');
    }
  }

  validaEmail(): boolean {
    const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailMilitar = /@(?:eb|marinha|fab)\.mil\.br$/;
    return email.test(this.email) && emailMilitar.test(this.email);
  }

  getPatente(): string {
    if (this.cim >= 10) {
      return "marechal";
    } else if (this.cim = 9) {
      return "general";
    } else if (this.cim = 8) {
      return "coronel";
    } else if (this.cim = 7) {
      return "tenente-coronel";
    } else if (this.cim = 6) {
      return "major";
    } else if (this.cim = 5) {
      return "capitão";
    } else if (this.cim = 4) {
      return "tenente";
    } else if (this.cim = 3) {
      return "sargento";
    } else if (this.cim = 2) {
      return "cabo";
    } else if (this.cim = 1) {
      return "soldado";
    } else {
      return "Patente não encontrada";
    }
  }
}

export default Oficial;