document.getElementById('btn').addEventListener('click', getImages)

async function getImages() {
  const contentDiv = document.querySelector('.content')
  contentDiv.innerHTML = '' // Clear existing images

  try {
    const response = await fetch('https://picsum.photos/v2/list')
    const data = await response.json();
    //console.log(data)

    data.forEach(image => {
      const imgElement = document.createElement('img')
      imgElement.src = image.download_url
      //console.log(imgElement)
      
      contentDiv.appendChild(imgElement)

    })
  } catch (error) {
    console.error('Error fetching images:', error)
  }
  
}
