const userInput = document.getElementById('user-input')
const userCard = document.getElementById('user-card')
let debounceTimeout

userInput.addEventListener('input', async () => {
  clearTimeout(debounceTimeout)
  debounceTimeout = setTimeout(async () => {
    const searchTerm = userInput.value.trim()

    if (searchTerm.length > 0) {
      try {
        const response = await fetch(`https://randomuser.me/api/?results=1&seed=${searchTerm}`)
        const { results } = await response.json()
        const user = results[0]
        console.log(user)

        displayUserCard(user)
      } catch (error) {
        console.error('Error fetching user:', error)
        userCard.style.display = 'none'
      }
    } else {
      userCard.style.display = 'none'
    }
  }, 500) // Debounce time: 500ms
})

function displayUserCard(user) {
  const { name, picture, location } = user

  userCard.innerHTML = `
    <img src="${picture.large}" alt="${name.first} ${name.last}">
    <h2>${name.first} ${name.last}</h2>
    <p>${location.city}, ${location.country}</p>
  `

  userCard.style.display = 'block'
}
