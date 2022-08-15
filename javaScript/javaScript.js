const butao = document.querySelector("footer button")
const terminar = document.querySelector(".terminar")
const finalizar = document.querySelector(".finalizarPedido")
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
}



