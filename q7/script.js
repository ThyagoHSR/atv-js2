function imprimirImpares() {
    let resultado = "";
  
    for (let i = 1; i <= 50; i++) {
      if (i % 2 !== 0) {
        resultado += i + " ";
      }
    }
  
    document.getElementById("resultado").innerHTML = resultado;
  }