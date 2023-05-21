const form = document.getElementById("meme-form");
const memesContainer = document.getElementById("memes-container");

document.addEventListener("submit", e => {
  e.preventDefault();

  const imageUrl = document.getElementById("image-url").value;
  const topText = document.getElementById("top-text").value;
  const bottomText = document.getElementById("bottom-text").value;

  const memeDiv = document.createElement("div");
  memeDiv.className = "meme";

  const memeImg = document.createElement("img");
  memeImg.src = imageUrl;
  memeDiv.appendChild(memeImg);
  

  const topTextElement = document.createElement("h2");
  topTextElement.innerText = topText;
  memeDiv.appendChild(topTextElement);

  const bottomTextElement = document.createElement("h3");
  bottomTextElement.innerText = bottomText;
  memeDiv.appendChild(bottomTextElement);

  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.className = "remove-button";
  memeDiv.appendChild(removeButton);

  memesContainer.appendChild(memeDiv);

  document.getElementById("image-url").value = "";
  document.getElementById("top-text").value = "";
  document.getElementById("bottom-text").value = "";
});

memesContainer.addEventListener("click", e => {
  if (e.target.className === "remove-button") {
    e.target.parentElement.remove();
  }
});