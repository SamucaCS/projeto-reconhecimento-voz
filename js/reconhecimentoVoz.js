const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br';
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak (e){
  chute = e.results[0][0].transcript;
  exibirChute(chute);
  verificaChute(chute)
}

function exibirChute(chute){
  elementoChute.innerHTML = `
  <div>Você disse</div>
  <span class="box">${chute}</span>
  `;
}
recognition.addEventListener('end', () => recognition.start())