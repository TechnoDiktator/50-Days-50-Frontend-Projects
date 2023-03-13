const smallCups = document.querySelectorAll('.cup-small')
const listers = document.getElementById('litres')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')


updateBigCup()



smallCups.forEach((cup , idx)=>{

    console,console.log(idx);
    cup.addEventListener('click' , () => {
        highlightcups(idx)
    })

})





function highlightcups(idx){

    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full') ){
        idx--
    }

    smallCups.forEach((cup , idx2) => {

        if(idx2 <= idx){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })

    updateBigCup()

}


function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    console.log(fullCups)
    const totalCups = smallCups.length

        if(fullCups ===0){
            percentage.style.visibility = 'hidden'
            percentage.style.height = 0

        }else{
            percentage.style.visibility = 'visible'    //330 is the height of the big cup in pxls
            percentage.style.height = `${fullCups/totalCups*330}px`
            percentage.innerText = `${fullCups/totalCups*100}%`
            
        }

        if(fullCups === totalCups){
            remained.style.visibility = 'hidden'
            remained.style.height = 0
        }else{
            remained.style.visibility = 'visible'
            listers.innerText = `${(1- 250 * fullCups / 2000)*100}%`
        }


}























