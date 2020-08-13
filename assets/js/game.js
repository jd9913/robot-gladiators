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


var fight = function(enemyName) {

window.alert("welcome to Robot Gladiators!");

//subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.

enemyHealth = enemyHealth - playerAttack;


//log a resulting message to the console so we know it worked.

console.log(playerName + " attacked " + enemyName + ".  " + enemyName + " now has " + enemyHealth + " health remaining.");

//check enemy's health

if (enemyHealth<=0){

window.alert(enemyName + " has died!");
}

else{
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

};

for (var i = 0; i < enemyName.length; i++) {
    fight(enemyName[i]);
}