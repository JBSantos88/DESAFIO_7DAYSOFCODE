const numero_secreto = 4;
let tentativas = 3; 

while(tentativas > 0){
    let chute = parseInt(prompt(`Você tem ${tentativas} tentativa(s).\nTente acertar o número secreto (0 a 10).`));

    if(numero_secreto === chute){
        alert('Parabéns, você acertou o número secreto!');
        break;
    } else {
        tentativas--;
        if(tentativas === 0){
            alert(`Você perdeu! O número secreto era ${numero_secreto}.`);
        } else {alert('Errado! Tente novamente. :D')}
    }
}
