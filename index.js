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

// Slider Started
  let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  let intervalId; // Store interval ID for later use

  function showSlide(index) {
    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
  }

  function startSlider() {
    intervalId = setInterval(nextSlide, 5000); // Start automatic slide change
  }

  function stopSlider() {
    clearInterval(intervalId); // Clear the interval to stop automatic slide change
  }

  startSlider(); // Start the slider initially

  document.querySelector('.prev').addEventListener('click', function () {
    prevSlide();
    stopSlider(); // Stop slider when manually navigating slides
  });

  document.querySelector('.next').addEventListener('click', function () {
    nextSlide();
    stopSlider(); // Stop slider when manually navigating slides
  });

  function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
  }

  function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
  }

  // Detect when the viewport changes to mobile size
  window.addEventListener('resize', function () {
    if (window.innerWidth <= 600) {
      stopSlider(); // Stop slider when viewport is mobile size
    } else {
      startSlider(); // Restart slider when viewport is larger than mobile size
    }
  });
// Slider ended


