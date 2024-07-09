document.addEventListener("DOMContentLoaded", function() {
    var images = [
        "/img/headers/01.jpg",
        "/img/headers/02.jpg",
        "/img/headers/03.jpg",
        "/img/headers/04.jpg",
        "/img/headers/05.jpg",
        "/img/headers/06.jpg",
        "/img/headers/07.jpg",
        "/img/headers/08.jpg",
        "/img/headers/09.jpg",
        "/img/headers/010.jpg",
        "/img/headers/011.jpg",
        "/img/headers/012.jpg",
        "/img/headers/013.jpg",
        "/img/headers/014.jpg"
    ];

    function setRandomBackground(element) {
        var randomIndex = Math.floor(Math.random() * images.length);
        var randomImage = images[randomIndex];
        element.style.backgroundImage = "url('" + randomImage + "')";
    }

    var imgHeader = document.querySelector('.img_header');
    setRandomBackground(imgHeader);
});