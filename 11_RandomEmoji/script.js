const emojiContainer = document.querySelector('#emoji');
const emojis = [
  '😆',
  '😅',
  '🤣',
  '😂',
  '😀',
  '🤑',
  '🤨',
  '🙂',
  '😊',
  '😗',
  '😛',
  '😏',
  '🤥',
  '😴',
  '🥺',
  '😧',
  '😇',
  '😳',
  '🙃',
  '🥴',
  '🧐',
  '🤨',
  '😒',
  '🤔',
  '🤭',
  '🥰',
  '🤐',
  '👀',
  '🤔',
  '🤪',
  '🥲',
  '😃',
  '😁',
  '😬',
]

emojiContainer.addEventListener('mouseover', () => {
  // Change emoji on hover
  const randomIndex = Math.floor(Math.random() * emojis.length)
  emojiContainer.textContent = emojis[randomIndex]
  emojiContainer.style.transform = 'scale(1.3)'
  emojiContainer.style.filter = 'grayscale(0)'
})

emojiContainer.addEventListener('mouseout', () => {
  // Turn emoji into grayscale
  emojiContainer.style.transform = 'scale(1)'
  emojiContainer.style.filter = 'grayscale(1)'
})


/**************************** Another Approch *************************************/

// emojiContainer.addEventListener('mouseover', () => {
//     const randomIndex = Math.floor(Math.random() * emojis.length);
//     emojiContainer.textContent = emojis[randomIndex]
// })
  
// emojiContainer.addEventListener('mouseout', () => {
//     emojiContainer.textContent = '🤣'
// })