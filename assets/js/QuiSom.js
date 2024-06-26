function CambiarMain(){
  mobileNavToogle();
    var originalMainContent=document.getElementById('main').innerHTML;
    var menuHeader=document.getElementById('menuHeader').innerHTML;
    ocultarMenu();
    document.getElementById('main').innerHTML=`<section id="QSM">
        <div class="container" id="QSMContainer">
            <div>
                <h1>Creadors</h1>
                <div class="container mt-3">
                <div class="d-flex">
                    <button id="Marga" class="btn btn-rosa me-2" data-bs-toggle="modal" data-bs-target="#videoQSM">Marga Covas Roig</button>
                    <button id="Montero" class="btn btn-rosa" data-bs-toggle="modal" data-bs-target="#videoQSM">Miquel Ángel Montero Pazmiño</button>
                </div>
            </div>
                <h1>Propòsit</h1>
                    <p>Som estudiants d'informàtica de la Universitat de les Illes Balears en col·laboració amb DonDominio realitzant una web app dinàmica usant JavaScript</p>
            </div>
        </div>
        <!-- Aquí se colocará el botón -->
        <button id="backButtonQSM" class="btn btn-outline btn-rosa btn-primary">Tornar Enrere</button>   
    </section>
    <div class="modal fade" id="videoQSM" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Suscribete!</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div id="contenedorModal" class="modal-body d-felx">
            <video id="videoPlayer">
              <source id="videoMP4" src="assets/multimedia/QSM_Montero.mp4" type="video/mp4">
              <source id="videoWEBM" src="assets/multimedia/QSM_Montero.webm" type="video/webm">
                Tu navegador no admite la reproducción de video.
            </video>
            <div>
              <button id="botonVideo" class="btn btn-multi"><img id="imgVideo" src="assets/img/IconPlay.svg" data-play="0"></button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    document.getElementById('backButtonQSM').addEventListener('click',function (){
        cargarContenidoOriginalQSM(originalMainContent);
        cargarMenuHeader(menuHeader);
        reloadMenu();
    });
    asociarVideo();
    document.getElementById('Marga').addEventListener('click',function(){ponerVideoMarga()});
document.getElementById('Montero').addEventListener('click',function(){ponerVideoMontero()});
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

