let addBtn = document.getElementById('add-btn')
addBtn.addEventListener('click', (e) => { // function for add value
    console.log(e)
    let currentBtn = e.currentTarget
    let currentInput = currentBtn.previousElementSibling
    console.log(currentInput.value)
})