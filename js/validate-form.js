function showCommentForm() {
  document.getElementById('add-comment').style.visibility = 'visible';
}

function closeCommentForm() {
  document.getElementById('add-comment').style.visibility = 'hidden';
}

function listenForValidation() {
  const COMMENT_FORM = document.getElementById("comment-form");
  COMMENT_FORM.addEventListener("submit", validatePersonalDataForm);
}

function validatePersonalDataForm(e) {
  const USERNAME = e.target.username.value;
  const EMAIL = e.target.email.value;
  const COMMENT = e.target.comment.value;

  let valid = true;

  if (!USERNAME) {
    document.getElementById("form-username").style.visibility = "visible";
    valid = false;
  } else {
    document.getElementById("form-username").style.visibility = "hidden";
  }

  if (!COMMENT) {
    document.getElementById("form-comment").style.visibility = "visible";
    valid = false;
  } else {
    document.getElementById("form-comment").style.visibility = "hidden";
  }

  if (!EMAIL || !EMAIL.includes("@")) {
    document.getElementById("form-email").style.visibility = "visible";
    valid = false;
  } else {
    document.getElementById("form-email").style.visibility = "hidden";
  }

  if (!valid) {
    e.preventDefault();
  } else {
    saveData(USERNAME, EMAIL, COMMENT);
  }
}

function saveData(username, email, comment) {
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("comment", comment);
  console.log("HOLA HOLA HEMOS GUARDADO ALGO");
}

listenForValidation();
