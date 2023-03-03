// Opacity Navbar

window.onscroll = function() {
    const header = document.querySelector('.navbar');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav){
        header.classList.add('opacity-50');
    } else {
        header.classList.remove('opacity-50');
    }
}


//Nav Link

let links = document.querySelectorAll('li a');


for (const link of links) {
    link.addEventListener("click", function () {
            for (const link of links) {
        link.classList.remove('active');
            }
        link.classList.add('active');
    });
  }

  AOS.init({
    duration: 800,
  });