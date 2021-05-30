function valorAleatorio() {
    min = Math.ceil(1);
    max = Math.floor(13);
    let aleatorio = Math.floor(Math.random() * (max - min)) + min;
    return aleatorio;
}

function reiniciar() {
    document.location.reload(true);
}

function jogador1() {
    let cartas1 = document.getElementById("cartas1");
    let valor = valorAleatorio()
    let pontuacao = document.querySelector('.pontuacaoJogador1')
    $(cartas1).attr("src", '/images/' + valor + '.png');
    let soma = parseInt(pontuacao.textContent) + valor
    pontuacao.textContent = soma
    verificarPontuacao(soma, "1")

}

function jogador2() {

    let cartas1 = document.getElementById("cartas2");
    let valor = valorAleatorio()
    let pontuacao = document.querySelector('.pontuacaoJogador2')
    $(cartas1).attr("src", '/images/' + valor + '.png');
    let soma = parseInt(pontuacao.textContent) + valor
    pontuacao.textContent = soma
    verificarPontuacao(soma, "2")
    if (soma >= 21) {
        verificarGanhador()
    }

}

function verificarPontuacao(valor, jogador) {
    const jogador1 = document.querySelector('.pontuacaoJogador1')
    const jogador2 = document.querySelector('.pontuacaoJogador2')
    if (valor >= 21) {
        document.getElementById(`btn_parar_${jogador}`).click()
        document.querySelector(`.pontuacaoJogador${jogador}`).style.color = "red"

    } else if (valor === 21) {
        document.getElementById(`btn_parar_${jogador}`).click()
        document.querySelector(`.pontuacaoJogador${jogador}`).style.color = "green"
    }
}

function verificarGanhador() {
    const jogador1 = parseInt(document.querySelector('.pontuacaoJogador1').textContent)
    const jogador2 = parseInt(document.querySelector('.pontuacaoJogador2').textContent)
    if (jogador1 > jogador2 && jogador1 <= 21) {
        document.querySelector(`.pontuacaoJogador1`).style.color = "green"
        alert("Jogador 1 GANHOU!")
    } else
    if (jogador2 > jogador1 && jogador2 <= 21) {
        document.querySelector(`.pontuacaoJogador2`).style.color = "green"
        alert("Jogador 2 GANHOU!")
    } else
    if (jogador1 <= 21 && jogador2 <= 21) {
        document.querySelector(`.pontuacaoJogador1`).style.color = "red"
        document.querySelector(`.pontuacaoJogador2`).style.color = "red"
        alert("EMPATOU")
    } else
    if (jogador1 > 21 && jogador2 <= 21) {
        document.querySelector(`.pontuacaoJogador2`).style.color = "green"
        alert("Jogador 2 GANHOU!")
    } else
    if (jogador2 > 21 && jogador1 <= 21) {
        document.querySelector(`.pontuacaoJogador1`).style.color = "green"
        alert("Jogador 1 GANHOU!")
    } else if (jogador1 > 21 && jogador2 > 21) {
        alert("SEM VENCEDOR!!")
    }

}

function parar1() {

    let btn_jogador1 = document.getElementById("btn_jogador_1");
    let btn_jogador2 = document.getElementById("btn_jogador_2");
    let btn_parar1 = document.getElementById("btn_parar_1");
    let btn_parar2 = document.getElementById("btn_parar_2");

    $(btn_jogador1).attr('disabled', 'disabled');
    $(btn_parar1).attr('disabled', 'disabled');

    $(btn_jogador2).removeAttr('disabled');
    $(btn_parar2).removeAttr('disabled');


}

function parar2() {

    let btn_jogador1 = document.getElementById("btn_jogador_1");
    let btn_jogador2 = document.getElementById("btn_jogador_2");
    let btn_parar1 = document.getElementById("btn_parar_1");
    let btn_parar2 = document.getElementById("btn_parar_2");

    $(btn_jogador2).attr('disabled', 'disabled');
    $(btn_parar2).attr('disabled', 'disabled');
    verificarGanhador()
    // $(btn_jogador2).removeAttr('disabled');
    // $(btn_parar2).removeAttr('disabled');


}