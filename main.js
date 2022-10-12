const input = document.querySelector("#input")
const wordLen = document.querySelector("#word-count")
const characterLen = document.querySelector("#character-count")
const btn = document.querySelector("#btn")

function count() {
  let char = input.value;
  let charLen = char.length;

  let words = char.split(/[\s]+/g).filter((word)=>{
    return word.length > 0
  })

if (char === "") {
  alert ("Sorry, the input box is empty")
}

  wordLen.innerHTML = words.length;
  characterLen.innerHTML = charLen;
}

btn.addEventListener("click", function(){
   count()
})