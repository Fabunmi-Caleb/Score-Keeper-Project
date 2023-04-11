const p1button = document.querySelector("#incP1Button");
const p2button = document.querySelector("#incP2Button");
const resetButton = document.querySelector("#resetButton");
const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
const winningSelect = document.querySelector("#playingTo");


let p1Tracker = 0;
let p2Tracker = 0;
let winningScore;
let isGameStillOn = true;

winningScore = parseInt(winningSelect.value);
winningSelect.addEventListener("change", function(){
    winningScore = parseInt(this.value);
    isGameStillOn = true;
     p1Tracker = 0;
     p2Tracker = 0;
     p1Score.textContent = p1Tracker;
     p2Score.textContent = p2Tracker;
     p1Score.classList.remove("text-success", "text-danger");
     p2Score.classList.remove("text-success", "text-danger");
})

p1button.addEventListener("click", function(){
    if(isGameStillOn){
        p1Tracker+=1;
    if(p1Tracker === winningScore){
        isGameStillOn = false;
        p1Score.classList.add("text-success");
        p2Score.classList.add("text-danger")
    }
        p1Score.textContent = p1Tracker;
    }
})

p2button.addEventListener("click", function(){
    if(isGameStillOn){
        p2Tracker+=1;
    if(p2Tracker === winningScore){
        isGameStillOn = false;
        p2Score.classList.add("text-success");
        p1Score.classList.add("text-danger")
    }
    p2Score.textContent = p2Tracker;
    }
})

resetButton.addEventListener("click", function(){
    isGameStillOn = true;
    p1Tracker = 0;
    p2Tracker = 0;
    p1Score.textContent = p1Tracker;
    p2Score.textContent = p2Tracker;
    p1Score.classList.remove("text-success", "text-danger");
    p2Score.classList.remove("text-success", "text-danger");
})
