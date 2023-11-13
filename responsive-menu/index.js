const menu = document.querySelector('.menu')
const hamburguer = document.querySelector('.hamburger')

hamburguer.addEventListener('click', (e) => {
    menu.classList.toggle('togglemenu')
})