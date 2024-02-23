const genmerateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");
const memeimg= document.querySelector(".meme-generator img");
const memetitle= document.querySelector(".meme-generator .meme-title");
const memeauthor= document.querySelector(".meme-generator .meme-author");

const updateDetails = (url,title,author) => {
    memeimg.setAttribute("src",url);
    memetitle.innerHTML = title;
    memeauthor.innerHTML = `MEME BY :${author}`;
}
 const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then (response => response.json())
    .then((data) => {
        updateDetails(data.url, data.title, data.author);
      });
 };
genmerateMemeBtn.addEventListener("click", generateMeme);
generateMeme();
