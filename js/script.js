function hideStormlight() {
  let selector = document.getElementById("selector");
  let x = document.getElementById("sa-series");
  let y = document.getElementById("mistborn-series");
  let z = document.getElementById("elantris-series");
  if (x.style.display === "block") {
    selector.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      x.style.display = "none";
    }, 750);
  } else {
    x.style.display = "block";
    y.style.display = "none";
    y.style.opacity = 0;
    z.style.display = "none";
    z.style.display = 0;
    x.scrollIntoView({ behavior: "smooth" });
    fadeInSa();
  }
}

function hideMistborn() {
  let selector = document.getElementById("selector");

  let x = document.getElementById("sa-series");
  let y = document.getElementById("mistborn-series");
  let z = document.getElementById("elantris-series");
  if (y.style.display === "block") {
    selector.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      y.style.display = "none";
    }, 750);
  } else {
    x.style.display = "none";
    x.style.display = 0;
    y.style.display = "block";
    z.style.display = "none";
    z.style.display = 0;
    y.scrollIntoView({ behavior: "smooth" });
    fadeInMb();
  }
}

function hideElantris() {
  let selector = document.getElementById("selector");
  let x = document.getElementById("sa-series");
  let y = document.getElementById("mistborn-series");
  let z = document.getElementById("elantris-series");
  if (z.style.display === "block") {
    selector.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      z.style.display = "none";
    }, 750);
  } else {
    x.style.display = "none";
    x.style.display = 0;
    y.style.display = "none";
    y.style.display = 0;
    z.style.display = "block";
    z.scrollIntoView({ behavior: "smooth" });
    fadeInEl();
  }
}

function openContact() {
  document.getElementById("contactForm").style.display = "block";
}

function closeContact() {
  document.getElementById("contactForm").style.display = "none";
}

function openNewsletter() {
  document.getElementById("newsletterForm").style.display = "block";
}

function closeNewsletter() {
  document.getElementById("newsletterForm").style.display = "none";
}

function appearifySelector() {
  let select = document.getElementById("series-selector");

  select.style.animation = "fadeIn 1s";
  // console.log("Hola buenas");
  // setTimeout(() => {
  //   select.style.visibility = "visible";
  // }, 250);
  // select.style.transition = "all 0.3s ease";
}

function toggleMenu() {
  const HEADER = document.querySelector('.header');
  HEADER.classList.toggle('open');
}


function fadeInSa() { 
  var fade = document.getElementById("sa-series"); 
  var opacity = 0; 
  var intervalID = setInterval(function() { 

      if (opacity < 1) { 
          opacity = opacity + 0.1 
          fade.style.opacity = opacity; 
      } else { 
          clearInterval(intervalID); 
      } 
  }, 200); 
} 

function fadeInMb() { 
  var fade = document.getElementById("mistborn-series"); 
  var opacity = 0; 
  var intervalID = setInterval(function() { 

      if (opacity < 1) { 
          opacity = opacity + 0.1 
          fade.style.opacity = opacity; 
      } else { 
          clearInterval(intervalID); 
      } 
  }, 200); 
} 

function fadeInEl() { 
  var fade = document.getElementById("elantris-series"); 
  var opacity = 0; 
  var intervalID = setInterval(function() { 

      if (opacity < 1) { 
          opacity = opacity + 0.1 
          fade.style.opacity = opacity; 
      } else { 
          clearInterval(intervalID); 
      } 
  }, 200); 
} 