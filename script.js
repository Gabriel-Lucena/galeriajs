"use strict"

const imagens = [
    "./img/atila.gif",
    "./img/thisman.jpg",
    "./img/eatingchips.gif",
    "./img/unnamed.gif",
    "./img/tenjhotenge.jpg",
    "./img/tenjhotenge.jpg",
    "./img/tenjhotenge.jpg",
    "./img/tenjhotenge.jpg",
]

const criarItem = (urlImagem) => {

    const container = document.querySelector(".galeria-container")
    // container.innerHTML += `
    // <a href="${urlImagem}" class="galeria-itens">
    //     <img src="${urlImagem}" alt="">
    // </a>
    // `

    const novoLink = document.createElement("a")
    novoLink.href = urlImagem
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImagem}" alt="">`
    container.appendChild(novoLink)

    console.log(urlImagem)
}

const carregarImagens = () => imagens.forEach(criarItem)

carregarImagens()