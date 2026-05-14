const container = document.getElementById("cards-container");

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
    "https://db.albiononline.com.br/wp-content/themes/albiondata/db/images/itensg/";

    const categoria =
    imagensCategorias[item.categoria];

    if (!categoria) {
        return "";
    }

    let nome =
    `T${item.tier}_${categoria}`;

    if (item.encantamento > 0) {

        nome +=
        `_LEVEL${item.encantamento}@${item.encantamento}`;
    }

    return `${base}${nome}.png`;
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

                <div class="prices">

                    ${Object.entries(item.precos || {}).map(([cidade, valor]) => `
                        <div class="price ${cidade.toLowerCase()}">
                            ${valor.toLocaleString()}
                        </div>
                    `).join("")}

                </div>

            </div>
        `;

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