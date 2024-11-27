
let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
    let slides = document.getElementsByClassName("awards");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1){slideIndex=slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
       
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 1000); 
}

function changeSlide(n) {
    slideIndex += n;
    showSlides(slideIndex);
}