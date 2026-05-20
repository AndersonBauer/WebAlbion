const container = document.getElementById("cards-container");

import { mercado } from "./data.js";

const searchInput =
document.getElementById("search-input");

const categoryButtons =
document.querySelectorAll(".category-btn");

const tierButtons =
document.querySelectorAll(".filter-btn");

// ===============================
// FILTROS ATUAIS
// ===============================

let categoriaAtual = "todos";

let tierAtual = "todos";

let pesquisaAtual = "";

// ===============================
//  DICIONÁRIO DE IMAGENS
// ===============================

const imagensCategorias = {

    tronco: "WOOD",
    tabua: "PLANKS",

    pedra: "ROCK",
    "bloco de pedra": "STONEBLOCK",

    minerio: "ORE",
    barra: "METALBAR",

    fibra: "FIBER",
    tecido: "CLOTH",

    "couro cru": "HIDE",
    couro: "LEATHER",
};

// ===============================
// GERAR IMAGEM
// ===============================

function gerarImagem(item) {

    const base =
    "https://render.albiononline.com/v1/item/";

    // Procura categoria
    const categoria =
    imagensCategorias[item.categoria];

    // Se não existir
    if (!categoria) {
        return "";
    }

    // Nome base
    let nome =
    `T${item.tier}_${categoria}`;

    // Encantamento
    if (item.encantamento > 0) {

        nome +=
        `_LEVEL${item.encantamento}`;
    }

    // Retorna imagem
    return `${base}${nome}`;
}

// ===============================
// CRIAR CARDS
// ===============================

function criarCards(lista) {

    container.innerHTML = "";

    lista.forEach(item => {

        const card =
        document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `

            <img
                class="item-img"
                src="${gerarImagem(item)}"
            >

            <div class="item-content">

                <div class="item-title">

                    ${item.categoria.toUpperCase()}

                </div>

                <div class="item-name">

                    T${item.tier}.${item.encantamento}

                </div>

            </div>
        `;
        card.addEventListener("click", () => {

    window.location.href =
    `../Pages/item.html?id=${item.id}`;

});

        container.appendChild(card);
    });
}

// ===============================
// APLICAR FILTROS
// ===============================

function aplicarFiltros() {

    let lista = [...mercado];

    if (categoriaAtual !== "todos") {

        lista = lista.filter(item =>
            item.categoria === categoriaAtual
        );
    }

    if (tierAtual !== "todos") {

        lista = lista.filter(item =>
            item.tier == tierAtual
        );
    }

    if (pesquisaAtual !== "") {

        lista = lista.filter(item =>

            item.categoria
            .toLowerCase()
            .includes(pesquisaAtual)
        );
    }

    criarCards(lista);
}

// ===============================
// PESQUISA
// ===============================

searchInput.addEventListener("input", e => {

    pesquisaAtual =
    e.target.value.toLowerCase();

    aplicarFiltros();
});

// ===============================
// CATEGORIAS
// ===============================

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        categoriaAtual =
        button.dataset.category;

        aplicarFiltros();
    });
});

// ===============================
// TIERS
// ===============================

tierButtons.forEach(button => {

    button.addEventListener("click", () => {

        tierButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        tierAtual =
        button.dataset.tier;

        aplicarFiltros();
    });
});

// ===============================
// INICIAR
// ===============================

criarCards(mercado);