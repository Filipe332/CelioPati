// Contador de Tempo
const dataInicio = new Date('2009-02-12');

function atualizarContador() {
  const agora = new Date();
  const diferenca = agora - dataInicio;

  const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
  const meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  document.getElementById('anos').innerText = anos;
  document.getElementById('meses').innerText = meses;
  document.getElementById('dias').innerText = dias;
  document.getElementById('horas').innerText = horas;
  document.getElementById('minutos').innerText = minutos;
  document.getElementById('segundos').innerText = segundos;
}

setInterval(atualizarContador, 1000);
atualizarContador();

// Inicializar o Swiper
const swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });