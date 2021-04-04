// function myFunction() {
//     var x = document.getElementById("nav_links");
//     if (x.style.visibility === "hidden") {
//         x.style.visibility = "visible";
//       } else {
//         x.style.visibility = "hidden";
//       }
//     }
    function openNav() {
      console.log("open now");
      document.querySelector(".nav_links").style.width = "150px";
    }
    
    /* Set the width of the side navigation to 0 */
    function closeNav() {
      document.querySelector(".nav_links").style.width = "0";
    }

    var images=new Array('img/Iceland-river.jpg','img/1-2.jpg','img/1-3.jpg');
    var dots = document.getElementsByClassName("w3-badge");
    console.log(dots);
    var slideIndex = 0;
    
    function currentDiv(n) {
      doSlideshow(slideIndex = n);
    }
    function doSlideshow(index){
        // $('.background')
        // .css('background-image','url("'+images[index]+'")');
        bg = document.querySelector(".background");
        bg.style.backgroundImage = 'url("'+images[index]+'"';
        
        for(var i=0;i<dots.length; i++){
          if(i==slideIndex){
            dots[slideIndex].style.backgroundColor = "orange";
          }
          else{
            dots[i].style.backgroundColor = "white";

          }
        }
    }
