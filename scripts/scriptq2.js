const formulario = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();
  const nome = formulario.nome.value;
  const senha = formulario.senha.value;
  
  if (senha === nome) {
    mensagem.innerHTML = "Error: A senha não pode ser igual ao nome de usuário. Tente novamente.";
    mensagem.className = "error";
  } else {
    mensagem.innerHTML = "Cadastro realizado com sucesso!";
    mensagem.className = "success";
    formulario.reset();
  }
});