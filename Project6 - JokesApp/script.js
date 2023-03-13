const jokeEl = document.getElementById('joke')
const jokebtn = document.getElementById('jokeBtn')

jokebtn.addEventListener('click'  , generateJoke)


generateJoke()




// function generateJoke(){
//     const config = {
//         headers:{
//             'Accept':'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com/' , config)
//     .then((response)=>response.json())
//     .then((data) => {
//         jokeEl.innerHTML = data.joke
//     })
// }





//Using async await 
async function generateJoke(){
    const config = {
        headers:{
            'Accept':'application/json'
        },
    }

    const response = await fetch('https://icanhazdadjoke.com/' , config)
    const data  =  await response.json()
    jokeEl.innerHTML = data.joke

}






