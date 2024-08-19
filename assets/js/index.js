/** verifica se tem alguma coisa salva no próprio navegador na memória localStorage */
if (localStorage.getItem("token") == null) {
  /* alert("Você logar para acessar essa página"); */
  window.location.href = "../assets/html/signin.html";
}

const userLogado = JSON.parse(localStorage.getItem("userLogado"));

const logado = document.querySelector("#logado");
logado.innerHTML = `Está tudo bem ${userLogado.nome}?`;

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "../assets/html/signin.html";
}
