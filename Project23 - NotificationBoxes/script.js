


const button = document.getElementById('button')
const toasts = document.getElementById('toasts')


//this could be fetched from an api
const messages = [

    'Message 1',
    'Message 2',
    'Message 3',
    'Message 4',
    'Message 5',
    'Message 6',
    'Message 7',
    'Message 8',
    'Message 9',
    'Message 10',
    'Message 11',
    'Message 12',
    'Message 13',
    'Message 14',

]

const types = ['info'  , 'success' , 'error']

button.addEventListener('click' , ()=>{
    createNotification('This is a notification message')
})


function createNotification(message = null ,  type = null){
    const notif = document.createElement('div')
    notif.classList.add('toast')

    notif.classList.add(type ? type :getRandomType())


    //this could be an api or a validation message .......or anything to notify
    notif.innerText = message ? message :  getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(()=>{
        notif.remove()
    } , 4000)

}



function getRandomMessage(){
    return messages[Math.floor(Math.random()*messages.length)]
}


function getRandomType(){
    return types[Math.floor(Math.random()*types.length)]
}