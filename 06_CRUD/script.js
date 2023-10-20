// Create operation

let addBtn = document.getElementById('add-btn')
addBtn.addEventListener('click', (e) => { // function for add value
    //console.log(e)
    let currentBtn = e.currentTarget
    let currentInput = currentBtn.previousElementSibling // grap the input value
    let currentList = currentInput.value

    let createList = document.createElement('li')
    //createList.classList.add('list-group-item')
    createList.className = 'list-group-item d-flex justify-content-between'
    createList.innerHTML = `<h3>${currentList}</h3><div>
                        <button class="btn btn-edit">Edit</button>
                        <button class="btn btn-delete" onclick="removeTopic(this)">Delete</button>
                        </div>`

    let topicList = document.getElementById('topic-list')
    topicList.appendChild(createList)
})

// Delete operation

function removeTopic(currElement) {
    currElement.parentElement.remove()
    
}