let area_escolhida; 
let tecnologia_escolhida; 

while (true) {    
    const escolha1 = prompt('Qual área você quer iniciar seu aprendizado em tecnologia? (1) Para Front-end. (2) Para Back-end.');

    if (escolha1 == 1) {
        area_escolhida = 'Front-end';
        alert('A área de Front é muito ampla, mas é muito legal!');
        const escolha2_front = prompt('Qual tecnologia para Front-end você quer aprender? (1) React. (2) Vue.');
        tecnologia_escolhida = (escolha2_front == 1) ? 'React' : 'Vue';
        apresenta_mensagem_tecnologia(tecnologia_escolhida);
        break;
    } 
    
    if (escolha1 == 2) {
        area_escolhida = 'Back-end';
        alert('A área de Back-end é desafiadora, mas é incrível!');
        const escolha2_back = prompt('Qual tecnologia para Back-end você quer aprender? (1) C#. (2) Java.');
        tecnologia_escolhida = (escolha2_back == 1) ? 'C#' : 'Java';
        apresenta_mensagem_tecnologia(tecnologia_escolhida);
        break;
    } 
    
    alert('Não entendi sua resposta! Tente novamente.');
}

while (true) {    
    const escolha3 = prompt(`Você deseja se especializar em ${area_escolhida}, ou quer se tornar um desenvolvedor full-stack? (1) Se especializar. (2) Full-stack.`);
    
    if (escolha3 == 1) {
        alert(`Ótima escolha! Você está no caminho para se tornar um especialista em ${tecnologia_escolhida} e no ecossistema de ${area_escolhida}.`);
        break;
    }
    
    if (escolha3 == 2) {
        alert("Ótima escolha! Expandindo seus conhecimentos, você estará pronto para desenvolver aplicações completas, do Front-End ao Back-End!");
        break;
    }

    alert('Não entendi sua resposta! Por favor, tente novamente.');
}

while (true) {
    const nova_tecnologia = prompt("Qual outra tecnologia você gostaria de aprender?");
    
    if (nova_tecnologia) {
        alert(`Muito legal! ${nova_tecnologia} é uma tecnologia interessante e pode agregar muito ao seu conhecimento.`);
    }
    alert('Tem mais alguma tecnologia que você queria aprender?');
}

function apresenta_mensagem_tecnologia(tecnologia) {
    alert(`Legal. ${tecnologia} é uma tecnologia muito interessante!`);
}
