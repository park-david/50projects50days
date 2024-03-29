const container = document.getElementById('container')
const colors = ['salmon', 'yellow', 'lightgreen', 'pink', 'teal', 'lightblue']
const SQUARES = 700

// TODO: add a color selection box that changes colors

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element)  {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${cololr}`
}

function removeColor(element) {
    element.style.background = '#222222'
    element.style.boxShadow = 'box-shadow: 0 0 2px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}