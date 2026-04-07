function initCarousel(nSlides = 3) {
  fetch('assets/json/fires.json')
    .then(response => response.json())
    .then(data => {
      const eventos = data.slice(0, nSlides);
      generateSwiperItems(eventos);
      new Swiper('.slides-1', {
        speed: 600,
        loop: true,
        autoplay: {
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
    })
    .catch(error => console.error('Error al obtener los datos:', error));
}