function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, 17)
    function updateNumber() {
      if (currentNumber >= finalNumber) {
        clearInterval(interval)
      } else {
        let inc = Math.ceil(finalNumber / (duration / 17))
        if (currentNumber + inc > finalNumber) {
          currentNumber = finalNumber
          clearInterval(interval)
        } else {
          currentNumber += inc
        }
        callback(currentNumber)
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    animateNumber(24500, 5000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('flollow-count').innerText = formattedNumber
    })
    
    animateNumber(432, 5000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('shop-count').innerText = formattedNumber
    })
    
    animateNumber(721, 5000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('bank-count').innerText = formattedNumber
    })
    animateNumber(571, 5000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('time-count').innerText = formattedNumber
    })
  })