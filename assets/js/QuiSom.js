function CambiarMain(){
    var originalMainContent=document.getElementById('main').innerHTML;
    var menuHeader=document.getElementById('menuHeader').innerHTML;
    ocultarMenu();
    document.getElementById('main').innerHTML=`<section id="QSM">
        <div class="container" id="QSMContainer">
            <div>
                <h1>Creators</h1>
                    <p>Marga Covas Roig</p>
                    <p>Miquel Ángel Montero Pazmiño</p>
                <h1>Purpose</h1>
                    <p>Somos estudiantes de informática de la Universitat de les Illes Balears en colaboración con DonDominio realizando
                    una web app dinámica usando JavaScript</p>
            </div>
                <video id="videoPlayer" controls width="640" height="360">
                    <source src="assets/multimedia/videoMulti.mp4" type="video/mp4">
                    Tu navegador no admite la reproducción de video.
                </video>
                <div>
                    <button id="botonVideo" class="btn btn-multi"><img id="imgVideo" src="assets/img/IconPlay.svg" data-play="0"></button>
                </div>
        </div>
        <!-- Aquí se colocará el botón -->
        <button id="backButtonQSM" class="btn btn-outline btn-rosa btn-primary">Volver atrás</button>   
    </section>`;
    document.getElementById('backButtonQSM').addEventListener('click',function (){
        cargarContenidoOriginalQSM(originalMainContent);
        cargarMenuHeader(menuHeader);
        reloadMenu();
    });
    asociarVideo();
    asociarAudio();
}
document.getElementById('QSM').addEventListener('click',function(){CambiarMain()});

async function reloadMenu(){
    const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = document.querySelectorAll('#navbar a');

  function navbarlinksActive() {
    navbarlinks.forEach(navbarlink => {

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY + 200;

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navbarlinksActive);
  document.addEventListener('scroll', navbarlinksActive);

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function (event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function (event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

}

