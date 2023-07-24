const clocks = document.querySelectorAll('.clock')

// for continue time changing
setInterval(function() {

    let date = new Date()
    let currentTimeString = date.toLocaleTimeString()

    // Loop through each clock element and update the time
    clocks.forEach(clock => {
      clock.textContent = currentTimeString
    })

}, 1000)

