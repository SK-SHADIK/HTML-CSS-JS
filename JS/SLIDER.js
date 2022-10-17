 //AUTO SLIDESHOW
 var indexValue = 0;
 function slideShow() {
     setTimeout(slideShow, 2500);
     var x;
     const img = document.querySelectorAll("img");
     for(x=0; x < img.length; x++){
         img[x].style.display = "none";
     }
     indexValue++;
     if(indexValue > img.length){indexValue = 1}
     img[indexValue -1].style.display = "block";
 }
 slideShow();

 //MANUAL

 var indexValue = 1;
 showImg(indexValue);
 function btm_slide(e){showImg(indexValue = e);}
 function slide_slide(e){showImg(indexValue += e);}

 function showImg(e){
     var i;
     const img = document.querySelectorAll('img');
     const sliders = document.querySelectorAll('.btm-sliders span');
     if (e > img.length){indexValue = 1}
     if (e < 1){indexValue = img.length}

     for (i=0; i < img.length; i++){
         img[i].style.display = "none";
     }
     for (i=0; i < sliders.length; i++){
         sliders[i].style.background = "rgba(255, 255, 255, 0.1)";
     }
     img[indexValue-1].style.display = "block";
     sliders[indexValue-1].style.background = "white";
 }