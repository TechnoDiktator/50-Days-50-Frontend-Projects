const header   =  document.getElementById('header')
const title   =  document.getElementById('title')
const excerpt   =  document.getElementById('excerpt')
const profile   =  document.getElementById('profile-img')
const namee  =  document.getElementById('name')
const date   =  document.getElementById('date')



const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')


setTimeout(getData , 2500)


function getData(){
    header.innerHTML = `<img src="img/image.jpeg" alt="fruits"/>`
    title.innerHTML = ' Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, doloribus.`
    profile.innerHTML = `  <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">`
    namee.innerHTML = `Tarang Rastogi`
    date.innerHTML = `Oct 08, 2023`

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))



}




