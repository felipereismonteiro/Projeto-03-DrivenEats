const butao = document.querySelector("footer button")
const terminar = document.querySelector(".terminar")
const finalizar = document.querySelector(".finalizarPedido")

const pedido1 = document.querySelector('.pedido1')
const pedido2 = document.querySelector('.pedido2')
const pedido3 = document.querySelector('.pedido3')

const preco1 = document.querySelector('.preco1')
const preco2 = document.querySelector('.preco2')
const preco3 = document.querySelector('.preco3')

const total = document.querySelector('.total')

let contador1 = 0
let contador2 = 0
let contador3 = 0

function selecionarComida(selected) {
    const border = document.querySelector(".selected")

    selected.classList.toggle("selected")

    if(border !== null) {
        border.classList.remove("selected")
    }

    active = selected.classList.contains("selected")
    if (active === true) {
        contador1 += 1
        if (contador1 > 1) {
            contador1 -= 1
        }
    } else {
        contador1 = 0
    }
    botao()
}

function selecionarComida2(selected2) {
    const border = document.querySelector(".selected2")

    selected2.classList.toggle("selected2")

    if(border !== null) {
        border.classList.remove("selected2")
    }

    active = selected2.classList.contains("selected2")
    if (active === true) {
        contador2 += 1
        if (contador2 > 1) {
            contador2 -= 1
        }
    } else {
        contador2 = 0
    }
    botao()
}

function selecionarComida3(selected3) {
    const border = document.querySelector(".selected3")

    selected3.classList.toggle("selected3")

    if(border !== null) {
        border.classList.remove("selected3")
    }

    active = selected3.classList.contains("selected3")
    if (active === true) {
        contador3 += 1
        if (contador3 > 1) {
            contador3 -= 1
        }
    } else {
        contador3 = 0
    }
    botao()
}

function botao() {
    const soma = contador1 + contador2 + contador3
    if (soma === 3) {
        butao.style.backgroundColor = "green"
        butao.innerHTML = "<h1>Finalizar pedido!</h1>"
        butao.disabled = false
    } else {
        butao.style.backgroundColor = "#CBCBCB"
        butao.innerHTML = "<h1>Selecione os 3 itens<br>para fechar o pedido</h1>"
        butao.disabled = true
    }
}

function finalizarPedido() {
    terminar.style.display = 'initial'
    finalizar.style.display = 'initial'

    const firstProduct = document.querySelector(".selected .nomeDoProduto").innerHTML
    const secondProduct = document.querySelector(".selected2 .nomeDoProduto").innerHTML
    const thirdProduct = document.querySelector(".selected3 .nomeDoProduto").innerHTML

    const firstPrice = parseFloat(document.querySelector(".selected .precoDoProduto").innerHTML).toFixed(2)
    const secondPrice = parseFloat(document.querySelector(".selected2 .precoDoProduto").innerHTML).toFixed(2)
    const thirdPrice = parseFloat(document.querySelector(".selected3 .precoDoProduto").innerHTML).toFixed(2)

    pedido1.innerHTML = firstProduct
    pedido2.innerHTML = secondProduct
    pedido3.innerHTML = thirdProduct

    preco1.innerHTML = firstPrice
    preco2.innerHTML = secondPrice
    preco3.innerHTML = thirdPrice

    const soma = Number(firstPrice) + Number(secondPrice) + Number(thirdPrice)

    total.innerHTML = "R$ " + soma.toFixed(2)
    
}

function pedir() {
    let nome = prompt("Digite seu nome")
    let endereco = prompt("Digite seu endereco")

    const firstProduct = document.querySelector(".selected .nomeDoProduto").innerHTML
    const secondProduct = document.querySelector(".selected2 .nomeDoProduto").innerHTML
    const thirdProduct = document.querySelector(".selected3 .nomeDoProduto").innerHTML

    const firstPrice = parseFloat(document.querySelector(".selected .precoDoProduto").innerHTML).toFixed(2)
    const secondPrice = parseFloat(document.querySelector(".selected2 .precoDoProduto").innerHTML).toFixed(2)
    const thirdPrice = parseFloat(document.querySelector(".selected3 .precoDoProduto").innerHTML).toFixed(2)

    const soma = Number(firstPrice) + Number(secondPrice) + Number(thirdPrice)

    const mensagem = `Olá, gostaria de fazer o pedido:
    - Prato: ${firstProduct}
    - Bebida: ${secondProduct}
    - Sobremesa: ${thirdProduct}
    Total: R$ ${soma.toFixed(2)}
    
    Nome: ${nome}
    Endereço: ${endereco}`
    window.open('https://wa.me/5511957623832?text=' + encodeURIComponent(mensagem))
}

function cancelarPedido() {
    terminar.style.display = 'none'
    finalizar.style.display = 'none'
}



