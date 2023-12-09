const inputField = document.getElementById('input-field')
const outputField = document.getElementById('output-field')
const buttons = document.querySelectorAll('.btn')

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonClass = button.classList[1]
    manipulateText(buttonClass)
  })
})

function manipulateText(style) {
  const inputValue = inputField.value
  let manipulatedText = inputValue

  switch (style) {
    case 'uppercase':
      manipulatedText = inputValue.toUpperCase()
      break
    case 'lowercase':
      manipulatedText = inputValue.toLowerCase()
      break
    case 'capitalize':
      manipulatedText = capitalizeWords(inputValue)
      break
    case 'bold':
      manipulatedText = `<b>${inputValue}</b>`
      break
    case 'italic':
      manipulatedText = `<i>${inputValue}</i>`
      break
    case 'underline':
      manipulatedText = `<u>${inputValue}</u>`
      break
    default:
      break
  }

  outputField.innerHTML = manipulatedText
}

function capitalizeWords(input) {
  return input.replace(/\b\w/g, (match) => match.toUpperCase())
}
