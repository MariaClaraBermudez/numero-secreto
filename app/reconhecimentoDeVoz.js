const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition; 

//codigo para reconhecimento de voz do Mozilla

const recognition = new SpeechRecognition();
    recognition.lang = 'pt-Br' //reconhecer o portugues
    recognition.start()


    //quando o reconhecimento comeca
    recognition.addEventListener('result', onSpeak)
    //onspeak exibir oq ta falando

    function onSpeak(e){
        chute = e.results[0][0].transcript
        exibeChuteNaTela(chute)
        verificaSeOChutePosuuiUmValorValido(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Voce disse</div>
        <span class="box">${chute}</span>
     `
}

recognition.addEventListener('end', ()=> recognition.start())