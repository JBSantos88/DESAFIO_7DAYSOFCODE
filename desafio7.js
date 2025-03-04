function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero!";
    }
    return a / b;
}

function calculadora() {
    let opcao;
    do {
        opcao = prompt("Escolha uma operação:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Sair");
        
        if (opcao >= 1 && opcao <= 4) {
            let num1 = parseFloat(prompt("Digite o primeiro número:"));
            let num2 = parseFloat(prompt("Digite o segundo número:"));
            let resultado;
            
            switch (opcao) {
                case "1":
                    resultado = somar(num1, num2);
                    break;
                case "2":
                    resultado = subtrair(num1, num2);
                    break;
                case "3":
                    resultado = multiplicar(num1, num2);
                    break;
                case "4":
                    resultado = dividir(num1, num2);
                    break;
            }
            alert("Resultado: " + resultado);
        } else if (opcao === "5") {
            alert("Até a próxima!");
        } else {
            alert("Opção inválida! Tente novamente.");
        }
    } while (opcao !== "5");
}

calculadora();
