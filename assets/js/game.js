/*GAME FUNCTIONS*/

//function to start a new game
var startGame = function () {
    // reset player stats
    playerInfo.reset();

    // fight each enemy robot by looping over them and fighting them one at a time
    for (var i = 0; i < enemyNames.length; i++) {
        //check player stats
        console.log(playerInfo);


        // if player is still alive, keep fighting
        if (playerHealth > 0) {
            // let user know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyObj = enemyInfo[i];

            // reset enemyHealth before starting new fight
            pickedEnemyObj.health = randomNumber(40, 60);

            console.log(pickedEnemyObj);

            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyObj);

            //if player is still alive after the fight and we're not at the last enemy in the array

            if (playerInfo.health > 0 && i < enemyInfo.lenght - 1) {
                //ask if user wants to use the store before the next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                //if yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }
            }
        }

        // if player is not alive, break out of the loop and let endGame function run
        else {
            break;
        }
    }

    // after loop ends, we are either out of playerHealth or enemies to fight, so run the endGame function
    endGame();
};

// function to end the entire game
var endGame = function () {
    window.alert("The game has now ended. Let's see how you did!");

    //check localStorage for high score if it's not there use 0
    var highScore = localStorage.getItem("highscore") || 0;

    //if player has more money that the high score, player has new high score!

    if (playerInfo.money > highScore) {
        localStorage.setItem("highscore", playerInfo.money);
        localStorage.setItem("name", playerInfo.name);

        alert(playerInfo.name + " now has the high score of " + playerInfo.money + "!");

    } else {
        alert(playerInfo.name + "did not beat the high score of " + highScore + ".  Maybe next time!");
    }
    var playAgainConfirm = window.confirm('Would you like to play again?');

    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert('Thank you for playing Battlebots! Come back soon!');
    }
};

    //fight function (now with parameter for enemy's object holding name, health, and attack values)

var fight = function (enemy) {
    //keep track of who goes first
    var isPlayerTurn = true;

    //randomly change turn order

    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }

    while (playerInfo.health > 0 && enemy.health > 0) {
        if (isPlayerTurn) {
            //ask user if they'd like to fight or skip using figthOrSkip function
            if (fightOrSkip()) {
                //if true, leave fight by breaking loop
                break;
            }

            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

            // remove enemy's health by subtracting the amount set in the damage variable

            enemyHealth = Math.max(0, enemyHealth - damage);
            console.log(
                playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
            );

            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + ' has died!');

                // award player money for winning
                playerInfo.money = playerInfo.money + 20;


                // leave while() loop since enemy is dead
                break;
            } else {
                window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
            }
            //player gets attacked first
        } else {

            var damage = randomNumber(enemy.attack - 3, enemy.attack);

        // remove enemy's health by subtracting the amount set in the damage variable
        playerInfo.health = Math.max(0,playerHealth - damage);
        console.log(
            enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
        );

        // check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + ' has died!');

            //award player money for winning
            playerInfo.money = playerInfo.money + 20;

            // leave while() loop if player is dead
            break;
        } else {
            window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
            }
    }
        //switch turn order for next round
        isPlayerTurn = !isPlayerTurn;

    };

// go to shop between battles function
var shop = function () {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one "REFILL", "UPGRADE", or "LEAVE" to make a choice.'
    );

    //check if prompt answer was left black, user hit "cancel", or provided a number instead
    if (shopOptionPrompt === null || shopOptionPrompt === "" || is NaN(shopOptionPrompt)) {
        window.alert("You need to provide a valid answer!  Please try again.");
        return shop();
    }

    //convert answer from prompt to an actual number
    shopOptionPrompt = parseInt(shopOptionPrompt);

    // use switch case to carry out action
    switch (shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
            break;
        case 2
            playerInfo.upgradeAttack();
            break;
        case 3:
            window.alert('Leaving the store.');
            break;
        default:
            window.alert('You did not pick a valid option. Try again.');
            shop();
            break;
    }
};


//functon to set name
    var getPlayerName = function () {
        var name = "";

        while (name === "" || name === null) {
            name = prompt("What is your robot's name?");
        }
        console.log("your robot's name is " + name);
        return name;
    };


//function to generate a random numberic value

var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min) + min);

    return value;
    }

    //function to check if player wants to fight or skip

    var fightOrSkip = function () {
        //ask player if they'd like to fight or skip round

        var promptFight = window.prompt("Would you like FIGHT or SKIP the battle? Enter 'FIGHT' or 'SKIP' to choose.");

        //validate prompt answer
        if (promptFight === "" || promptFight === null || !isNaN(promptFight)) {
            window.alert("You didn't eneter a valid choice, try again!");
            //use return to clal it agian and stop the rest of this function from running
            return fightOrSkip();
        }

        //convert promptFight to all lowercase so we can check with fewer options

        promptFight = promptFight.toLowerCase();

        if (promptFight === "skip") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you  sure you'd like to quit?");

            //if true, leave fight

            if (confirmSkip) {
                window.alert(playerInfo.name + "has decided to skip this fight.  Goodbye!");
                //subtract money from playerMondy for skipping, but don't let them go into the negative
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                //stop while() loop using break; and enter next fight

                //return true if user wants to leave
                return true;
            }
        }
        return false;
    }

/*END GAME FUNCTIONS*/


/*GAME INFORMATION / VARIABLES*/

//player information

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function () {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function () {
        window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -= 7;
    },
    upgradeAttack: function () {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        this.attack += 6;
        this.money -= 7;
    }
};

//enemy information
var enemyInfo = [
    {
        name: 'Roborto',
        attack: randomNumber(10, 14)
    },
    {
        name: 'Amy Android',
        attack: randomNumber(10, 14)
    },
    {
        name: 'Robo Trumble',
        attack: randomNumber(10, 14)
    }
];

console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);

/*END GAME INFORMATION / VARIABLES*/

/*RUN GAME*/

startGame();

   