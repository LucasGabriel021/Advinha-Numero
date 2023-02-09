const elementoChute = document.getElementById("chute")

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(event) {
     let chute = console.log(event.results[0][0].transcript);
     exibeChutenaTela(chute);
}

function exibeChutenaTela(chute) {
     elementoChute.innerHTML = `
          <div>Você disse</div>
          <span class="box">${chute}</span> 
     `
}