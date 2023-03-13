//    bd2537b80de32f04ff7e101fe9500168
//    eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDI1MzdiODBkZTMyZjA0ZmY3ZTEwMWZlOTUwMDE2OCIsInN1YiI6IjY0MGY2NTIxZWRlMWIwMDA3YjRlNDIxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JRkHZw0m1R1AE-pA_KW1Gu77PW6DS9GG16dlDFK0ZFI

const main = document.getElementById('main')
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bd2537b80de32f04ff7e101fe9500168&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w500'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=bd2537b80de32f04ff7e101fe9500168&query="'


const form   =  document.getElementById('form')
const search = document.getElementById('search')

//get initial movies
getMovies(API_URL)

async function getMovies(url){
    const res = await fetch(url)
    const data  =  await res.json()
    console.log(data.results)

    showMovies(data.results)

}



function showMovies(movies){
    main.innerHTML = ''
    movies.forEach((movie)=>{
        const {title , poster_path , vote_average , overview} = movie
    
    
        const movieElement = document.createElement('div')
        movieElement.classList.add('movie')
        //that is we fill fetch all the relevent data from the api and fill it in the movie element
        movieElement.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        
        `

        main.appendChild(movieElement)

    })


    function getClassByRate(vote){
        if(vote>=8){
            return 'green'
        }else if(vote>=5){
            return 'orange'
        }else{
            return 'red'
        }
    }



}



form.addEventListener('submit' ,(e)=>{
    e.preventDefault()
    const searchTerm = search.value


    if(searchTerm && searchTerm!==''){
        getMovies(SEARCH_API + searchTerm)
        search.value = ''

    }else{
        window.location.reload()
    }
})












