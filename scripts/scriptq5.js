function calcular() {
    // Obtém os valores dos inputs
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const num3 = parseInt(document.getElementById("num3").value);
    const num4 = parseInt(document.getElementById("num4").value);
    const num5 = parseInt(document.getElementById("num5").value);
  
    // Validação dos valores
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
      document.getElementById("resultado").innerHTML = "Por favor, preencha todos os campos corretamente.";
      return;
    }
  
    // Encontra o maior número
    let maior = num1;
    if (num2 > maior) {
      maior = num2;
    }
    if (num3 > maior) {
      maior = num3;
    }
    if (num4 > maior) {
      maior = num4;
    }
    if (num5 > maior) {
      maior = num5;
    }
  
    // Exibição do resultado
    document.getElementById("resultado").innerHTML = `O maior número é ${maior}.`;
}