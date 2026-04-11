let images = ["Background5.mp4","background.png"];
let index = 0;
const bannerId = "Background_Image_Banner";

function prevImage(){
index--;
if (index < 0){
	index =images.length -1;
}
document.getElementById("Background_Image_Banner").src = images[index];
}

function nextImage(){
	index++;
	if (index >= images.length){
	index = 0;
}
document.getElementById("Background_Image_Banner").src = images[index];
}

setInterval(nextImage, 3000);


function showImages(){
	document.getElementById("Background_Image_Banner").style.display = "block";
}



