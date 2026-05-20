const estoqueBaixo = 5 

let vinhoIdade, categoria, nomeVinho, tipo, safra, quantidade

let totalVinhosEstoqueBaixo = 0
let totalVinhosCadastrados = 0
let anoAtual = new Date().getFullYear()
let safraAntiga = anoAtual
let vinhoAntigo = ""

let resposta = true

function validaEntrada(entrada){
    return String(entrada).trim() == ""
}

function validaInteiro(numero) {
    numero = Number(numero)
    return Number.isInteger(numero) && numero >= 0
}

function validaAno(ano){
    return ano.length !== 4
}

function verificaAntiguidade(safra){
    if(safra < safraAntiga){
        safraAntiga = safra
        vinhoAntigo = nomeVinho
    }

    vinhoIdade = (anoAtual - safra)

    if (vinhoIdade <= 3){
        categoria = "jovem"
    }else if (vinhoIdade <= 10){
        categoria = "amadurecido"
    }else{
        categoria = "antigo"
    }

    alert(`O vinho ${nomeVinho} é considerado ${categoria}`)
}

function verificaEstoque(quantidade){
    if (quantidade <= estoqueBaixo){
        totalVinhosEstoqueBaixo++
        alert(`O vinho ${nomeVinho} está com estoque baixo!`)
    }
}

function mostrarDados(){
    console.log(`Você tem ${totalVinhosCadastrados} vinhos cadastrados \nVocê tem ${totalVinhosEstoqueBaixo} vinhos com estoque baixo! \nO seu vinho com a safra mais antiga é ${vinhoAntigo}`)
    alert("Verifique os dados dos vinhos cadastrados no console!")
}

while (resposta == true){
    nomeVinho = prompt("Digite o nome do vinho: ")

    tipo = prompt("Digite o tipo do vinho (Tinto, Branco, Rosé): ")

    do{
        safra = prompt("Digite a safra do vinho: (YYYY) ")
    }while(!validaInteiro(safra) || validaAno(safra) || validaEntrada(safra)) 
    
    safra = Number(safra)

    verificaAntiguidade(safra)

    do{
        quantidade = prompt("Digite a quantidade: ")
        if (!validaInteiro(quantidade)){
            alert("Digite um número inteiro! ")
        }
    }while(!validaInteiro(quantidade) || validaEntrada(quantidade))
    
    quantidade = Number(quantidade)

    verificaEstoque(quantidade)

    totalVinhosCadastrados++

    resposta = prompt("Deseja cadastrar mais um vinho? \nDigite \n1 - sim \n2 - não")

    if (resposta == "2"){
        resposta = false
    } 
}

mostrarDados()