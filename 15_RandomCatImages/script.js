const catContainer = document.querySelector('.container')
const catButton = document.querySelector('.btn')

catButton.addEventListener('click', getRandomCat)

function getRandomCat() {
    
  fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
      const catImage = document.createElement('img');
      catImage.src = data[0].url
      catImage.alt = 'Random Cat'
      catImage.style.height = '400px'
      catImage.style.width = '400px'
      catImage.style.borderRadius = '15px'

      catContainer.innerHTML = '' // Clear previous cat images      
      catContainer.appendChild(catImage)
    })
    .catch(error => {
      console.error('Error fetching cat:', error);
      catContainer.innerHTML = 'Failed to fetch a cat. Please try again.'
    })
}
