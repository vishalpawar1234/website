// About Us button
document.getElementById("aboutUs").addEventListener("click",function(){
    window.location.href = "home.html";
  })
  // About Us button ended
  
  // Career button started
  document.getElementById("CAREERS").addEventListener("click",function(){
    window.location.href = "CAREERS.html";
  })
  // Career button ended

  
// Search button Started
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  function toggleSearch() {
    var searchInput = document.getElementById("searchInput");
    var searchIcon = document.getElementById("searchIcon");
    var cancelButton = document.getElementById("cancelButton");
    // searchInput.style.display="block";
    if (searchInput.style.display === "block") {
      searchInput.style.display = "none";
      searchIcon.className ="fa fa-search";
      cancelButton.style.display = "none";
     
    } else {
      searchInput.style.display = "block";
      searchIcon.className ="fa fa-times";
      cancelButton.style.display = "inline-block";
    }
  }
  
  function cancelSearch(){
    var searchInput = document.getElementById("searchInput");
    var searchIcon = document.getElementById("searchIcon");
    var cancelButton = document.getElementById("cancelButton");
  
    searchInput.value ="";
    searchInput.style.display="none";
    searchIcon.className ="fa fa-search";
    cancelButton.style.display = "none";
  
  }
  // Search button ended


  
  // Slider started
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

// Slider Ended 