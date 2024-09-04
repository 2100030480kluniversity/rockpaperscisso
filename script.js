let uscore = 0;
let cscore = 0;
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

const gencompChoice = ()=>{
 const options = ["rock","paper","scissors"];
 let idx = Math.floor(Math.random() * 3);
 return options[idx];
};
const getwinner=(userChoice,compChoice)=>{
  if(userChoice==="paper"){
    if(compChoice==="scissors"){
      msg.innerText="You LOOSE!, paper beats scissors";
      msg.style.backgroundColor = "tomato";
      cscore++;
    } else if(compChoice==="rock"){
      msg.innerText="You WIN!, rock beats paper";
      msg.style.backgroundColor = "green";
      uscore++;
    } else{
      msg.innerText="Draw.";
    }
  } else if(userChoice==="rock"){
    if(compChoice==="paper"){
      msg.innerText="You LOOSE!, paper beats rock";
      msg.style.backgroundColor = "tomato";
      cscore++;
    } else if(compChoice==="scissors"){
      msg.innerText="You WIN!, rock beats scissors ";
      msg.style.backgroundColor = "green";
      uscore++;
    } else{
      msg.innerText="Draw.";
    }
  } else if(userChoice==="scissors"){
    if(compChoice==="paper"){
      msg.innerText="You win! scissors beats paper";
      msg.style.backgroundColor = "green";
      uscore++;
    } else if(compChoice==="rock"){
      msg.innerText="You Loose!, rock beats scissors";
      msg.style.backgroundColor = "tomato";
      cscore++;
    } else{
      msg.innerText="Draw.";
    }
  }
};
const updateScores = ()=>{
 document.querySelector("#uscore").innerText = uscore;
 document.querySelector("#cscore").innerText = cscore;
}
const playGame = (userChoice) =>{
 let compChoice = gencompChoice();
//  alert(`${userChoice}, ${compChoice}`);
 getwinner(userChoice,compChoice);
 updateScores();
};

choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userChoice = choice.id;
    playGame(userChoice);
  });
});


