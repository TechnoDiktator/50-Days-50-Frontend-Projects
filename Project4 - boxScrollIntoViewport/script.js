const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll'  , checkBoxes)

checkBoxes()


function checkBoxes(){

    //
    console.log(window.innerHeight/5*4)  //basically we want the cards to apppear at 80 percent scroll of the window height
    const triggerBottom = window.innerHeight/5*4

    boxes.forEach(box => {

        //this method returns a rectangle that provides the info of the size of an element and its position in the viewport
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }

    })

}