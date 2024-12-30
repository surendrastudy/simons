let gameSeq = [];
let userSeq = [];

let btns= ["yellow","red","purple","green"];

let started = false;
let level=0

let h2 = document.querySelector("h2");
let resetbtn = document.querySelector(".reset")
resetbtn.addEventListener("click",function(){
    if(started == false){
        // console.log("start")
        started=true
    }

    levelUp();
})

function gameFlash(btn){ //2
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250)
}

function userFlash(btn){ //5
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250)
}

function levelUp(){  //1
    userSeq= [];

    level++;
    h2.innerText=`Level ${level}`;

    //random btn choose
    let randIx = Math.floor(Math.random()*3)+1
    let randColor = btns[randIx];
    let randbtn = document.querySelector(`.${randColor}`);

    // console.log(randIx);
    // console.log(randColor)
    // console.log("r",randbtn)

    gameSeq.push(randColor);
    console.log(gameSeq)
    gameFlash(randbtn);
}

function checkAns(idx){
    // console.log("curr lvl",level)
    // let idx = level-1;

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000)
        }
    }else{
        h2.innerHTML = `Game Over! Your score was  <b> ${level}</b> <br>Press  to start`
        document.querySelector("body").style.background="red";
        setTimeout(function(){
            document.querySelector("body").style.background="white";

        },150)
        reset()
    }
}

function btnPress(){  //4
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");  //id value     console.log(userColor)
    userSeq.push(userColor)
    // console.log("use",userSeq)
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){ //3
    btn.addEventListener("click",btnPress)
}

function reset(){
    started = false;
    gameSeq =[];
    userSeq = [];
    level=0;
    
}