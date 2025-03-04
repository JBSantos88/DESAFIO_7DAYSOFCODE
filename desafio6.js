let listaDeCompras = {
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: [],
    cereais: [],
    outros: []
};

let continuar = true;

while (continuar) {
    let resposta = prompt("Deseja adicionar ou remover uma comida da sua lista de compras? (adicionar/remover/sair)").toLowerCase();
    
    if (resposta === "adicionar") {
        let comida = prompt("Qual comida você deseja adicionar?");
        let categoria = prompt("Em qual categoria essa comida se encaixa? (frutas, laticinios, congelados, doces, cereais, outros)").toLowerCase();
        
        if (listaDeCompras[categoria]) {
            listaDeCompras[categoria].push(comida);
        } else {
            alert("Categoria inválida. O item será adicionado à categoria 'outros'.");
            listaDeCompras.outros.push(comida);
        }
    } else if (resposta === "remover") {
        let itensPresentes = false;
        
        for (let categoria in listaDeCompras) {
            if (listaDeCompras[categoria].length > 0) {
                itensPresentes = true;
                break;
            }
        }
        
        if (!itensPresentes) {
            alert("A lista de compras está vazia! Não há itens para remover.");
            continue;
        }
        
        let listaFormatada = "Lista de Compras:\n";
        for (let categoria in listaDeCompras) {
            if (listaDeCompras[categoria].length > 0) {
                listaFormatada += `${categoria}: ${listaDeCompras[categoria].join(", ")}\n`;
            }
        }
        alert(listaFormatada);
        
        let comidaRemover = prompt("Digite o nome do item que deseja remover:");
        let encontrado = false;
        
        for (let categoria in listaDeCompras) {
            let index = listaDeCompras[categoria].indexOf(comidaRemover);
            if (index !== -1) {
                listaDeCompras[categoria].splice(index, 1);
                alert(`O item '${comidaRemover}' foi removido da lista.`);
                encontrado = true;
                break;
            }
        }
        
        if (!encontrado) {
            alert("Não foi possível encontrar o item dentro da lista!");
        }
    } else if (resposta === "sair") {
        continuar = false;
    } else {
        alert("Resposta inválida. Digite 'adicionar', 'remover' ou 'sair'.");
    }
}

let listaFinal = "Lista Final de Compras:\n";
for (let categoria in listaDeCompras) {
    if (listaDeCompras[categoria].length > 0) {
        listaFinal += `${categoria}: ${listaDeCompras[categoria].join(", ")}\n`;
    }
}
alert(listaFinal);