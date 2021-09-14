let currentImageIndex = 0, //banner 
    currentImageTitleIndex= 0,// titulo do banner
    
    images = document.querySelectorAll('.slider_caroussel_container img')
    max = images.length;

    titles = document.querySelectorAll('.slider_caroussel_container p')
    max2 = titles.length;

function nextImage() {
    images[currentImageIndex]
        .classList.remove("selected")   

    titles[currentImageTitleIndex]
        .classList.remove("selected")

    currentImageIndex++
    currentImageTitleIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")

    if(currentImageTitleIndex >=max2)
        currentImageTitleIndex=0
    
    titles[currentImageTitleIndex]
        .classList.add("selected")
}

document.getElementById("btn").addEventListener("click", nextImage)


