// Somando tudo: Entre pela janela e no documento da página HTML, pegue todos os elementos pelo nome da tag HTML
window.document.getElementsTagName("h1");

// ---------------------------------------------------------------------------------------------------------------------------
const botao = document.getElementById("botao-salvar");

botao.addEventListener("click", function () {
    alert("botao ativado");
});

// ---------------------------------------------------------------------------------------------------------------------------
const container = document.getElementById("main-container");

// Limpa todos os filhos e textos, igualando o innerHTML a ""
container.innerHTML = "" 

// Adiciona uma div como filha, com o texto Oi
container.innerHTML += "<div> Oi </div>"

// Adiciona uma div como filha, com uma class
container.innerHTML += "<div class='post'> Oi </div>"

// ---------------------------------------------------------------------------------------------------------------------------
const valorDoInput = document.getElementById("nome");
console.log(valorDoInput.value);

// ---------------------------------------------------------------------------------------------------------------------------
// No documento da página HTML, solicite o primeiro elemento html através do seletor CSS.
const botoes = document.querySelector(".red-button");
