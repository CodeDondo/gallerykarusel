let imageArrey = ['assets/img/elephant.jpg', 'assets/img/great-white.jpg', 'assets/img/koala.jpg', 'assets/img/smithi.jpg', 'assets/img/tiger.jpg']

let currentImage = 0

let myGalleryImageElement = document.getElementById('galleryImage')

let myForwardButton = document.getElementById('forward')

let myBackButton = document.getElementById('back')


myForwardButton.addEventListener('click', ()=>{

    currentImage = currentImage +1

    if (currentImage >= imageArrey.length) {
        currentImage = 0
        
    }

    changeImage()

})

myBackButton.addEventListener('click', ()=>{


currentImage = currentImage -1

    if (currentImage == -1) {
        currentImage = 4
        
    }

    changeImage()

})

function changeImage(){

    myGalleryImageElement.src = imageArrey[currentImage]
}

myGalleryImageElement.src = imageArrey [currentImage]