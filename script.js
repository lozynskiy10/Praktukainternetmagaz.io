function changeImage(galleryId, n) {
    var i;
    var gallery = document.getElementById(galleryId);
    var images = gallery.getElementsByTagName("img");

    for (i = 0; i < images.length; i++) {
        images[i].classList.remove("active");
    }

    currentImage = (currentImage + n + images.length) % images.length;
    images[currentImage].classList.add("active");
}


var currentImage = 0;
changeImage('product1', 0);


currentImage = 0; 
changeImage('product2', 0);




function changeImage(galleryId, step) {
    const gallery = document.getElementById(galleryId);
    const images = gallery.querySelectorAll('.product-image');
    let currentIndex = 0;

    images.forEach((image, index) => {
        if (image.classList.contains('active')) {
            currentIndex = index;
            image.classList.remove('active');
        }
    });

    const newIndex = (currentIndex + step + images.length) % images.length;
    images[newIndex].classList.add('active');
}


