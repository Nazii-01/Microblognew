const postBtn = document.getElementById("postBtn");
const postInput = document.getElementById("postInput");
const feed = document.getElementById("feed");

postBtn.addEventListener("click", () => {
  const text = postInput.value.trim();
  if (text === "") return;

  const post = document.createElement("div");
  post.classList.add("post");

  const message = document.createElement("p");
  message.textContent = text;

  const time = document.createElement("div");
  time.classList.add("timestamp");
  const now = new Date();
  time.textContent = now.toLocaleString();

  post.appendChild(message);
  post.appendChild(time);
  feed.prepend(post); // newest post appears first

  postInput.value = "";
});
