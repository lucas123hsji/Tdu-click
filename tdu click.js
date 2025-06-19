let dinheiro = 0;
let ganhoAutomatico = 0;
let melhoriaComprada = false;

function contarClique() {
  try {
    dinheiro++;
    atualizar();
    document.getElementById("debug").innerText = "";
  } catch (erro) {
    document.getElementById("debug").innerText = "Erro ao contar clique: " + erro;
  }
}

function atualizar() {
  try {
    document.getElementById("dinheiro").innerText = dinheiro;
  } catch (erro) {
    document.getElementById("debug").innerText = "Erro ao atualizar a tela: " + erro;
  }
}

function comprarMelhoria() {
  if (!melhoriaComprada && dinheiro >= 10) {
    dinheiro -= 10;
    ganhoAutomatico = 1;
    melhoriaComprada = true;
    atualizar();
    document.getElementById("melhoria").disabled = true;
    document.getElementById("melhoria").innerText = "Ajudante comprado! ✅";
  } else if (dinheiro < 10) {
    document.getElementById("debug").innerText = "Você precisa de 10 dinheiros!";
  }
}

// ⏱️ Roda a cada segundo
setInterval(function () {
  if (ganhoAutomatico > 0) {
    dinheiro += ganhoAutomatico;
    atualizar();
  }
}, 1000);
