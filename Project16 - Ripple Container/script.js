const buttons = document.querySelectorAll('.ripple')


buttons.forEach(button => {
    button.addEventListener('click'  , function(e) {

        //clientX , clientY : The coordinates of the mouse pointer when clicked:
        const x = e.clientX
        const y = e.clientY


        /*offsetTop read-only property returns
         the distance of the outer border of the current 
         element relative to the inner border of the top 
         of the offsetParent , the closest positioned 
         ancestor element. */
        //Get the offsetTop  , Left   position 
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft


        const xInsideButton = x - buttonLeft
        const yInsideButton  =  y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = (yInsideButton + 'px')
        circle.style.left = (xInsideButton + 'px')

        this.appendChild(circle)

        setTimeout(()=>{
            circle.remove()
        } , 600)


        //this is the position where we are vlicking inside the button
        console.log(xInsideButton , yInsideButton)
    })
})