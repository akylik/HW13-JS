// 1
function* generator() {
  let i = 1;
  while (1 < Infinity) {
    yield i++;
  }
}
const idGenerator = generator();

const idNumber = document.getElementById("genId");
const getIdButton = document.getElementById("generateId");

getIdButton.addEventListener("click", () => {
  idNumber.innerHTML = idGenerator.next().value;
});

// 2
const increaseFontSizeBtn = document.getElementById("increase");
const decreaseFontSizeBtn = document.getElementById("decrease");
const textarea = document.querySelector(".font-size");
const currentFont = document.querySelector(".span-gen");

const fontGenerator = newFontGenerator(14);
fontGenerator.next();

increaseFontSizeBtn.addEventListener("click", () => {
  fontGenerator.next("up").value;
});

decreaseFontSizeBtn.addEventListener("click", () => {
  fontGenerator.next("down").value;
});

function* newFontGenerator(startSize) {
  textarea.style.fontSize = startSize + "px";
  let currentFontSize = parseInt(window.getComputedStyle(textarea).fontSize);
  while (true) {
    let fontSize = yield currentFontSize;
    if (fontSize === "up") {
      currentFontSize += 2;
    } else {
      currentFontSize -= 2;
    }
    textarea.style.fontSize = currentFontSize + "px";
    setFontValues();
  }
}

function setFontValues() {
  currentFont.textContent = textarea.style.fontSize;
}
