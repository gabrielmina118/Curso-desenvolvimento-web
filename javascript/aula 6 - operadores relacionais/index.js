// Maior
const a = 10;
const b = 5;

console.log(a > b); // true, porque 10 é maior que 5
console.log(b > a); // false, porque 5 não é maior que 10

// Maior ou Igual
const c = 8;
const d = 8;

console.log(c >= d); // true, porque 8 é igual a 8
console.log(d >= c); // true, porque 8 é igual a 8
console.log(a >= b); // true, porque 10 é maior que 5
console.log(b >= a); // false, porque 5 não é maior que ou igual a 10

// Menor
const e = 3;
const f = 7;

console.log(e < f); // true, porque 3 é menor que 7
console.log(f < e); // false, porque 7 não é menor que 3

// Menor ou Igual
const g = 12;
const h = 12;

console.log(g <= h); // true, porque 12 é igual a 12
console.log(h <= g); // true, porque 12 é igual a 12
console.log(e <= f); // true, porque 3 é menor que 7
console.log(f <= e); // false, porque 7 não é menor que ou igual a 3

// Igual
const i = 20;
const j = 20;
const k = "20";

console.log(i == j); // true, porque 20 é igual a 20
console.log(i == k); // true, porque '20' é convertido para número e 20 é igual a 20
console.log(i === k); // false, porque '20' é string e 20 é número

// Diferente
const l = 15;
const m = 10;
const n = "15";

console.log(l != m); // true, porque 15 não é igual a 10
console.log(l != n); // false, porque '15' é convertido para número e 15 é igual a 15
console.log(l !== n); // true, porque '15' é string e 15 é número
