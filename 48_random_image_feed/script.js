const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 10
const generatedSizes = new Set()


// for loop
// for(let i = 0; i < rows * 3; i++) {
//     const img = document.createElement('img')
//     const randomSize = getRandomSize()

//     // if generated size is not in the set, image will be added else repeat until non duplicate number, keep going until rows * 3
//     if (!generatedSizes.has(randomSize)) {
//         img.src = `${unsplashURL}${getRandomSize()}`
//         container.appendChild(img)
//     } else {
//         i--
//     }
// }

// while loop
let i = 0
while(i < rows * 3) {
    const img = document.createElement('img')
    const randomSize = getRandomSize()

    // check to see if number is inside set
    if (!generatedSizes.has(randomSize)) {
        img.src = `${unsplashURL}${randomSize}`;
        container.appendChild(img);
        generatedSizes.add(randomSize);
        console.log(randomSize)
        i++; // Increment i only when a unique image is added
    }
}

function getRandomSize() {
    return `${getRandomNumber()}x${getRandomNumber()}`
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 300
}
