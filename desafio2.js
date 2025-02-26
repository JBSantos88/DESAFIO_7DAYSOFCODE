const nome = prompt('Olá, qual o seu nome?');
const idade = prompt(`${nome}, quantos anos você tem`);
const linguagem = prompt('E qual linguagem de prgramação você está estudando atualmente?');

alert(`Ok, acho que já conheço um pouco sobre você!\nSeu nome é ${nome}, tem ${idade} anos e está estudando ${linguagem}.`);

let opcao;

while (true) {
    opcao = prompt(`Você está gostando de estudar ${linguagem}?`);
    if (opcao === 'Sim' || opcao === 'sim') {
        alert(`Muito bem! Continue assim, ${linguagem} é uma linguagem incrível. É muito bom aprender coisas novas.`);
        break;
    } else if (opcao === 'Não' || opcao === 'não') {
        alert('Poxa, que pena. Tente aprender outra linguagem então.');
        break;
    } else {
        alert('Não entendi sua resposta! Tente novamente.');
    }
}