const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

console.log(img)

let idx = 0

let interval = setInterval(run, 3000)

function run() {
    idx++

    changeImage()
}

// TODO: after the last image of carousel, it will rewind back to first image, fix to keep same transition even when carousel restarts

function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

leftBtn.addEventListener('click', () => {
    idx--

    changeImage()
    resetInterval()
})

rightBtn.addEventListener('click', () => {
    idx++

    changeImage()
    resetInterval()
})