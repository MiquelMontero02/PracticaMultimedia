/**
* Template Name: Yummy
* Updated: Jan 30 2024 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/yummy-bootstrap-restaurant-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
//cargarContenidoOriginal();
function borrar(e){
  var cont=e.t
}

function cargarContenidoEspecifico(event) {
  //Tornam s'enllaç com era abans
  event.preventDefault();
  var contentType="vaques"
  //Guardam es main que hi era abans
  var originalMainContent = document.getElementById('main').innerHTML;
  var mainContent = document.getElementById('main');
  if (contentType === "vaques") {
    mainContent.innerHTML =
      `<div class="container" data-aos="fade-up">
  <div class="section-header">
    <h2>Calendari</h2>
    <p>Fira de ses vaques  
        <br><span>Campos</span>
    </p>
  </div>
  <div class="row gy-4">
    
      <div class="content ps-0 ps-lg-5">
        <p class="fst-italic">
          Tornen les vaques a Campos, torna la Fira i torna el més autèntic ambient tradicional mallorquí el 13 i 14 de maig. La Fira de les Seves Vaques omplirà novament els carrers del poble amb totes les seves propostes, que estan recollides al programa elaborat per l'Ajuntament.
          El segon cap de setmana de maig les millors ramaderies acudeixen a participar al Concurs Morfològic Nacional Selecte de bestiar boví frisó, una cita ineludible en la qual les vaques passegen pel cèntric carrer de Sus Rondes perquè la gent del poble i els turistes les puguin veure.
        </p>
        <section id="maps" class="mb-3">
    <div class="container" data-aos="fade-up">
      <iframe style="border:0; width: 100%; height: 350px;"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
        frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="d-grip d-md-flex mb-3 justify-content-md-end">

          <button id="backButton" class="btn btn-outline btn-rosa btn-primary" type="button">Volver atrás</button>  


    </div>  
  </section><!-- End Contact Section -->
   
    </div>
  </div>

</div>
`;
  } else if (contentType === "vermar") {
    // Contenido para Fira des Vermar
    mainContent.innerHTML = `<div class="container" data-aos="fade-up">
  <div class="section-header">
    <h2>Calendari</h2>
    <p>Fira de ses vaques  
        <br><span>Campos</span>
    </p>
  </div>
  <div class="row gy-4">
    
      <div class="content ps-0 ps-lg-5">
        <p class="fst-italic">
          Tornen les vaques a Campos, torna la Fira i torna el més autèntic ambient tradicional mallorquí el 13 i 14 de maig. La Fira de les Seves Vaques omplirà novament els carrers del poble amb totes les seves propostes, que estan recollides al programa elaborat per l'Ajuntament.
          El segon cap de setmana de maig les millors ramaderies acudeixen a participar al Concurs Morfològic Nacional Selecte de bestiar boví frisó, una cita ineludible en la qual les vaques passegen pel cèntric carrer de Sus Rondes perquè la gent del poble i els turistes les puguin veure.
        </p>
        <section id="maps" class="mb-3">
    <div class="container" data-aos="fade-up">
      <iframe style="border:0; width: 100%; height: 350px;"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
        frameborder="0" allowfullscreen></iframe>
    </div>
  </section><!-- End Contact Section -->

        <button id="backButton">Volver atrás</button>
      
    </div>
  </div>
</div>`;
  } else if (contentType === "medieval") {
    // Contenido para Fira Medieval
    mainContent.innerHTML = `
    <div class="container" data-aos="fade-up">
      <div class="section-header">
        <h2>Calendari</h2>
        <p>Fira de ses vaques  
            <br><span>Campos</span>
        </p>
      </div>
      <div class="row gy-4">          
          <div class="content ps-0 ps-lg-5">
            <p class="fst-italic">
              Tornen les vaques a Campos, torna la Fira i torna el més autèntic ambient tradicional mallorquí el 13 i 14 de maig. La Fira de les Seves Vaques omplirà novament els carrers del poble amb totes les seves propostes, que estan recollides al programa elaborat per l'Ajuntament.
              El segon cap de setmana de maig les millors ramaderies acudeixen a participar al Concurs Morfològic Nacional Selecte de bestiar boví frisó, una cita ineludible en la qual les vaques passegen pel cèntric carrer de Sus Rondes perquè la gent del poble i els turistes les puguin veure.
            </p>
            <section id="maps" class="mb-3">
              <div class="container" data-aos="fade-up">
                <iframe style="border:0; width: 100%; height: 350px;"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                  frameborder="0" allowfullscreen></iframe>
              </div>
            </section><!-- End Contact Section -->
            <button id="backButton">Volver atrás</button>
          </div>
      </div>
    </div>`;
  }

  // Asociar evento de clic al botón de "volver atrás"
  document.getElementById('backButton').addEventListener('click', function (event) {
    event.preventDefault();
    // Restaurar el contenido original del main
    cargarContenidoOriginal(originalMainContent);
  });
}
function cargarContenidoOriginal(Main) {
  var mainContent = document.getElementById('main');
  mainContent.innerHTML = Main;

  // Obtener todos los elementos con la clase "refreshButton"
  var refreshButtons = document.querySelectorAll('.refreshButton');

  // Iterar sobre los botones y agregar el evento de clic a cada uno
  refreshButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      var contentType = this.getAttribute('data-content');
      cargarContenidoEspecifico(contentType);
    });
  });
   start()
}
function start(){
  
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
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

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Gallery Slider
   */
  new Swiper('.gallery-slider', {
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

  /*Codigo Propio*/
  var boton=document.getElementById("vaques")
  boton.addEventListener('click',cargarContenidoEspecifico);
  var boton2=document.getElementById("vermar")
  boton2.addEventListener('click',cargarContenidoEspecifico);
  var boton3=document.getElementById("medieval")
  boton3.addEventListener('click',cargarContenidoEspecifico);

}

document.addEventListener('DOMContentLoaded', start);

