var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {

    window.alert("welcome to Robot Gladiators!");

    var promptFight = window.prompt("would you like to FIGHT or SKIP this battle?  Type FIGHT  or SKIP to choose");

    console.log(promptFight);

    //if player chooses to fight, then fight

    if (promptFight === "fight" || promptFight === "FIGHT") {



        //subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.

        enemyHealth = enemyHealth - playerAttack;


        //log a resulting message to the console so we know it worked.

        console.log(
            playerName + " attacked " + enemyName + ".  " + enemyName + " now has " + enemyHealth + " health remaining."
        );


        //check enemy's health

        if (enemyHealth <= 0) {

            window.alert(enemyName + " has died!");
        }

        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.

        playerHealth = playerHealth - enemyAttack;

        //Log a resulting message to the console so we know that it worked.

        console.log(
            enemyName + " attacked " + playerName + ".  " + playerName + " now has " + playerHealth + " health remaining. ");

        //check player's health

        if (playerHealth <= 0) {
            window.alert(playerName + " has died! ");
        }

        else {

            window.alert(playerName + " still has  " + playerHealth + "health left.");

        };

        //if player chooses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {

        //confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight.  Goodbye!");
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }

        //if no (false), ask question again by running fight () again
        else {
            fight();
        }
    
        window.alert(playerName + " has chosen to skip the fight!");
    } else {
        window.alert("You need to pick a valid option.  Try again!");
    }
};

fight();