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


  // div change started
  window.onload = function(){
      document.getElementById('firstdiv').classList.add('active');

  }

      document.getElementById('firstdiv').addEventListener("click", ()=> {
        document.getElementById('firstdiv').style.backgroundColor="#2196F3 ";
        document.getElementById('secdiv').style.backgroundColor="white";
        document.querySelector('.grid-container.business').style.display = 'grid';
        document.querySelector('.industryList').style.display = 'none';
        document.getElementById('firstdiv').classList.add('active');

        document.getElementById('secdiv').classList.remove('active');

      })


      document.getElementById("secdiv").addEventListener("click", ()=> {
       document.getElementById('secdiv').style.backgroundColor="#2196F3 ";
       document.getElementById('firstdiv').style.backgroundColor="white";

       document.querySelector('.grid-container.business').style.display = 'none';
       document.querySelector('.industryList').style.display = 'block';

       document.getElementById('secdiv').classList.add('active');
      // Remove 'active' class from the other div
      document.getElementById('firstdiv').classList.remove('active');


       })
       // div change ended
      