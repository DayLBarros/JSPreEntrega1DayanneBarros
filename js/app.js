function calculadora() {
    const operacion = prompt("Elige una operación: +, -, *, /");

    const num1 = parseFloat(prompt("Elige el primer número:"));
    const num2 = parseFloat(prompt("Elige el segundo número:"));

    let resultado;

    switch (operacion) {
        case "+":
            resultado = num1 + num2;
            console.log(`${num1} + ${num2} = ${resultado}`);
            break;
        case "-":
            resultado = num1 - num2;
            console.log(`${num1} - ${num2} = ${resultado}`);
            break;
        case "*":
            resultado = num1 * num2;
            console.log(`${num1} * ${num2} = ${resultado}`);
            break;
        case "/":
            if (num2 !== 0) {
                resultado = num1 / num2;
                console.log(`${num1} / ${num2} = ${resultado}`);
            } else {
                console.log("Erro: División por zero no es permitida.");
            }
            break;
        default:
            console.log("Operación inválida.");
            return;
    }

    const nuevaOperacion = prompt("Deseas realizar otra operación? (sí/no)");
    if (nuevaOperacion.toLowerCase() === "sí") {
        calculadora();
    } else {
        console.log("Calculadora encerrada.");
    }
}

calculadora();