document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector(".nav-container");
    var navItems = document.querySelectorAll('.nav-item');
    var navMedias = document.querySelectorAll('.nav-media-item');
    var logo = document.querySelector('.logo > img')
    window.addEventListener("scroll", function() {
        var scrollPosition = window.scrollY;

        if (scrollPosition > 1) {
            header.style.backgroundColor = "#ffffff"; 
            header.style.boxShadow = '0px 1px 4px #888888';
            header.style.height = "65px"
            for (navItem of navItems){
                navItem.style.color = "#000"
            }
            for (navMedia of navMedias){
                navMedia.style.color = "#000"
            }
            logo.src = '/assest/img/logo-black.png'
        } else {
            header.style.backgroundColor = "transparent";
            header.style.boxShadow = 'none'; 
            header.style.height = "100px"
            for (navItem of navItems){
                navItem.style.color = "#fff"
            }
            for (navMedia of navMedias){
                navMedia.style.color = "#fff"
            }
            logo.src = '/assest/img/logo-white.png'
        }
    });
});


