let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePoint=document.querySelector("#user_score");
const compScorePoint=document.querySelector("#comp_score");

const drawGame=()=>{
    console.group("Game was DRAW");
    msg.innerText="Game was DRAW. Play Again";
    msg.style.backgroundColor="#081B31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePoint.innerText=userScore;
        msg.innerText=`You WIN. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePoint.innerText=compScore;
        msg.innerText=`You LOST. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("User Choice = ",userChoice);
    const compChoice=genCompChoice();
    console.log("Computer Choice = ",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="Rock"){
            userWin=compChoice==="Paper" ? false:true;
        }else if(userChoice==="Paper"){
            userWin=compChoice==="Scissor"? false:true;
        }else{
            userwin=compChoice==="Rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);

        }
    };

const genCompChoice=()=>{
    const options=["Rock","Paper","Scissor"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});