var imagesarray = $(".images_wedding_gallery_item")
$(".images_wedding_gallery_wrapper").remove()
var max = 12;
var imgboxarray = 0;
var maximg = 0;
var b = 0;
$(document).ready(function(){
  for (var i = 0; i < imagesarray.length; i++) {
    maximg = imagesarray.length/12
    if(i<=maximg){
      $(".imgboxhide").append("<div class='images_wedding_gallery_wrapper'></div>")
    }
    imgboxarray = $(".images_wedding_gallery_wrapper");
  }
  for (var i = 0; i < imagesarray.length; i++) {
    if(i<max){
      $(imgboxarray[b]).append(imagesarray[i])
      console.log(i)
      if(i>=max-1){
        b+=1;
        max+=12;
        console.log("exav")
      }
    }
  }
})
