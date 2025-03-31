document.addEventListener('DOMContentLoaded', () =>{

    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll("ul li");

    let currentIndex = 0;

    function updateSlides(newIndex){
        slides[currentIndex].classList.remove("tw:opacity-100");
        slides[currentIndex].classList.add("tw:opacity-0");

        slides[newIndex].classList.remove("tw:opacity-0");
        slides[newIndex].classList.add("tw:opacity-100");
        
        currentIndex = newIndex;
    }

    prevButton.addEventListener('click', ()=>{
        let newIndex = currentIndex - 1;
        if(newIndex < 0) newIndex = slides.length - 1;
        updateSlides(newIndex);
    })

    nextButton.addEventListener('click', () =>{
        let newIndex = currentIndex + 1;
        if(newIndex >= slides.length) newIndex = 0;
        updateSlides(newIndex);
    })


})
