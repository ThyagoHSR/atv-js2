const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  let resultado = "";
  if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      resultado += i + " ";
    }
  } else {
    for (let i = num1; i >= num2; i--) {
      resultado += i + " ";
    }
  }
  document.getElementById("resultado").innerHTML = resultado;
});