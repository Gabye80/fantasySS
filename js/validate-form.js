function showCommentForm() {
  document.getElementById("add-comment").style.visibility = "visible";
}

function closeCommentForm() {
  document.getElementById("add-comment").style.visibility = "hidden";
  document.getElementById("form-username").style.visibility = "hidden";
  document.getElementById("form-email").style.visibility = "hidden";
  document.getElementById("form-comment").style.visibility = "hidden";
  document.getElementById("form-avatar").style.visibility = "hidden";
}

function clearCommentForm() {
  document.getElementById("new-username").value = "";
  document.getElementById("new-email").value = "";
  document.getElementById("new-comment").value = "";
  document.getElementById("avatar-comment").value = "";
  document.getElementById("avatar1").checked = false;
  document.getElementById("avatar2").checked = false;
  document.getElementById("avatar3").checked = false;
}

function validatePersonalDataForm() {
  const USERNAME = document.getElementById("new-username").value;
  const EMAIL = document.getElementById("new-email").value;
  const COMMENT = document.getElementById("new-comment").value;
  validateAvatar();

  let valid = true;

  if (!USERNAME) {
    document.getElementById("form-username").style.visibility = "visible";
    valid = false;
  } else {
    document.getElementById("form-username").style.visibility = "hidden";
  }

  if (!EMAIL || !EMAIL.includes("@")) {
    document.getElementById("form-email").style.visibility = "visible";
    valid = false;
  } else {
    document.getElementById("form-email").style.visibility = "hidden";
  }

  if (!COMMENT) {
    document.getElementById("form-comment").style.visibility = "visible";
    valid = false;
  } else {
    document.getElementById("form-comment").style.visibility = "hidden";
  }

  if (!valid) {
    preventDefault();
  } else {
    saveData(USERNAME, EMAIL, COMMENT);
  }
}

function saveData(username, email, comment) {
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("comment", comment);
  console.log("HOLA HOLA HEMOS GUARDADO ALGO");
  closeCommentForm();
  saveCommentToArray();
  clearCommentForm();
}

function validateAvatar() {
  const CHECKBOXES = document.querySelectorAll(
    '.avatar-checkbox input[type="checkbox"]'
  );
  const CHECKED_BOXES = Array.from(CHECKBOXES).filter(
    (CHECKBOX) => CHECKBOX.checked
  );

  if (CHECKED_BOXES.length !== 1) {
    document.getElementById("form-avatar").style.visibility = "visible";
    return null;
  } else {
    document.getElementById("form-avatar").style.visibility = "hidden";
    const AVATAR = CHECKED_BOXES[0].id;
    localStorage.setItem("avatar", AVATAR);
  }
}
