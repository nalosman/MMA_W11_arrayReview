  (() => {
console.log('my JS is workin!!!');

let textContainer = document.querySelector(".text-container"),
    textButton = document.querySelector("button");
    bioButtons = document.querySelectorAll(".bio-buttons button");

const dataContainer = ["This", "is", "some", "text"];
const newContainer = ["This", "is", "a", "join", "method", "result"];
const billandTed = ["I am Bill S Preston, Esq", "And I am Ted Theodore Logan. Party on Dude!"]


function showBioInfo() {
  arrayIndex = this.dataset.arrayref;
  textContainer.textContent = billandTed[arrayIndex];
}

function joinArray() {
  textContainer.textContent = newContainer.join(" ");
}

dataContainer.forEach((word, index) => {
  textContainer.textContent += word;
  console.log(index);
});

for (let i=0; i<dataContainer.length; i++) {
console.log(i, dataContainer[i]);

// append the array contents to the paragraph tag
  textContainer.textContent += dataContainer[i];
}

textContainer.textContent += "I just added this with script";
textButton.addEventListener("click", joinArray);

bioButtons.forEach(button => button.addEventListener("click", showBioInfo));
})();
