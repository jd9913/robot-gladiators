//Game States
//"WIN --Player robot has defeated all enemies
//  *Fight all enemy robots
//  *defeat each enemy robot
//"LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this

console.log(playerName, playerAttack, playerHealth);

var enemyName = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;



var fight = function (enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {

        var promptFight = window.prompt("would you like to FIGHT or SKIP this battle?  Type FIGHT  or SKIP to choose");

        console.log(promptFight);

        if (promptFight === "skip" || promptFight === "SKIP") {

            //confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight.  Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 2;
                console.log("playerMoney", playerMoney);
                break;
            }
        }


        //subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.

        enemyHealth = enemyHealth - playerAttack;


        //log a resulting message to the console so we know it worked.

        console.log(
            playerName + " attacked " + enemyName + ".  " + enemyName + " now has " + enemyHealth + " health remaining."
        );


        //check enemy's health

        if (enemyHealth <= 0) {

            window.alert(enemyName + " has died!");
            //award player money for winning
            playerMoney = playerMoney + 20;

            //leave while() loop since enemy is dead

            break;
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
            //leave while () loop if player is dead

            break;
        }

        else {

            window.alert(playerName + " still has  " + playerHealth + "health left.");
        };

    }

    {
        var fight = function (enemyName) {
            //repeat and execute as long as the enemy robot is alive
            while (enemyHealth > 0 && playerHealth > 0) {

            }
        }

        window.alert(playerName + " has chosen to skip the fight!");

    }

    window.alert("You need to pick a valid option.  Try again!");

};

for (var i = 0; i < enemyName.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    }

        
    var pickedEnemyName = enemyName[i];
    enemyHealth = 50;
    debugger;
    //call fight function with enemy robot
    fight(pickedEnemyName);
}