const form = document.querySelector('form');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const nota = parseFloat(document.querySelector('#nota').value);
  
  if (nota < 0 || nota > 10 || isNaN(nota)) {
    resultado.textContent = 'Valor inválido. Por favor, digite uma nota entre 0 e 10.';
  } else {
    resultado.textContent = 'Nota válida: ' + nota.toFixed(1);
  }
});