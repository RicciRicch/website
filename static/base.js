const burger = document.getElementById('burger')
const navMenu = document.getElementById('navmenu')
const navLinks = document.querySelectorAll('.nav-link')

burger.addEventListener('click', () =>{
    navMenu.classList.toggle('left-[0]')
    burger.classList.toggle("ri-close-large-line")
})

navLinks.forEach(item => {
    item.addEventListener('click', () =>{
        navMenu.classList.toggle('left-[0]')
        burger.classList.toggle("ri-close-large-line")
    })
})

const ScrollHeader = () =>{
    const header = document.getElementById('navbar')

    if(this.scrollY >= 250){
        header.classList.add('border-b', 'border-white')
    }
    else{
        header.classList.remove('border-b', 'border-white')
    }
}

window.addEventListener('scroll', ScrollHeader)


