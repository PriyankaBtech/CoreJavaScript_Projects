// CRUD

//# Create operation
let addBtn = document.getElementById('add-btn')
let topicList = document.getElementById('topic-list') // add in global, for give excess to mutltiple place

addBtn.addEventListener('click', (e) => { // function for add value

    if(topicList.children[0].className = "emptyMsg") {
        topicList.children[0].remove()
    }

    //console.log(e)
    let currentBtn = e.currentTarget  
    let currentInput = currentBtn.previousElementSibling // grap the input value 
    let currentList = currentInput.value
    

    let createList = document.createElement('li')
    //createList.classList.add('list-group-item')
    createList.className = 'list-group-item d-flex justify-content-between'
    createList.innerHTML = `<h3>${currentList}</h3><div>
                        <button class="btn btn-edit bg-primary text-white" onclick="editTopic(this)">Edit</button>
                        <button class="btn btn-delete bg-danger text-white" onclick="removeTopic(this)">Delete</button>
                        </div>`

    //let topicList = document.getElementById('topic-list')
    topicList.appendChild(createList)
})

//# Delete operation
function removeTopic(currElement) {
    currElement.parentElement.parentElement.remove()
    
    //condition to give msg
    if(topicList.children.length <= 0) {
        let emptyMsg = document.createElement("h4")
        emptyMsg.classList.add("emptyMsg")
        emptyMsg.textContent = "No topic present, please add new topic"
        emptyMsg.style.color = "white"
        topicList.appendChild(emptyMsg)
    }
}

//# Update operation
function editTopic(currElement) {
    //console.log(currElement.parentElement.previousElementSibling) // h3

    if(currElement.textContent === "Done") {
        currElement.textContent = "Edit"
        let currTopicName = currElement.parentElement.previousElementSibling.value
        // create heading
        let currHeading = document.createElement('h4')
        currHeading.textContent = currTopicName
        currElement.parentElement.parentElement.replaceChild(currHeading, currElement.parentElement.previousElementSibling)

    } else {
        currElement.textContent = "Done"
        let currTopicName = currElement.parentElement.previousElementSibling.textContent
        // create input
        let currentInput = document.createElement('input')
        currentInput.type = "text"
        currentInput.placeholder = "write topic"
        currentInput.className = "update-input"
        currentInput.value = currTopicName
        console.log(currentInput)
    
       currElement.parentElement.parentElement.replaceChild(currentInput, currElement.parentElement.previousElementSibling)       
    }
  
}