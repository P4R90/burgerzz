function randomImage() {
    var imageDir = "./img/"; // directory where images are stored
    var images = ["americana.jpg", "dariog.jpg"]; // array of image filenames
    var randomIndex = Math.floor(Math.random() * images.length); // random index from array
    var imagePath = imageDir + images[randomIndex]; // path to random image
    document.getElementById("image").src = imagePath; // set image source
  }