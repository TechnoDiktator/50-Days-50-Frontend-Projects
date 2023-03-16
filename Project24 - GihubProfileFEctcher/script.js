

const APIURL =  'https://api.github.com/users/'
const form  = document.getElementById('form')
const search  = document.getElementById('search')
const main = document.getElementById('main')


async function getUser(username){
    try {
        const {data} = await axios(APIURL + username)   
        console.log(data) 

        createUserCard(data)
        getRepos(username)

    } catch (err) {    
        console.log(err)

        if(err.response.status == 404){
            createErrorCard('There is no user with this username')
            
        }
    }
}



//fetches repo detai;ls
async function getRepos(username){

    try {
        const {data} = await axios(APIURL +   username + '/repos?sort=created')
        console.log(data)
        addReposToCArd(data)

    } catch (err) {    
        console.log(err)
        if(err.response.status == 404){
            createErrorCard('Problem fetching repos')
        }
    }
}


function  createErrorCard(message){
    const cardHTML = `
    <div class = 'card'>
        <h1>${message}</h1>
    </div>`

    main.innerHTML = cardHTML
}


function addReposToCArd(repos){

    const reposEl = document.getElementById('repos')
    repos.forEach(repo =>{
        const repoLinkEl = document.createElement('a')
        repoLinkEl.classList.add('repo')
        repoLinkEl.href = repo.html_url
        repoLinkEl.target = '_blank'
        repoLinkEl.innerText = repo.name
        reposEl.appendChild(repoLinkEl)
    })

}



form.addEventListener('submit' , (e)=>{
    e.preventDefault()
    const user  =  search.value

    if(user){
        getUser(user)
        search.value = ''
         
    }
})



function createUserCard(user){


    console.log('the user data is  ' , user)
    console.log(user.bio)
    console.log(user.name)
    console.log(user.followers)
    console.log(user.following)
    console.log(user.public_repos)
    

    const cardHTML = `
    <div class="card">
        <div>
            <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
        
            <ul>
                <li>${user.followers} <strong>Followers</strong></li>
                <li>${user.following} <strong>Following</strong></li>
                <li>${user.public_repos}<strong>Repos</strong></li>
            </ul>

            <div class="repos" id = 'repos'>
            
            </div>
        </div>
    </div>
    `

    main.innerHTML = cardHTML


}































































