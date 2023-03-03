// Página Dolar

let valorDigitado = document.querySelector('#valorEmReal')

let moedaSelecionada = document.getElementsByName('moedaEstrangeira')

let aviso = document.querySelector('#aviso')

// selecionar os botoes
let btnConverter = document.querySelector('#btnConverter')
let btnLimpar = document.querySelector('#btnLimpar')

let valorEmReal = 0

let moedaEstrangeira = ''
let moedaConvertida = 0.00

// Mensagem para valores
function mensagemFormatada(moedaConvertida) {
    isNaN(valorEmReal) ? valorEmReal = 0 : ''
    console.log("Moeda Convertida " + moedaConvertida)
    aviso.textContent = "O valor " + (valorEmReal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + " convertido em " + moedaEstrangeira + " é " + moedaConvertida
}

/* Verifica se algum valor foi digitado */
function bloquearBotao() {
    if (valorDigitado.value == 0 || valorDigitado == '' || valorDigitado == null) {
        btnConverter.setAttribute('disabled', 'disabled')
        btnConverter.style.background = '#ccc'
        btnConverter.style.cursor = 'not-allowed'
    }
}

// Se o valor digitado for maior que '0'
function ativarBotao() {

    if (valorDigitado.value > 0) {
        btnConverter.removeAttribute('disabled')
        btnConverter.style.background = '#06FEFF'  /* #06FEFF Codigo cor azul */
        btnConverter.style.cursor = 'pointer'
    } else {
        console.log('Nao ativou')
    }
}

fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(response => {
    return response.json()
}).then(economia => {
    console.log(economia)
    document.getElementById("dolar").value = economia.USDBRL.bid;
    document.getElementById("euro").value = economia.EURBRL.bid;
    document.getElementById("bitcoins").value = economia.BTCBRL.bid;
})

// Verifica qual moeda foi selecionada para conversão
btnConverter.addEventListener('click', function () {

    let valorDoDolar = document.getElementById("dolar").value;
    let valorDoEuro = document.getElementById("euro").value;
    let valorDoBitcoin = document.getElementById("bitcoins").value;

    // parseFloat (converter String para Float)
    valorEmReal = parseFloat(valorDigitado.value)


    console.log('Escolhe a moeda estrangeira')
    for (let i = 0; i < moedaSelecionada.length; i++) {
        if (moedaSelecionada[i].checked) {
            moedaEstrangeira = moedaSelecionada[i].value
            console.log(moedaEstrangeira)
        }
    }

    // Conversão das moedas
    // Operacao basica pegar moedaEstrangeira e multiplicar pelo valorEmReal
    switch (moedaEstrangeira) {

        case 'Dólar':
            moedaConvertida = valorEmReal / valorDoDolar
            mensagemFormatada(moedaConvertida.toLocaleString('en-US', { style: 'currency', currency: 'USD' }))
            break

        case 'Euro':
            moedaConvertida = valorEmReal / valorDoEuro
            mensagemFormatada(moedaConvertida.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }))
            break

        case 'Bitcoins':
            moedaConvertida = valorEmReal / valorDoBitcoin
            mensagemFormatada(parseFloat(moedaConvertida).toFixed(5))
            break

        default:
            aviso.textContent = 'Escolha uma moeda estrangeira'
    }
    // isNaN(moedaConvertida) ? moedaConvertida = 0 : ''
})

btnLimpar.addEventListener('click', function () {
    valorDigitado.focus()
    valorDigitado.value = ''
    aviso.textContent = 'Digite o valor, escolha a moeda e converter'
    moedaSelecionada[0].checked = false
    moedaSelecionada[1].checked = false
    moedaSelecionada[2].checked = false
})