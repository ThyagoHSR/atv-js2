const form = document.getElementById('form');
const nome = document.getElementById('nome');
const idade = document.getElementById('idade');
const salario = document.getElementById('salario');
const sexo = document.getElementById('sexo');
const estadoCivil = document.getElementById('estado-civil');
const mensagem = document.getElementById('mensagem');
const nomeError = document.getElementById('nome-error');
const idadeError = document.getElementById('idade-error');
const salarioError = document.getElementById('salario-error');
const sexoError = document.getElementById('sexo-error');
const estadoCivilError = document.getElementById('estado-civil-error');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  let hasError = false;

  if (nome.value.length < 3) {
    nomeError.style.display = 'block';
    hasError = true;
  } else {
    nomeError.style.display = 'none';
  }

  if (idade.value < 0 || idade.value > 150) {
    idadeError.style.display = 'block';
    hasError = true;
  } else {
    idadeError.style.display = 'none';
  }

  if (salario.value <= 0) {
    salarioError.style.display = 'block';
    hasError = true;
  } else {
    salarioError.style.display = 'none';
  }

  if (!sexo.value) {
    sexoError.style.display = 'block';
    hasError = true;
  } else {
    sexoError.style.display = 'none';
  }

  if (!estadoCivil.value) {
    estadoCivilError.style.display = 'block';
    hasError = true;
  } else {
    estadoCivilError.style.display = 'none';
  }

  if (!hasError) {
    mensagem.innerHTML = '<p class="success">Formulário enviado com sucesso!</p>';
  } else {
    mensagem.innerHTML = '<p class="error">Por favor, corrija os erros acima.</p>';
  }
});