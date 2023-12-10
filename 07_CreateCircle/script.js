document.addEventListener('click', (event) => {
    let circle = document.createElement("div")
    circle.style.backgroundColor = "green"
    circle.style.height = "100px"
    circle.style.width = "100px"
    circle.style.borderRadius = "50%"
    circle.style.position = "absolute"
    circle.style.left = (event.clientX - 50) + "px"
    circle.style.top = (event.clientY - 50) + "px"
    circle.style.transition = "0.5s"

    document.body.appendChild(circle)

    setTimeout(() => {
        document.body.removeChild(circle)
    }, 500)
})