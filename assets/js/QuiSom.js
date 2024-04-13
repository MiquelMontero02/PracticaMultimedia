function CambiarMain(){
    var originalMainContent=document.getElementById('main').innerHTML;
    var menuHeader=document.getElementById('menuHeader').innerHTML;
    ocultarMenu();
    document.getElementById('main').innerHTML=`<section id="QSM">
        <div class="container">
            <div class="container">
                <h1>Creators</h1>
                    <p>Page Owner: Marga Covas Roig</p>
                    <p>Bad Paied Worker: Miquel Ángel Montero Pazmiño</p>
                <h1>Purpose</h1>
                    <p>Somos estudiantes de informática de la Universitat de les Illes Balears en colaboración con DonDominio realizando
                    una web app dinámica usando JavaScript</p>
            </div>
            <h1>Reproducción de Audio</h1>
                <audio id="audioPlayer" controls>
                    <source src="https://www.firabalear.com/assets/multimedia/AudioPropio.aac" type="audio/aac">
                    Tu navegador no admite la reproducción de audio.
                </audio>
                <div>
                    <button id="botonPausaAudio" class="btn">Pausa Audio</button>
                    <button id="botonReanudarAudio" class="btn">Reanudar Audio</button>
                </div>
                <video id="videoPlayer" controls width="640" height="360">
                    <source src="assets/multimedia/videoMulti.mp4" type="video/mp4">
                    Tu navegador no admite la reproducción de video.
                </video>
                <div>
                    <button id="botonPausaVideo" class="btn">Pausa video</button>
                    <button id="botonReanudarVideo" class="btn">Reanudar Video</button>
                </div>
        </div>
        <!-- Aquí se colocará el botón -->
        <button id="backButtonQSM" class="btn btn-outline btn-rosa btn-primary">Volver atrás</button>   
    </section>`;
    document.getElementById('backButtonQSM').addEventListener('click',function (){
        cargarContenidoOriginalQSM(originalMainContent);
        cargarMenuHeader(menuHeader);
    });
    asociarVideo();
}
document.getElementById('QSM').addEventListener('click',function(){CambiarMain()});

