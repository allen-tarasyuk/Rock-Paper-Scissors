// ============
// RPS
// ============

function getRandomNum(){

    let randomNum = Math.floor((Math.random() * 3) + 1);

    return randomNum;

}

function randomString(){

    let randomNum = getRandomNum();
    let roll;

    switch(randomNum){
        case 1:
            roll = 'rock';
            break;
        case 2:
            roll = 'paper';
            break;
        case 3:
            roll = 'scissors';
            break;
    }

    return roll;

};

function printRandomString(){
    console.log(randomString());
}

function getResult(playerRoll){

let computerRoll = randomString();

console.log("Your Roll: " + playerRoll);
console.log("Opponent's Roll: " + computerRoll);

if(playerRoll === computerRoll){
    console.log('Tie!');
}else{

    switch(playerRoll){
        case 'rock':
            console.log(computerRoll === 'scissors' ? 'You win!' : 'You Lost');
            break;

        case 'paper':
            console.log(computerRoll === 'rock'? 'You win!' : 'You Lost');
            break;

        case 'scissors':
            console.log(computer === 'paper'? 'You win!': 'You Lost');
            break;

        default:
            console.log('Invalid Input');
    }
}

}

getResult('rock');