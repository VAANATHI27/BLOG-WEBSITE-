function savePost() {
  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;

  let post = `<h3>${title}</h3><p>${content}</p><hr>`;
  document.getElementById("posts").innerHTML += post;

  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}
