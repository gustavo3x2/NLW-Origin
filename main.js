/* abre e fecha o menu */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')


for (const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}
/*ao clickar no link fechar o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show')
  })
}
/* Mudar o header quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
  if(window.scrollY >= navHeight) {
    //scroll e maior que a altura do header
    header.classList.add('scroll')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
})