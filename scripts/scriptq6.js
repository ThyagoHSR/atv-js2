function calcular() {
    // Obtém os valores dos inputs
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
    const num4 = parseFloat(document.getElementById("num4").value);
    const num5 = parseFloat(document.getElementById("num5").value);
  
    // Validação dos valores
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
      document.getElementById("resultado").innerHTML = "Por favor, preencha todos os campos corretamente.";
      return;
    }
  
    // Cálculo da soma
    const soma = num1 + num2 + num3 + num4 + num5;
  
    // Cálculo da média
    const media = soma / 5;
  
    // Exibição do resultado
    document.getElementById("resultado").innerHTML = `A soma dos números é ${soma} e a média é ${media.toFixed(2)}.`;
}