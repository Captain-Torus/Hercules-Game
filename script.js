const introText = "Welcome champion, you have selected to complete twelve tasks. But be warned: these are tasks no mortal man could complete.";
const textElement = document.getElementById("intro-text");
const startBtn = document.getElementById("start-btn");

let index = 0;

function typeWriter() {
    if (index < introText.length) {
        textElement.innerHTML += introText.charAt(index);
        index++;
        setTimeout(typeWriter, 40); 
    } else {
        startBtn.style.display = "inline-block";
    }
}

// Start immediately
console.log("Game script loaded!");
typeWriter();
