let w = 0;
            let l = 0;
            let t = 0;

            function getComputerChoice() {
                const computerOptions = ['Rock', 'Paper', 'Scissors'];
                random = Math.floor(Math.random() * computerOptions.length);
                if (random == 0) {
                    return 'Rock';
                } else if (random == 1) {
                    return 'Paper';
                } else if (random == 2) {
                    return 'Scissors'; 
                }
            }

            function getPlayerChoice() {
                const playerOptions = prompt("Rock, Paper, or Scissors?");
                return playerOptions.charAt(0).toUpperCase() + playerOptions.slice(1).toLowerCase()
            }

            function playRound(playerChoice, computerChoice) {
                if (playerChoice == 'Rock' && computerChoice == 'Rock' || playerChoice == 'Paper' && computerChoice == 'Paper' || playerChoice == 'Scissors' && computerChoice == 'Scissors')  {
                    ++t;
                    return 'You Tied! ' + playerChoice + ' ties ' + computerChoice;
                } else if (playerChoice == 'Rock' && computerChoice == 'Scissors' || playerChoice == 'Paper' && computerChoice == 'Rock' || playerChoice == 'Scissors' && computerChoice == 'Paper') {
                    ++w
                    return 'You Win! ' + playerChoice + ' beats ' + computerChoice;
                } else if (playerChoice == 'Rock' && computerChoice == 'Paper' || playerChoice == 'Paper' && computerChoice == 'Scissors' || playerChoice == 'Scissors' && computerChoice == 'Rock') {
                    ++l
                    return 'You Lose! ' + computerChoice + ' beats ' + playerChoice;
                }
            }

            // temp removed logic that plays exactly 5 rounds
            function playGame() {
                // try {
                   // for (let i = 0; i < 5; i++) {
                        const playerChoice = getPlayerChoice();
                        const computerChoice = getComputerChoice();
                        console.log(playRound(playerChoice, computerChoice))
                        }
                    // }
                // finally {
                    // console.log(w + '-' + l + '-' + t)
                //}
            //}
            
            
            playGame();