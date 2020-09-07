const $container = document.querySelector('.contents-container')
const winWidth = $container.offsetWidth
const winHeight = window.innerHeight
const $image = document.querySelectorAll('img')

const zIndex = array => {
  array.forEach(item => {
    item.addEventListener('mousedown', () => {
      item.style.zIndex = '5'
    })
    item.addEventListener('mouseup', () => {
      item.style.zIndex = '0'
    })
  })
}

zIndex($image)

// Drag and Drop

const dragMoveListener = event => {
  const target = event.target
  const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

interact('img').draggable({
  onmove: dragMoveListener
})

// Randomize Image size and position

const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) 
}

$image.forEach(image => {
  randomTop = getRandomNumber(0, 200)
  randomLeft = getRandomNumber(0, 400)
  image.style.top = randomTop + 'px'
  image.style.left = randomLeft + 'px'
})
