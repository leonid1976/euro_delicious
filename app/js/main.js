  document.addEventListener('DOMContentLoaded', function() {




(function ShowSecondMenu() {
  let shopToggleButton = document.querySelector(".storefront .cmn-toggle-switch__htx");
  
  let menuToggleButton = document.querySelector(".menufront .cmn-toggle-switch__htx");  
  
  let productsToggleButton = document.querySelector(".products__content .cmn-toggle-switch__htx");
  
  let deliveryToggleButton = document.querySelector(".deals .cmn-toggle-switch__htx");
  
  if (document.body.classList.contains("main-page")) {
      shopToggleButton.addEventListener("click", toggleMenu);
      menuToggleButton.addEventListener("click", toggleMenu);
  } else {
      productsToggleButton.addEventListener("click", toggleMenu);
      deliveryToggleButton.addEventListener("click", toggleMenu);
  } 
  




  function toggleMenu(event) {
    let target = this;

    let overlayElement = document.querySelector(".global-overlay");
    let bodyElement = document.body;
    
    function menuSwitchOn() {

      target.classList.add("active");   //change button to cross
      overlayElement.classList.remove("noActive");  //show overlay  
      overlayElement.addEventListener("click", handleOverlay);
      
   //   bodyElement.classList.add("stop-scrolling"); // stop scrolling 
      
      target.parentNode.classList.add("opened");
    }
    
    function menuSwithOff() {
     
      target.classList.remove("active");  //change button to normal 
      overlayElement.removeEventListener("click", handleOverlay);      
      overlayElement.classList.add("noActive");  //hide overlay 
    //  bodyElement.classList.remove("stop-scrolling"); // stop scrolling  
      
      target.parentNode.classList.remove("opened");      
    }

    function handleOverlay() {
        menuSwithOff();  
    }

    if(target.classList.contains("active")) {
        menuSwithOff();

    } else {
        menuSwitchOn();
    }
  } 
})();

let arrow = document.querySelector(".header__arrow-down");  
arrow.addEventListener('click', scrollPage);

function scrollPage(event) {
  event.preventDefault();
  let target = this;

 let id = target.getAttribute("href").slice(1);

  smoothScroll(id);
  
}

    
//    startModal("This website is a part of porfolio. For non-commercial use");
  
}, false)
