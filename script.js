"use strict"

const alunos = ['Ana', 'Hugo', 'Marta']
const notas = [9, 10, 7]

alunos[3]

const alunos1 = {
    'nome': 'Ana',
    'nota': 9
}

alunos1.nota

const alunosDS = [
    {
        'nome': 'Ana',
        'nota': 9
    },

    {
        'nome': 'Hugo',
        'nota': 10
    },

    {
        'nome': 'Marta',
        'nota': 7
    }
]

alunosDS[1].nota

const aluno2 = {
    'nome': 'João',
    'notas': [9, 5, 6, 4]
}

aluno2.notas[2]

const limpar = (elemento) => {

    while (elemento.firstChild) {

        elemento.removeChild(elemento.lastChild)

    }

}

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

const pegarImagens = (raca) => fetch(`https://dog.ceo/api/breed/${raca}/images`)

const procurarImagens = async (evento) => {

    if (evento.key === 'Enter') {

        const raca = evento.target.value
        const imagensResponse = await pegarImagens(raca)
        const imagens = await imagensResponse.json()

        limpar(document.querySelector(".galeria-container"))
        limpar(document.querySelector(".slide-container"))

        carregarImagens(imagens.message)
        carregarSlides(imagens.message)

    }

}

const limparId = (urlImagem) => {

    const posBarra = urlImagem.lastIndexOf('/') + 1
    const posPonto = urlImagem.lastIndexOf('.')

    return urlImagem.substring(posBarra, posPonto)

}


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

const carregarImagens = (imagens) => imagens.forEach(criarItem)

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


const criarSlide = (urlImagem, indice, arr) => {
    const container = document.querySelector(".slide-container")
    const slide = document.createElement("div")
    slide.classList.add("slide")
    slide.id = limparId(urlImagem)

    const indiceAnterior = indice > 0 ? indice - 1 : arr.length - 1
    const idAnterior = limparId(arr[indiceAnterior])

    const indiceProximo = indice < arr.length - 1 ? indice + 1 : 0
    const idProximo = limparId(arr[indiceProximo])

    // let indiceAnterior

    // if (indice > 0){
    //     indiceAnterior = indice - 1
    // }
    // else{
    //     indiceAnterior = arr.length - 1
    // }


    slide.innerHTML = `
    <div class="imagem-container">
        <a href="#" class="fechar">&#128473;</a>
        <a href="#${idAnterior}" class="navegacao anterior">&#171;</a>
        <img src="${urlImagem}" alt="">
        <a href="#${idProximo}" class="navegacao proximo">&#187;</a>
    </div>
`
    container.appendChild(slide)
}

const carregarSlides = (imagens) => imagens.forEach(criarSlide)

document.querySelector(".pesquisa-container input")
    .addEventListener('keypress', procurarImagens)

// carregarImagens()
// carregarSlides()