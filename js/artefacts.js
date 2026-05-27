const container = document.getElementById("cards-container");

import { mercado } from "./data.js";

const searchInput =
document.getElementById("search-input");

const categoryButtons =
document.querySelectorAll(".category-btn");

const tierButtons =
document.querySelectorAll(".filter-btn");


let categoriaAtual = "todos";

let tipoAtual = "artefatos";

let tierAtual = "todos";

let pesquisaAtual = "";


//  DICIONÁRIO DE IMAGENS


const imagensCategorias = {

    arco: "BOW",
    "arco longo": "LONGBOW"
};


// GERAR IMAGEM


function gerarImagem(item) {

    const base =
    "https://render.albiononline.com/v1/item/";

    // ARMAS
    if (item.tipo === "artefatos") {

        let nome =
        `T${item.tier}_${item.albionId}`;

        if (item.encantamento > 0) {

            nome +=
            `@${item.encantamento}`;
        }

        return `${base}${nome}`;
    }
}


// CRIAR CARDS

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

                    ${item.nome}

                </div>

                <div class="item-name">

                    T${item.tier}.${item.encantamento}

                </div>

            </div>
        `;

        // Mostra de qual pagina veio
        card.addEventListener("click", () => {

    window.location.href =
    `../Pages/item.html?id=${item.id}&from=armas`;

});

        container.appendChild(card);
    });
}


// APLICAR FILTROS


function aplicarFiltros() {

    let lista = [...mercado];

    lista = lista.filter(item =>
        item.tipo === "artefatos"
    );

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

            item.nome
            .toLowerCase()
            .includes(pesquisaAtual)
        );
    }

    criarCards(lista);
}


// PESQUISA


searchInput.addEventListener("input", e => {

    pesquisaAtual =
    e.target.value.toLowerCase();

    aplicarFiltros();
});


// CATEGORIAS


categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        if (button.dataset.tipo) {

            tipoAtual =
            button.dataset.tipo;

            categoriaAtual =
            "todos";

        } else {

            tipoAtual =
            "recursos";
        }

        if (button.dataset.categoria) {

            categoriaAtual =
            button.dataset.categoria;
        }

        aplicarFiltros();
    });
});


// TIERS


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

// INICIAR

aplicarFiltros();