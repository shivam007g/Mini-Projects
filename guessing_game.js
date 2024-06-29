let inp = document.getElementById("input-box");
let h2 = document.querySelector("h2");
let btn = document.querySelector("button");
btn.addEventListener("click", function() {
    let random = Math.floor( Math.random() * 100 ) + 1;
    // h2.innerText = random;
    // inp.value = "";
    h2.innerText = inp.value;
    
// while(true){
    
//     if(inp == "quit"){
//         // console.log("user quit");
//         break;
//     }

//     if( inp == random){
//         // console.log("you are right! congrats!! random number was : ",random);
//         break;
//     }else if( inp < random){
//         h2.innerText = ("hint : your guess was to small. please try again.");
//         inp = document.getElementById("input-box");
//     }else{
//         h2.innerText = ("hint : your guess was to large. please try again.");
//         inp = document.getElementById("input-box");
//     }


//     // else{
//     //     guess = prompt("Your guess was wrong. please try again.")
//     // }
// }
});
