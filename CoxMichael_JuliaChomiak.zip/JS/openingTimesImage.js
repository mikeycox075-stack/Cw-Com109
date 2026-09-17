$(document).ready(function() {

  let images = [
    "JS/Image_Carosel/CaroselImage1.JPG",
    "JS/Image_Carosel/CaroselImage2.JPG",
    "JS/Image_Carosel/CaroselImage3.JPG"
  ]; //creating an array of images. 

  let index = 0; //creating an index.

  function showImage() {
    $("#slide").attr("src", images[index]); //loading the image 
  }

  $("#nextImage").click(function () {
    index++;
    if (index >= images.length) {
      index = 0;
    }
    showImage(); //cycles through the images until the index reaches the length of the array. 
  });

  $("#prevImage").click(function () {
    index--;
    if (index < 0) {
      index = images.length - 1;
    }
    showImage(); //Cycles backwards through the images until it hits 
    //array location 0, if it goes beyond that it reverse to the second to last array location. 
  });

  $("#imageNextButton").click(function () {
    index--;
    if (index < 0) {
      index = images.length - 1;
    }
    showImage(); //cycles to the next image, this is for when clicking on the image itself. 
  });
  imageNextButton

  // Auto-slide every 3 seconds
  setInterval(function () { //goes through the images in a set amount of time. 
    index++;
    if (index >= images.length) {
      index = 0;
    }
    showImage();//loads the image. 
  }, 3000);

});//end of method. 