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
// GERAR IMAGEM
// ===============================
    
const imagensCategorias = {

    // MADEIRA
    tronco: "WOOD",
    tabua: "PLANKS",

    // PEDRA
    pedra: "ROCK",
    bloco: "STONEBLOCK",

    // MINÉRIO
    minerio: "ORE",
    barra: "METALBAR",

    // FIBRA
    fibra: "FIBER",
    tecido: "CLOTH",

    // COURO
    couro: "HIDE"
};

// ===============================
// GERAR IMAGEM
// ===============================

function gerarImagem(item) {

    const base =
    "https://db.albiononline.com.br/wp-content/themes/albiondata/db/images/itensg/";

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
        `_LEVEL${item.encantamento}@${item.encantamento}`;
    }

    // Retorna imagem
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
                    T${item.tier}.${item.encantamento}
                </div>

                <div class="item-name">
                    ${item.categoria.toUpperCase()}
                </div>

                <div class="prices">

                    <div class="price thetford">
                        ${item.valor.toLocaleString()}
                    </div>

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

    // Categoria
    if (categoriaAtual !== "todos") {

        lista = lista.filter(item =>
            item.categoria === categoriaAtual
        );
    }

    // Tier
    if (tierAtual !== "todos") {

        lista = lista.filter(item =>
            item.tier == tierAtual
        );
    }

    // Pesquisa
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