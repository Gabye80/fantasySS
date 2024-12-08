let savedComments = [];

// NO POST ID IN HTML
// BUTTON FOR EACH COMMENT WHEN HOVERED OVER "EDIT" AND "DELETE"
// THE BUTTONS SEARCH FOR ELEMENT ID BASED ON VALUE??
// AND THEN JUST USUAL ARRAY JARGON

function saveCommentToArray() {
  // preventDefault();
  // const USERNAME = document.getElementById("new-username").value;
  // const COMMENT = document.getElementById("new-comment").value;
  // const POSTID = document.getElementById("post-id").value;

  const AVATAR = localStorage.getItem("avatar");
  const USERNAME = localStorage.getItem("username");
  const COMMENT = localStorage.getItem("comment");
  const POSTID = savedComments.length;
  const ISPOSTED = false;

  console.log(`I am saving ${USERNAME}`);
  console.log(`I am saving ${COMMENT}`);
  console.log(`I am saving ${POSTID}`);
  console.log(savedComments);

  savedComments.push({
    username: USERNAME,
    comment: COMMENT,
    postid: POSTID,
    isposted: ISPOSTED,
    avatar: AVATAR,
  });
  addForumComment();
}

function addForumComment() {
  console.log("ADD COMMENT HAS BEEN CALLED");

  let newCommentHTML = "";
  const FORUM_COMMENT = document.getElementById("forum");

  for (let i = 0; i < savedComments.length; i++) {
    if (savedComments[i].isposted == true) {
    } else {
      newCommentHTML += `
    <div class="forum-post">
        <div class="post-id">${savedComments[i].postid}</div>
        <div class="post-avatar">
          <img src="img/${savedComments[i].avatar}.png" alt="Avatar">
        </div>
        <div class="post-content">
          <div class="post-username" id="forum-username">
            <h1>${savedComments[i].username}</h1>
          </div>
          <div class="post-comment" id="forum-comment">
            <p>${savedComments[i].comment}</p>
          </div>
          <div class="post-date" id="forum-date">Just now</div>
          <div class="comment-buttons">
          <div class="edit-button">
            <button onclick="editForumComment(this)">Edit</button>
          </div>
          <div class="delete-button">
            <button onclick="removeForumComment(this)">Delete</button>
          </div>
          <div class="save-button">
            <button onclick="saveEditedComment(this)">Save</button>
          </div>
        </div>
        </div>
      </div>
    `;
    }
    savedComments[i].isposted = true;
  }
  FORUM_COMMENT.innerHTML += newCommentHTML;
}

function removeForumComment(element) {
  let buttonParent = element.parentNode.parentNode.parentNode.parentNode;
  let postId = buttonParent.children[0].innerHTML;
  console.log(postId);

  buttonParent.innerHTML = "This comment has been deleted.";
  setTimeout(() => {
    buttonParent.className = "deleted";
  }, 750);
    
  // Can also try with display.hidden if Tibu doesn't like this.
}

function editForumComment(element){

  let buttonParent = element.parentNode.parentNode.parentNode.parentNode;
  let postId = buttonParent.children[0].innerHTML;
  let commentParent = element.parentNode.parentNode.parentNode;
  let postComment = commentParent.children[1];
  let saveButton = element.parentNode.parentNode.children[2];
  console.log("BEFORE CHANGE")
  console.log(postId);
  console.log(buttonParent);
  console.log(postComment);
  // console.log(savedComments[postId].comment);

  postComment.contentEditable= 'true';
  saveButton.className += " save-button-show";
  postComment.className += " post-comment-editing";
  console.log(saveButton);
  // console.log("AFTER CHANGE");
  // console.log(postId);
  // console.log(buttonParent);
  // console.log(postComment);
  // console.log(savedComments[postId].comment);
}

function saveEditedComment(element){

  let commentParent = element.parentNode.parentNode.parentNode; //Calls post-comment div
  let postComment = commentParent.children[1]; //calls comment <p></p> 
  let saveButton = element.parentNode.parentNode.children[2];//Access button to save?

  postComment.contentEditable= 'false'; 
  console.log("AHORA NO SE PUEDE EDITAR JAJASJAS");
  saveButton.className += "save-button";
  postComment.className += "post-comment";

}


function closeEditComment(){
  document.getElementById("edit-comment").style.display = "none";
}


//--------------------------- CÓDIGO DESHECHADO ----------------------------

// function editForumComment(element) {
//   //A NESTED FUNCTION!?!?!?!??!

//   let editParent = element.parentNode.parentNode.parentNode;
//   let buttonParent = element.parentNode.parentNode.parentNode.parentNode;
//   let postId = buttonParent.children[0].innerHTML;

//   editParent.className += "forum-freeze";

//   console.log(postId);
//   console.log(buttonParent);
//   console.log(savedComments[postId].comment);

//   editParent.innerHTML += `
//     <div class="edit-comment" id="edit-comment">
//     <div class="edit-item">
//     <label for="new-comment">Edit your comment:</label>
//     <textarea id="edit-new-comment" name="comment"></textarea>
//     <span id="edit-form-comment">* please enter a comment.</span>

//     <div class="edit-form-submit">
//       <button type="button" onclick="closeEditComment()">Close</button>
//       <button type="button" onclick="validateEditComment()">Submit</button>
//     </div>
//     </div>
//   </div>
//   `;

//   document.getElementById("edit-comment").style.display = "block";

//   function validateEditComment() {
//     let COMMENT = document.getElementById("edit-new-comment").value;
//     let valid = true;

//     if (!COMMENT) {
//       document.getElementById("edit-form-comment").style.visibility = "visible";
//       valid = false;
//     } else {
//       document.getElementById("edit-form-comment").style.visibility = "hidden";
//     }

//     if (!valid) {
//       preventDefault();
//     } else {

//       COMMENT = savedComments[postId].comment;
//       closeEditComment();

//       if (document.getElementById("edit-comment").style.display == "none"){
//         document.getElementById("forum-post").className = "forum-post";
//       };
//       // GET COMMENT FORM ARRAY.
//       // SPLICE AND PUSH NEW COMMENT INTO ARRAY
//     }
//   }

//   validateEditComment(); //NESTED FUNCTIOOOON :DDDD

// }
