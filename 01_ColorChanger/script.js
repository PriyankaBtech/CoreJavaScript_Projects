// Background color changer

const colorButton = document.querySelectorAll('.button') // NodeList

// apply loop on button
colorButton.forEach(function(button) {
    //console.log(button)
    button.addEventListener('click', function(e) {
        // look on browser console
        console.log(e)
        console.log(e.target)
        // green
        if (e.target.id === 'green') {
            document.body.style.backgroundColor = e.target.id           
        }
        // pink
        if (e.target.id === 'pink') {
            document.body.style.backgroundColor = e.target.id           
        }
        // blue
        if (e.target.id === 'blue') {
            document.body.style.backgroundColor = e.target.id           
        }
        // yellow
        if (e.target.id === 'yellow') {
            document.body.style.backgroundColor = e.target.id           
        }
        // purple
        if (e.target.id === 'purple') {
            document.body.style.backgroundColor = e.target.id           
        }      

    })
})