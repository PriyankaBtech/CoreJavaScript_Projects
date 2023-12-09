// Add circle to cursor and change it's color as cursor moves on the screen.

const cursor = document.querySelector('.cursor');
const colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D']

document.addEventListener('mousemove', (e) => {
  // Pick a random color from the array
  const randomColor = colors[Math.floor(Math.random() * colors.length)]

  // Update the cursor's background color
  cursor.style.backgroundColor = randomColor

  // Position the cursor exactly at the mouse coordinates
  cursor.style.left = `${e.clientX}px`
  cursor.style.top = `${e.clientY}px`
})


/*************************** Another Approch ************************************/                                               


// document.addEventListener('mousemove', (e) => {  
//   cursor.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
//   cursor.style.left = `${e.clientX}px`;
//   cursor.style.top = `${e.clientY}px`;
// });




