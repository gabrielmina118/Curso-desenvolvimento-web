document.getElementById("productForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const productName = document.getElementById("productName").value;
    const productImage = document.getElementById("productImage").value;
    const productDescription =
        document.getElementById("productDescription").value;
    const productPrice = document.getElementById("productPrice").value;

    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
        <img src="${productImage}" alt="${productName}">
        <div class="card-content">
            <h2>${productName}</h2>
            <p>${productDescription}</p>
            <p class="price">R$ ${productPrice}</p>
        </div>
    `;

    document.getElementById("productCards").appendChild(card);

    // Clear the form
    document.getElementById("productForm").reset();
});
