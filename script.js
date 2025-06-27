window.onscroll=function(){
    var navbar=document.querySelector(".navbar");
    if(window.scrollY>50){
        navbar.style.backgroundColor="black";
    }
    else{
  navbar.style.backgroundColor="transparent";
    }
    };
