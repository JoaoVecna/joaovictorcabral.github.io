// Efeito de texto digitando
const titulo = document.querySelector('.titulo');
const textoOriginal = titulo.textContent;
titulo.textContent = '';
let i = 0;

function digitar() {
  if (i < textoOriginal.length) {
    titulo.textContent += textoOriginal.charAt(i);
    i++;
    setTimeout(digitar, 80);
  }
}
digitar();

// Som ambiente
const botaoSom = document.getElementById('ativarSom');
const audio = document.getElementById('bgAudio');

botaoSom.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    botaoSom.textContent = 'Experiência Ativada';
    botaoSom.disabled = true;
  }
});
