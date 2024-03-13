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

            const buttons = document.querySelectorAll("button");

            buttons.forEach((button) => {
                button.addEventListener("click", () => {
                    const playerChoice = button.id;
                    const computerChoice = getComputerChoice();
                    console.log(playRound(playerChoice, computerChoice))
                });
            });