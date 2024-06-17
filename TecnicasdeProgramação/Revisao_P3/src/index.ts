import Cliente from "./Cliente";

const nasc = new Date("11 01 2010");;

const cliente = new Cliente("Clara", "clara@gmail.com", nasc, 500);

cliente.imprimir();