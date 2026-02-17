var rollHistory = [];

function rollDice() { 
    var diceValue = Math.floor(Math.random() * 6) + 1;

    document.getElementById("diceResult").value = diceValue;

    if (diceValue===6) {
        document.getElementById("message").innerHTML = "You rolled a 6! You get another turn!";
    } else {
        document.getElementById("message").innerHTML =  ". Try again!";

        rollHistory.push(diceValue);
        if (rollHistory.length > 3) {
            rollHistory.shift();
        }

        document.getElementById("rollHistory").innerHTML = rollHistory.join(" - ");

    }
}
// For Enter Key To work
document.getElementById('rollButton').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        rollDice();
    }
});

