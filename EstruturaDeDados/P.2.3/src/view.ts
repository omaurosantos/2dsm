import Fatorial from "./model";

function medirTempo(callback: () => void): number {
    const inicio = process.hrtime();
    callback();
    const fim = process.hrtime(inicio);
    return fim[0] * 1000 + fim[1] / 1e6;
}

const n = 1000; //numero qualquer

const tempoSemCache = medirTempo(() => {
    const calculadoraFatorialSemCache = new Fatorial();
    calculadoraFatorialSemCache.fatorialRecursivo(n);
});
console.log(`Tempo sem cache: ${tempoSemCache.toFixed(2)} ms`);

const tempoComCache = medirTempo(() => {
    const calculadoraFatorialComCache = new Fatorial();
    calculadoraFatorialComCache.fatorialRecursivo(n);
});
console.log(`Tempo com cache: ${tempoComCache.toFixed(2)} ms`);

