const biggerB = document.querySelector("#biggerB");
const textA = document.getElementById("textarea");
const fancyR = document.getElementById('fancy');
const boringR = document.getElementById('boring');
const mooB = document.getElementById('mooButton');

textA.style.fontSize = "24pt";

function helloW() {
    alert("Hello, world!");
}

function fancy() {
  textA.style.fontWeight = "bold";
  textA.style.color = "blue";
  textA.style.textDecoration = "underline";
}

function plain() {
  textA.style.fontWeight = "normal";
  textA.style.color = "black";
  textA.style.textDecoration = "none";
}

function mooing() {
    textA.value = textA.value.toUpperCase();

    var addMoo = textA.value.split(".");
    textA.value = addMoo.join("-Moo.");
}

biggerB.addEventListener("click", helloW);
fancyR.addEventListener("change", fancy);
boringR.addEventListener("change", plain);
mooB.addEventListener("click", mooing);
