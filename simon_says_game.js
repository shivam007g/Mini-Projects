// let gameSeq = [];
// let userSeq = [];

// let btns = ["yellow", "red", "purple", "green"];

// let started = false;
// let level = 0;
// let highest = 0;
// let h3 = document.querySelector("h3");
// let h2 = document.querySelector("h2");

// document.addEventListener("keypress", function () {
//     if(started == false) {
//         // console.log("game started");
//         started = true;
//         levelUp();
//     }
// });

// function gameFlash (btn) {
//     btn.classList.add("flash");
//     setTimeout(function() {
//         btn.classList.remove("flash");
//     }, 250);

// }


// function userflash (btn) {
//     btn.classList.add("userflash");
//     setTimeout(function() {
//         btn.classList.remove("userflash");
//     }, 250);

// }

// function levelUp () {
//     userSeq = [];
//     level++;
//     h2.innerText = `Level ${level}`;
//     highest = Math.max(level,highest);
//     h3.innerText = `Highest Score : ${highest}`;
    
//     let randIdx = Math.floor(Math.random() * 3);
//     let randColor = btns[randIdx];
//     let randBtn = document.querySelector(`.${randColor}`);
//     gameSeq.push(randColor);
//     console.log(gameSeq);
//     gameFlash(randBtn);
// }

// function checkAns (idx) {
//     if(userSeq[idx] === gameSeq[idx]) {
//        if (userSeq.length == gameSeq.length) {
//         setTimeout(levelUp , 1000);
//        }
//     } else {
//         h2.innerHTML = `Game Over! Your score was <b>${level}</b> Press any key to start`;
//         document.querySelector("body").style.backgroundColor = "red";
//         setTimeout(function() {
//             document.querySelector("body").style.backgroundColor = "white";
//         }, 150);
        
//         reset();
//     }
// }

// function btnPress () {
//     let btn = this;    
//     userflash(btn);


//     userColor = btn.getAttribute("id");
//     userSeq.push(userColor);
//     checkAns(userSeq.length-1);
//     // console.log(userColor);
// }

// let allBtns = document.querySelectorAll(".btn");
// for (btn of allBtns) {
//     btn.addEventListener("click", btnPress)
// }

// function reset () {
//     started = false;
//     gameSeq = [];
//     userSeq = [];
//     level = 0;
// }






let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0 ;
let highest = 0;
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
    if(started == false){
        started = true;
        levelUP();
    }
});

function gameFlash (btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userflash (btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUP () {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    highest = Math.max(level,highest);
    h3.innerText = `Highest Score : ${highest}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns (idx) {
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUP,1000);
        }
    }else {
        h3.innerHTML = `Game Over! Your score is ${level}. Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);

        reset();
    }
}

function btnPress () {
    let btn = this;
    userflash(btn);
    
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);


}

let allBtns = document.querySelectorAll(".btn");
    for(btn of allBtns) {
        btn.addEventListener("click", btnPress);
}

function reset () {
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
}
