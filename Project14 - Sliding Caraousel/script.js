const body = document.body

const slides = document.querySelectorAll('.slide')    //node list 
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')


rightBtn.addEventListener('click' , () =>{
    activeSlide++

    if(activeSlide>slides.length){
        activeSlide = 0
    }

    setBgToBody()
    setActiveSlide()

})


leftBtn.addEventListener('click' , () =>{
    activeSlide--

    if(activeSlide<0){
        activeSlide = slides.length -1
    }

    setBgToBody()>
    setActiveSlide()

})



//this variable is changes to set the sslide on the pressof the button
let activeSlide = 0

setBgToBody()
setActiveSlide()


//will set the background image to the current active slide on the carausel
function setBgToBody(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage

}



function setActiveSlide(){
    slides.forEach(slide => {
        slide.classList.remove('active')
    })

    slides[activeSlide].classList.add('active')
}





