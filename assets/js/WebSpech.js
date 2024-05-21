
function asociarWebSpech(id,texto){
    let boton=document.getElementById(id);
    boton.addEventListener('click',function(){
        const synth = window.speechSynthesis;
        if(synth.speaking){
            synth.cancel();
            const imagen = boton.querySelector('img');
            // Cambiar el src de la imagen
            imagen.src = 'assets/img/iconoAudioInicio.svg';
        }else{
            const utterance = new SpeechSynthesisUtterance(texto);
            utterance.voice = synth.getVoices()[0];
            utterance.rate = 1.2; // establecer la velocidad de
            utterance.pitch = 1.5; // establecer la altura de voz
            synth.speak(utterance);
            const imagen = boton.querySelector('img');
            // Cambiar el src de la imagen
            imagen.src = 'assets/img/IconoPausa.svg';
        
        }    
    });
}
function paradaSpeech(){
    const synth = window.speechSynthesis;
    if(synth.speaking){
        synth.cancel();
    }
}