const screens = document.querySelectorAll('.screen')
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn')
const start_btn = document.getElementById('start-btn')
const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('messsage')



let seconds  = 0 
let score = 0
selected_insect = {}


start_btn.addEventListener('click'  , () =>screens[0].classList.add('up'))



choose_insect_btns.forEach(btn =>{
    btn.addEventListener('click' , () =>{
        const img = btn.querySelector('img') //getting the chosen insect
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_insect = {src , alt}
        screens[1].classList.add('up')
        setTimeout(createInsect , 1000)
        startGame()
    })
})


function createInsect(){
    const insect = document.createElement('div')
    insect.classList.add('insect')
    const {x , y} = getRamdomLocation()
    insect.style.top = `${y}px`
    insect.style.left =    `${x}px`
    insect.innerHTML = `<img src="${selected_insect.src}"  alt = ${selected_insect.alt} style = "transform : rotate(${Math.random()*360}deg)" />`

    insect.addEventListener('click'  , catchInsect)
    game_container.appendChild(insect)
    startGame()
}



function startGame(){
    setInterval(increaseTime , 1000) //increase time every one sec
}


function increaseTime(){
    let m  = Math.floor(seconds/60)  //min
    let s  =  seconds%60   //sec
    
    m = m<10?`0${m}`: m
    s = m<10?`0${s}`: s

    timeEl.innerHTML = `Time: ${m} : ${s}`
    seconds++

}





function catchInsect(){
    console.log(123)
    increaseScore()

    this.classList.add('caught')
    setTimeout(()=>this.remove() , 2000)
    this.remove()
    addInsects()

    

}

function addInsects(){
    setTimeout(createInsect , 1000)
    setTimeout(createInsect , 1500)
}


function increaseScore(){
    score++

    if(score>19){
        message.classList.add('visible')
    }

    scoreEl.innerHTML = `Score: ${score}`
}


function getRamdomLocation(){
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random()*(width-200)+100
    const y  = Math.random()*(height-200)+100
    return {x , y}
}










































































