let images = ["Background5.mp4","background.png"]; //creating an array of imagees to sort through
let index = 0; //setting index to 0 to change images 
const bannerId = "Background_Image_Banner"; //sets deafult image

function prevImage(){ //going to previous image 
index--; //taking away index
if (index < 0){ //checks if index is less than zero
	index =images.length -1; //goes to last image in index
}
document.getElementById("Background_Image_Banner").src = images[index]; //replaces image 
}

function nextImage(){ //does the same thing as prev but opposite 
	index++; //adds index
	if (index >= images.length){ //goes to first idex if greater than array length
	index = 0;
}
document.getElementById("Background_Image_Banner").src = images[index]; //replaces image
}

setInterval(nextImage, 3000); //changes image, automatically 


function showImages(){
	document.getElementById("Background_Image_Banner").style.display = "block"; //loads the images 
}



