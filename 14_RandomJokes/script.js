document.getElementById('getJoke').addEventListener('click', getChuckNorrisJoke)

async function getChuckNorrisJoke() {
  const displayJoke = document.getElementById('display-joke')
  const jokeButton = document.getElementById('getJoke')

  try {
    // Disable the button while fetching
    jokeButton.disabled = true

    const response = await fetch('https://api.chucknorris.io/jokes/random')
    const data = await response.json()

    displayJoke.textContent = data.value

  } catch (error) {
    console.error('Error fetching Chuck Norris joke:', error)
    displayJoke.textContent = 'Oops! Something went wrong. Please try again.'

  } finally {
    // Enable the button after fetching
    jokeButton.disabled = false
  }
}
