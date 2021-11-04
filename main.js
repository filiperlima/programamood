/* abre/fecha menu mobile burger / x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* abre/fecha menu mobile a partir dos links */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é a maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* revelar a logo se altura maior que #home */
const logo = document.querySelector('.logo')
function revealLogoWhenScroll() {
  if (window.scrollY >= 300) {
    // scroll é a maior que a altura do header
    logo.classList.add('show')
  } else {
    // menor que a altura do header
    logo.classList.remove('show')
  }
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper', {
  slidersPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal: mostrar elementos quando rolar a página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #who-for .text, #who-for .button,
  #testimonials header, #testimonials .testimonials,
  #why-so-complete header, #why-so-complete .cards, #why-so-complete .button,
  #details .text,
  #contact .text, #contact .links, #contact .button,
  footer .brand, footer .social
`,
  { interval: 100 }
)

/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* Quando rolar */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  revealLogoWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
