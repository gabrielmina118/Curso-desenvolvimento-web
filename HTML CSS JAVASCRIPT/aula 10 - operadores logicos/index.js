// Operador Lógico: E (&&)
const a = true;
const b = false;
const c = 5;
const d = 10;

console.log(a && b); // false, porque uma das expressões é falsa
console.log(a && c < d); // true, porque ambas as expressões são verdadeiras
console.log(b && c > d); // false, porque ambas as expressões são falsas

// Operador Lógico: OU (||)
const e = true;
const f = false;
const g = 3;
const h = 8;

console.log(e || f); // true, porque uma das expressões é verdadeira
console.log(f || (g < h)); // true, porque uma das expressões é verdadeira
console.log(f || (g > h)); // false, porque ambas as expressões são falsas

// Operador Lógico: NÃO (!)
const i = true;
const j = false;

console.log(!i); // false, porque o valor lógico de i é invertido
console.log(!j); // true, porque o valor lógico de j é invertido
console.log(!(5 > 10)); // true, porque 5 não é maior que 10, então a expressão é invertida


// Exemplos Combinados
const k = true;
const l = false;
const m = 7;
const n = 2;
const o = 10;

console.log((k && l) || (m > n)); // true, porque m > n é true
console.log(!(k && (o < n))); // true, porque o < n é false, então !(true && false) é true
console.log((l || (m < n)) && !(o > n)); // false, porque o > n é true, então !(true) é false

