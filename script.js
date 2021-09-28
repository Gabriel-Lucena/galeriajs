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

    //                              1 - nome do arquivo com extensão
    //                              2 - retira os três últimos caracteres
    //                              1                        2
    novoLink.href = "#" + urlImagem.replace(/^.*[\\\/]/, '').slice(0, -4)
    
    novoLink.href = "#" + urlImagem.split("/")[2].split(".")[0]
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `
    <img src="${urlImagem}" alt="">
    `
    container.appendChild(novoLink)

    console.log(urlImagem)
}

const carregarImagens = () => imagens.forEach(criarItem)

const criarItemModal = (urlImagem) => {

    const container = document.querySelector(".slide-container")
    // container.innerHTML += `
    // <a href="${urlImagem}" class="galeria-itens">
    //     <img src="${urlImagem}" alt="">
    // </a>
    // `

    const novoDiv = document.createElement("div")
    novoDiv.id = urlImagem.replace(/^.*[\\\/]/, '').slice(0, -4)
    novoDiv.classList.add("slide")
    novoDiv.innerHTML = `

    <div class="imagem-container">
        <a href="#" class="fechar">&#128473;</a>

        //        1 - arquivo anterior
        //        2 - arquivo posterior
        // 
        //        1 
        <a href="#" class="navegacao anterior">&#171;</a>
        <img src="${urlImagem}" alt="">
        //        2 
        <a href="#" class="navegacao proximo">&#187;</a>
    </div>

    `
    container.appendChild(novoDiv)

    console.log(urlImagem)
}

carregarImagens()