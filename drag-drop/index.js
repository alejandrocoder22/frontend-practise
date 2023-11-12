const bars = document.querySelectorAll('.item')
const containerTwo = document.querySelector('.container-2')
const containerOne = document.querySelector('.container-1')


bars.forEach(bar => {
    let selected; 

bar.addEventListener('dragstart', (e) => {
    selected = e.target

    containerTwo.addEventListener('dragover', (e) => {
   e.preventDefault()

   containerTwo.addEventListener('drop', (e) => {
   containerTwo.appendChild(selected)
   selected = null
})
})
  containerOne.addEventListener('dragover', (e) => {
   e.preventDefault()

   containerOne.addEventListener('drop', (e) => {
   containerOne.appendChild(selected)
   selected = null
})
})
})






})

