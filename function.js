const form = document.querySelector('#formContatos')
const nomes = []
const numeros = []

let linhas = ''

form.addEventListener('submit', function (e) {
    e.preventDefault()

    inserirContato()
    atualizaTabela()
})

function inserirContato() {
    const nomeContato = document.querySelector('.nome-contato')
    const numeroContato = document.querySelector('.numero-contato')
    if (nomes.includes(nomeContato.value)) {
        alert(`O contato de ${nomeContato.value} já está salvo na sua lista!`)
    }
    else {
        nomes.push(nomeContato.value)
        numeros.push(numeroContato.value)

        let linha = '<tr>'
        linha += `<td class="td-nome">${nomeContato.value}</td>`
        linha += `<td>${numeroContato.value}</td>`
        linha += '</tr>'

        linhas += linha
    }

    nomeContato.value = ''
    numeroContato.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function mascara(telefone){ 
    if(telefone.value.length == 0)
        telefone.value = '(' + telefone.value;
    if(telefone.value.length == 3)
        telefone.value = telefone.value + ') ';

    if(telefone.value.length == 10)
        telefone.value = telefone.value + '-';
}