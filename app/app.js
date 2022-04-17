const inputNovaTarefa = document.querySelector('input')
inputNovaTarefa.setAttribute("id", "input-nova-tarefa")

const tarefas = []

function addTarefa() {
    tarefas.push(inputNovaTarefa.value)
    inputNovaTarefa.value = ""
    mostrarTarefas()
}

document.getElementById('button-nova-tarefa').addEventListener('click', addTarefa)

if(document.getElementsByTagName('li') != null) {
    var todosLi = document.getElementsByTagName('li')
}

function mostrarTarefas() {
    limparTarefas()
    
    for (let i = 0; i < tarefas.length; i++) {        
        let novoElemento = document.createElement('li')
        novoElemento.innerHTML = tarefas[i] + "<img class='btnDelete' src='imagens/lixeira-icone.png'>"
        document.getElementsByTagName('ul')[0].appendChild(novoElemento)
        todosLi[i].addEventListener('dblclick', concluirTarefa)

        if(document.getElementsByClassName('btnDelete') != null) {
            var todosBtnDelete = document.getElementsByClassName('btnDelete')
        }
        todosBtnDelete[i].addEventListener('click', deletarTarefa)
    }
}

function limparTarefas() {
    let ulList = document.getElementById('lista-ul')
    while (ulList.firstChild) {
        ulList.removeChild(ulList.firstChild)
    }
}

function concluirTarefa() {
    if (this.classList.contains('concluida')) {
        this.setAttribute("class", "aberta")
    } else if (this.classList.contains('aberta')) {
        this.setAttribute("class", "concluida")
    } else {
        this.setAttribute("class", "concluida")
    }
}

function deletarTarefa() {
    if(this.parentNode != null) {
        var tarefaDeletada = this.parentNode.innerText
        for (let i = 0; i < tarefas.length; i++) {
            if (tarefas[i] == tarefaDeletada) {
                tarefas.splice(i, 1)
            }
        }
        mostrarTarefas()
    }
}