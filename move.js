const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    const startGame = ()=> {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click",()=> {
        introScreen.classList.add("FadeOut");
        match.classList.add("FadeIn");
     })
    };

//play the match
    const Playmatch = ()=> {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-Hand");
        const computerHand = document.querySelector(".computer-Hand");
        const hands = document.querySelectorAll(".hands img");
        hands.forEach(hand =>{
            hand.addEventListener("animationend",function(){
                this.style.animation = "";
            });
        });
        
// Computer options
    const ComputerOptions = ["rock","paper","scissor"];

    options.forEach(option => {
        option.addEventListener("click",function() { 
        const ComputerNumber = Math.floor(Math.random()*3);
        //Computer Choice
        const ComputerChoice = ComputerOptions[ComputerNumber];
      
        setTimeout(() => {
        //Compare Hands
        compareHands(this.textContent,ComputerChoice);

        //Update the Image
        playerHand.src = `./images/${this.textContent}.png`;
        computerHand.src = `./images/${ComputerChoice}.png`; 

        }, 2000);
        
        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
        });
    });
    };

    const updateScore = () =>{
        const playerScore = document.querySelector(".player-score p");
        const ComputerScore = document.querySelector(".Computer-score p"); 
        playerScore.textContent = pScore;
        ComputerScore.textContent = cScore;   
    }
        const compareHands = (PlayerChoice,ComputerChoice) =>{
        //Update text
        const winner = document.querySelector(".winner");
        //looking for a tie
        if(PlayerChoice === ComputerChoice){
            winner.textContent = "It's a Tie!";
            return;
        }
        //Check for Rock
        if(PlayerChoice === "rock"){
            if(ComputerChoice === "scissor"){
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent ='Computer wins';
                cScore++;
                updateScore();
                return;
            }

            }
         //Check for Paper
         if(PlayerChoice === "paper"){
            if(ComputerChoice === "rock"){
                winner.textContent = 'player wins';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'computer wins';
                cScore++;
                updateScore();
                return;
            }
       
            }
         //Check for Scissor
         if(PlayerChoice === "scissor"){
            if(ComputerChoice === "paper"){
                winner.textContent = "player wins";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "computer wins";
                cScore++;
                updateScore();
                return;
            }
       
            }
            

        }



//Call the inner function
startGame();
Playmatch();
};

//start the game function
game();