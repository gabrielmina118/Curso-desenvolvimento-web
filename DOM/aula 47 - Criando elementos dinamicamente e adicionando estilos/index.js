function renderizaProduto() {
    const produtoMain = document.getElementById("produtos");
    produtoMain.innerHTML = "";

    const novoElemento = document.createElement("div");
    novoElemento.classList.add("card");
    novoElemento.innerHTML = `
        <img src="./product1.png"/>
        <div class="card-body">
            <h6 class="card-title">Produto 1</h6>
            <p class="card-text">Descricao do produto</p>
        </div>
    `;
    produtoMain.appendChild(novoElemento);
}

renderizaProduto();
