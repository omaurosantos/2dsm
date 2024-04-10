const sum:Function = (a:number,b:number) => a + b;
const dif:Function = (a:number,b:number) => a - b;

//uma função pode receber outra função como parâmetro
const operacao = (f:Function,a:number,b:number) => f(a,b);
console.log("5 + 3:", operacao(sum,5,3));
console.log("5 - 3:", operacao(dif,5,3));