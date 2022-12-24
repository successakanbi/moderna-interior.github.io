    function myFunction() {
        var x = document.getElementById("nav-bar");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        } 
    }

    function closeNav(){
        document.getElementById("drpdwn").style.display="none";
        location.reload();
        
    }
    
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    function showSlides(n){
        let i;
        let slides = document.getElementsByClassName("slds");
        let dots = document.getElementsByClassName("dmcrsr");
        let captionText = document.getElementById("cptn");
        if (n > slides.length) {slideIndex = 1}
        if(n < 1) {slideIndex = slides.length}
        for(i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
        }
        for(i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("active", "");   
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        captionText.innerHTML = dots[slideIndex-1].alt;

    }
