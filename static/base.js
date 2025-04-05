const burger = document.getElementById('burger')
const navMenu = document.getElementById('navmenu')
const navLinks = document.querySelectorAll('.nav-link')

burger.addEventListener('click', () =>{
    navMenu.classList.toggle('tw:left-[0]')
    burger.classList.toggle("ri-close-large-line")
})

navLinks.forEach(item => {
    item.addEventListener('click', () =>{
        navMenu.classList.toggle('tw:left-[0]')
        burger.classList.toggle("ri-close-large-line")
    })
})


