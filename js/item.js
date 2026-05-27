import { mercado }
from "./data.js";



// URL


const params =
new URLSearchParams(window.location.search);

const itemId =
params.get("id");

const from =
params.get("from");



// ITEM


const item =
mercado.find(item =>
    item.id === itemId
);

const backLink =
document.getElementById("back-link");

if (from === "armas") {

    backLink.href =
    "weapons.html";

} else if (from === "artefacts") {

    backLink.href =
    "artefacts.html"

}else {

    backLink.href =
    "resources.html";
}


// IMAGENS


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

    "runas": "RUNE"

};



// GERAR IMAGEM


function gerarImagem(item) {

    const base =
    "https://render.albiononline.com/v1/item/";

    
    // ARMAS
    

    if (item.tipo === "armas" || item.tipo === "artefatos") {

        let nome =
        `T${item.tier}_${item.albionId}`;

        if (item.encantamento > 0) {

            nome +=
            `@${item.encantamento}`;
        }

        return `${base}${nome}`;
    }

    
    // RECURSOS
    

    const categoria =
    imagensCategorias[item.categoria];

    if (!categoria) {
        return "";
    }

    let nome =
    `T${item.tier}_${categoria}`;

    if (item.encantamento > 0) {

        nome +=
        `_LEVEL${item.encantamento}`;
    }

    return `${base}${nome}`;
}



// RENDER ITEM


document.getElementById("item-imagem").src =
gerarImagem(item);

document.getElementById("item-nome").innerText =
item.nome.toUpperCase();

document.getElementById("item-tier").innerText =
`Tier ${item.tier}.${item.encantamento}`;



// PREÇOS


const precosDiv =
document.getElementById("item-precos");


// RECALCULAR


function atualizarCalculos() {

    document.querySelectorAll(".city-card")
    .forEach(card => {

        let custoTotal = 0;

        const itemValor =
        Number(
            card.querySelector(".item-price").value
        );

        card.querySelectorAll(".material-price")
        .forEach(input => {

            const preco =
            Number(input.value);

            const qtd =
            Number(input.dataset.qtd);

            custoTotal += preco * qtd;
        });

        const lucro =
        itemValor - custoTotal;

        card.querySelector(".custo-total").innerText =
        custoTotal.toLocaleString();

        card.querySelector(".lucro-total").innerText =
        lucro.toLocaleString();

        const lucroBox =
        card.querySelector(".craft-profit");

        if (lucro > 0) {

            lucroBox.classList.add("lucro");
            lucroBox.classList.remove("prejuizo");

            lucroBox.childNodes[0].textContent =
            "Lucro";

        } else {

            lucroBox.classList.add("prejuizo");
            lucroBox.classList.remove("lucro");

            lucroBox.childNodes[0].textContent =
            "Prejuízo";
        }
    });
}


// ========================
// EVENTOS INPUT
// ========================

document.addEventListener("input", e => {

    if (
        e.target.classList.contains("material-price")
        ||
        e.target.classList.contains("item-price")
    ) {

        atualizarCalculos();
    }
});


Object.entries(item.precos)
.forEach(([cidade, valor]) => {

    let craftHTML = "";

    let custoTotal = 0;

    if (item.craft) {

        item.craft.forEach(material => {

            const materialData =
            mercado.find(i => i.id === material.id);

            if (!materialData) return;

            const precoMaterial =
            materialData.precos[cidade] || 0;

            const totalMaterial =
            precoMaterial * material.quantidade;

            custoTotal += totalMaterial;

            craftHTML += `

    <div class="craft-material">

        <div class="craft-material-left">

            <img
                src="${gerarImagem(materialData)}"
                class="craft-img"
            >

            <div class="craft-info">

                <span class="craft-name">
                    ${materialData.categoria.toUpperCase()}
                </span>

                <span class="craft-tier">
                    T${materialData.tier}.${materialData.encantamento}
                </span>

            </div>

        </div>

        <div class="craft-material-right">

            <span class="craft-qtd">
                ${material.quantidade}x
            </span>

            <input
                type="number"
                class="material-price"
                value="${precoMaterial}"
                data-qtd="${material.quantidade}"
            >

        </div>

    </div>

`;
        });
    }

    const lucro =
    valor - custoTotal;

    const valeAPena =
    lucro > 0;

    precosDiv.innerHTML += `

        <div class="city-card" data-city="${cidade}">

            <div class="city-left">

                <div class="price ${cidade.toLowerCase()}">

                    <span>${cidade}</span>

                    <input
                        type="number"
                        class="price-input item-price"
                        value="${valor}"
                    >

                </div>

            </div>

            <div class="city-right">

                <div class="craft-box">

                    ${craftHTML}

                    <div class="craft-total">

                        <div class="craft-cost">
                            <span>Custo Total</span>

                            <strong class="custo-total">
                                ${custoTotal.toLocaleString()}
                            </strong>
                        </div>

                        <div class="
                            craft-profit
                            ${valeAPena ? "lucro" : "prejuizo"}
                        ">

                            ${valeAPena ? "Lucro" : "Prejuízo"}

                            <strong class="lucro-total">
                                ${lucro.toLocaleString()}
                            </strong>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    `;
});