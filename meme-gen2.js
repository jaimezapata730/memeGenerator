const form = document.getElementById("form");
const memesContainer = document.getElementById("memes-container");
const imageUrl = document.getElementById("image-url");
const topText = document.getElementById("topTextElement");
const bottomText = document.getElementById("bottomTextElement");

function createMeme(e) {
  e.preventDefault();
  //create div
  const memeDiv = document.createElement("div");
  memeDiv.classList.add("completedMeme");
  //create img
  const memeImg = document.createElement("img");
  memeImg.classList.add("memeImg");
  memeImg.setAttribute('src', imageUrl.value);
  
  //toptext on meme
  const topTextElement = document.createElement("h2");
  topTextElement.classList.add("topText");
  topTextElement.innerText = topText.value.toUpperCase();
  //bottomtext on meme
  const bottomTextElement = document.createElement("h3");
  bottomTextElement.classList.add("bottomText");
  bottomTextElement.innerText = bottomText.value.toUpperCase();
  //add to the page
   // Add to the page
   memeDiv.append(memeImg, topTextElement, bottomTextElement);
   memesContainer.append(memeDiv);

  imageUrl.value = "";
  topTextElement.value = "";
  bottomTextElement.value = "";  
};

form.addEventListener('submit', createMeme);
memesContainer.addEventListener("click", deleteMeme);

function deleteMeme(e) {
  if (e.target.tagName = "IMG") {
    e.target.parentElement.remove()
  }
}
