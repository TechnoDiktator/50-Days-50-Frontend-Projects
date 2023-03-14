const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')



const days = ["Sunday" , "Monday"  , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]
const months = ["Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" , "Jul" , "Aug" , "Sep" , "Oct" , "Nov"  , "Dec"]
 
toggle.addEventListener('click' , (e) =>{
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    }else{
        html.classList.add('dark')
        e.tager.innerHTML = 'Light mode'
    }
})





const scale = (num  , in_min , in_max , out_min , out_max)=>{  
    return (num - in_min)*(out_max - out_min)/(in_max - in_min) + out_min;
}

function setTime(){
    const time = new Date();
    console.log(time)
    const month = time.getMonth()
    const day  = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hourForClock = hours%12   //to convert it to the 12 hour format
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours>=12 ? 'PM' : 'AM'
    hourEl.style.transform = `translate(-50%,-100%) rotate(  ${scale(hourForClock , 0 , 11 , 0 , 360)}deg )`
    minuteEl.style.transform = `translate(-50%,-100%) rotate(  ${scale(minutes, 0 , 59 , 0 , 360)}deg )`
    secondEl.style.transform = `translate(-50%,-100%) rotate(  ${scale(seconds , 0 , 59 , 0 , 360)}deg )`

    timeEl.innerHTML = `${hourForClock}:${minutes<10 ? `0${minutes}` : minutes}${ampm}`
    dateEl.innerHTML = `${days[day]} , ${months[month]} <span class"circle">${date}</span>`
                                                        //<span class="circle">2</span>                
}

setTime()

setInterval(setTime , 100) //we will call the settime function every 1000ms










































