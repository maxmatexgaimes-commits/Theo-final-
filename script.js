const inicioRelacionamento = new Date("2025-09-11T00:00:00");

function abrirCarta() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("carta").classList.remove("hidden");
  document.getElementById("musica").play();
  atualizarContador();
  setInterval(atualizarContador, 1000);
  iniciarEfeitos("🌸", 15);
  iniciarEfeitos("💗", 10);
}

function atualizarContador() {
  const agora = new Date();
  const horas = Math.floor((agora - inicioRelacionamento) / (1000 * 60 * 60));
  document.getElementById("contador").innerText =
    `Estamos juntos há ${horas} horas 💕`;
}

function iniciarEfeitos(emoji, qtd) {
  for (let i = 0; i < qtd; i++) {
    const e = document.createElement("div");
    e.innerText = emoji;
    e.style.position = "fixed";
    e.style.top = "-10%";
    e.style.left = Math.random() * 100 + "vw";
    e.style.fontSize = (20 + Math.random() * 20) + "px";
    e.style.animation = "cair " + (5 + Math.random() * 5) + "s linear infinite";
    document.body.appendChild(e);
  }
}