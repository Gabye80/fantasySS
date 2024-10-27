function hideStormlight() {
  var selector = document.getElementById("selector");
  var x = document.getElementById("sa-series");
  var y = document.getElementById("mistborn-series");
  var z = document.getElementById("elantris-series");
  if (x.style.display === "block") {
    selector.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      x.style.display = "none";
    }, 750);
  } else {
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
    x.scrollIntoView({ behavior: "smooth" });
  }
}

function hideMistborn() {
  var selector = document.getElementById("selector");

  var x = document.getElementById("sa-series");
  var y = document.getElementById("mistborn-series");
  var z = document.getElementById("elantris-series");
  if (y.style.display === "block") {
    selector.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      y.style.display = "none";
    }, 750);
  } else {
    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none";
    y.scrollIntoView({ behavior: "smooth" });
  }
}

function hideElantris() {
  var selector = document.getElementById("selector");
  var x = document.getElementById("sa-series");
  var y = document.getElementById("mistborn-series");
  var z = document.getElementById("elantris-series");
  if (z.style.display === "block") {
    selector.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      z.style.display = "none";
    }, 750);
  } else {
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
    z.scrollIntoView({ behavior: "smooth" });
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
