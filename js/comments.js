function listenForStorage() {
  const COMMENT_FORM = document.getElementById("comment-form");
  COMMENT_FORM.addEventListener("submit", (e) => {
    e.preventDefault();
    addForumComment();
  });
}

function addForumComment() {
  const FORUM_COMMENT = document.getElementById("forum");
  const USERNAME = localStorage.getItem("username");
  const COMMENT = localStorage.getItem("comment");

  if (USERNAME && COMMENT) {
    const newCommentHTML = `
      <div class="forum-post">
        <div class="post-avatar">
          <img src="img/avatar.png" alt="Avatar">
        </div>
        <div class="post-content">
          <div class="post-username" id="forum-username">
            <h1>${USERNAME}</h1>
          </div>
          <div class="post-comment" id="forum-comment">
            <p>${COMMENT}</p>
          </div>
          <div class="post-date" id="forum-date">Just now</div>
        </div>
      </div>
    `;
    FORUM_COMMENT.innerHTML = newCommentHTML;
  }
}



listenForStorage();
addForumComment();
