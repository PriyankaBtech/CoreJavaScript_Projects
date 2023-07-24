const clock = document.querySelectorAll('.clock')

// for continue time changing

setInterval(function() {
    let date = new Date()
    clock.textContent = date.toLocaleTimeString();
    //console.log(clock)
}, 1000);