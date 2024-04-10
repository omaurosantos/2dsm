class Fatorial {
    private cache: Record<number, number> = {};

    fatorialRecursivo(n: number): number {
        if (n in this.cache) {
            return this.cache[n];
        } else if (n === 0 || n === 1) {
            return 1;
        } else {
            const resultado = n * this.fatorialRecursivo(n - 1);
            this.cache[n] = resultado;
            return resultado;
        }
    }
}
export default Fatorial;
