const title = document.getElementById('title')
const author = document.getElementById('author')
const year = document.getElementById('year')
const bookList = document.getElementById('book-list')
const bookForm = document.getElementById('book-form')

bookForm.addEventListener('submit', function (e) {
  e.preventDefault() // Prevent the default form submission behavior

  // Validate input fields
  if (!title.value || !author.value || !year.value) {
    alert('Please fill in all fields')
    return
  }

  // Create a new book entry
  const bookEntry = document.createElement('section')
  bookEntry.innerHTML = `
    <div>${title.value}</div>
    <div>${author.value}</div>
    <div>${year.value}</div>
  `
  bookList.appendChild(bookEntry)

  // Clear input fields after adding the book
  title.value = ''
  author.value = ''
  year.value = ''
})



/************************** Another Approch ***********************************/


// function createBookEntry(title, author, year) {
//     const bookEntry = document.createElement('section');
//     bookEntry.className = 'book-entry' // Add a class for styling
//     bookEntry.innerHTML = `
//       <div>${title}</div>
//       <div>${author}</div>
//       <div>${year}</div>
//     `
//     return bookEntry
//   }
  
//   bookForm.addEventListener('submit', function (e) {
//     e.preventDefault()
  
//     if (!title.value || !author.value || !year.value) {
//       alert('Please fill in all fields')
//       return
//     }
  
//     const newBookEntry = createBookEntry(title.value, author.value, year.value)
//     bookList.appendChild(newBookEntry)
  
//     bookForm.reset()
//   })

