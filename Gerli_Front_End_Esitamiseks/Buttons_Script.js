var slideIndex = 1;
    showDivs(slideIndex);
function NextPictureOnClick(n) {
    showDivs(slideIndex += n);
}
function showDivs(n) {
    var i;
    var ImageSliderPictures = document.getElementsByClassName("Image-Slider-Pictures");
    if (n > ImageSliderPictures.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = ImageSliderPictures.length}
    for (i = 0; i < ImageSliderPictures.length; i++) {
        ImageSliderPictures[i].style.display = "none";  
  }
        ImageSliderPictures[slideIndex-1].style.display = "block";  
}
