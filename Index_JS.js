$(document).ready(function() {

  let images = [
    "JS/Image_Carosel/CaroselImage1.JPG",
    "JS/Image_Carosel/CaroselImage2.JPG",
    "JS/Image_Carosel/CaroselImage3.JPG"
  ];

  let index = 0;

  function showImage() {
    $("#slide").attr("src", images[index]);
  }

  $("#nextImage").click(function () {
    index++;
    if (index >= images.length) {
      index = 0;
    }
    showImage();
  });

  $("#prevImage").click(function () {
    index--;
    if (index < 0) {
      index = images.length - 1;
    }
    showImage();
  });

  // Auto-slide every 3 seconds
  setInterval(function () {
    index++;
    if (index >= images.length) {
      index = 0;
    }
    showImage();
  }, 3000);

});