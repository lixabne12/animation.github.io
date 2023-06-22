// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Select elements
    const backgroundImg = document.getElementById("background-img");
    const femaleCharacterImg = document.getElementById("female-character-img");
    const headline1Img = document.getElementById("headline1-img");
    const headline2Img = document.getElementById("headline2-img");
    const subheadlineImg = document.getElementById("subheadline-img");
    const learnMoreBtn = document.getElementById("learn-more-btn");
    const logoImg = document.getElementById("logo-img");
    const replayBtn = document.getElementById("replay-btn");
  
    // Initial animations on load
    backgroundImg.style.opacity = 1;
    
    //
    setTimeout(function(){
        femaleCharacterImg.style.opacity = 1;
    },2000);
    // Delayed animations
    setTimeout(function() {
      femaleCharacterImg.style.opacity = 0;
      headline1Img.style.left = "-100%";
    }, 6000);
  
    setTimeout(function() {
      headline2Img.style.right = "0";
      subheadlineImg.style.opacity = 1;
      learnMoreBtn.style.opacity = 1;
      logoImg.style.right = "0";
    }, 7000);
  
    setTimeout(function() {
      replayBtn.style.opacity = 1;
    }, 8000);
  
    // Replay animation on button click
    replayBtn.addEventListener("click", function() {
      window.location.reload(); // Refresh the banner to replay the animation
    });
  });
  
  