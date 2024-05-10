
    function bookNow() {
        var element = document.getElementById("book");
        element.scrollIntoView({behavior:"smooth",block:"start"})
    }

    function rickroll() {
        
        //alert("Redirecting to calendar page...");
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    }

    function viewPortfolio() {
        // Get the target element
        var element = document.getElementById("Portfolio");
      
        // Scroll to the element
        element.scrollIntoView({ behavior: "smooth"});
    }    
    function Facebookpage(){

        alert("Redirecting to Facebook Page...");
        window.open('https://www.facebook.com/chriscandids', '_blank');
    }
    function scrollto() {
        // Get the target element
        var element = document.getElementById("Portfolio");
      
        // Scroll to the element
        element.scrollIntoView({ behavior: "smooth"});
    } 
    function shrek(){
        window.open(
            'https://gifdb.com/images/high/shrek-donkey-meme-scary-distorted-faces-op1x1tn67689vrd8.webp'
        )    
    }
    function smoothScrollTo(elementId) {
        $('html, body').animate({
            scrollTop: $("#" + elementId).offset().top
        }, 1000);
        console.log("helloworld"); // Adjust the duration of the animation as needed
    }
//console.log("hello world");