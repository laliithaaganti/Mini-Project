//simon game
let gameseq=[];
let userseq=[];

let btns=["yellow","red","purple","green"];
let highscore=0;
let started=false;
let level=0;
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    //random btn choose
    let randIndex=Math.floor(Math.random()*3);
    let randCol=btns[randIndex];
    let randBtn=document.querySelector(`.${randCol}`);
    // console.log(randIndex);
    // console.log(randCol);
    // console.log(randBtn);
    gameseq.push(randCol);
    console.log(gameseq);
    
    gameFlash(randBtn);
}

function btnPress(){
    // console.log(this);
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(all of allBtns){
    all.addEventListener("click",btnPress);
}
function checkAns(idx){
    // console.log("curr level:",level);
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        if(level>highscore){
            highscore=level;
            h3.innerText=`Highscore=${highscore}`;
        }
        h2.innerHTML=`Game Over!!Your score was <b>${level}<b> </br> Again press any key to start.`
        document.querySelector("body").style.backgroundColor="red";
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor="white";
            },150);
        reset();
    }
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
