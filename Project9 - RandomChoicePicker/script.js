const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()


textarea.addEventListener('keyup'  , (e)=>{
    createTags(e.target.value)


    if(e.key === 'Enter'){

        setTimeout(()=>{
            e.target.value = ''
        } , 10)

        randomSelect()
    }
})









function createTags(input){

    //we converted the data entered in the textarea to an array in which elements are split by comma....also empy values are ignored using filter
    const tags = input.split(',').filter(tag => tag.trim() !=='').map(tag => tag.trim())
    console.log(tags)

    //initially the tagdEl is empty
    tagsEl.innerHTML = ''

    //here we fill the TagsEl with tag elements 
    tags.forEach(tag=>{
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })

}



function randomSelect(){
    console.log("test")

    const times = 30

    //for the highlighting and unhighlighting
    const interval = setInterval(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)

            setTimeout(()=>{
                unHighLight(randomTag)
            },200)

    } , 200)


    //for stopping finally at a tag
    setTimeout(()=>{
        clearInterval(interval)

        setTimeout(()=>{
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        },100)


    },times*100)


}



function pickRandomTag(){
    //this will get us a node llist
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random()*tags.length)]

}



function highlightTag(tag){
    tag.classList.add('highlight')
}

function unHighLight(tag){
    tag.classList.remove('highlight')
}







