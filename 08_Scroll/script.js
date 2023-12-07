const indicator = document.querySelector('.progress');

    window.addEventListener('scroll', () => {
      const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const scrollProgress = (scrollHeight / (documentHeight - windowHeight)) * 100;
      indicator.style.width = `${scrollProgress}%`;
});

/*
 NOTE : In JavaScript, when dealing with scrolling, both window and document objects can be used, but they refer to different things.
window: Refers to the global window object, and window.scrollY or window.scrollTop can be used to get the vertical scroll position.
        It's widely supported across browsers.
document: Refers to the DOM document object, and document.documentElement.scrollTop or document.body.scrollTop can be used to get the vertical scroll position.
          The document.documentElement is generally more widely supported.
*/


/**************************** Another Approch ****************************************** */

// const sections = document.querySelectorAll('section');
// console.log(sections) // NodeList(30)

// // Get the scroll indicator element
// const indicator = document.querySelector('.progress');
// console.log(indicator) // div.progress

// // Calculate the total height of all sections
// const totalHeight = Array.from(sections).reduce((acc, section) => acc + section.offsetHeight, 0);
// console.log(totalHeight) // 24030

// // Update scroll indicator on scroll
// document.addEventListener('scroll', () => {
//   const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
//   const scrollProgress = (scrollHeight / (totalHeight - window.innerHeight)) * 100;
//   indicator.style.width = `${scrollProgress}%`;
// });