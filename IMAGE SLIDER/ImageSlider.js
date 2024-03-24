//Image Slider

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

//Intialize Slider

document.addEventListener("DOMContentLoaded",intializeSlider);

function intializeSlider()
{
    if(slides.length>0){
        slides[0].classList.add("displaySlide");
        intervalId = setInterval(nextSlide,5000);
    }
}

function showSlide(index)
{
    if(index >= slides.length)
    {
        slideIndex = 0;
    }
    else if(index < 0)
    {
        slideIndex = slides.length - 1;        
    }

    slides.forEach(slide =>
        {
            slide.classList.remove("displaySlide");
        });
        slides[slideIndex].classList.add("displaySlide");
}


function nextSlide()
{
    slideIndex+=1;
    showSlide(slideIndex);
}

function prevSlide()
{
    clearInterval(intervalId);
    slideIndex-=1;
    showSlide(slideIndex);
}