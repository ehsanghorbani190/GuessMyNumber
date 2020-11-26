'use strict'; 
//VARIABLES
let check = document.getElementsByClassName('check')[0] ,//Check Button
	reset = document.getElementsByClassName('again')[0],//Again Button
	message = document.getElementsByClassName('message')[0],//MessageBox
	lives = document.getElementsByClassName('score')[0],//LivesBox
	live = 3,//Lives
	score = 0,//HighScore
	scoreBox = document.getElementsByClassName('highscore')[0],//HighScoreBox
	num = Math.floor(Math.random() * 21) + 1;//RandomNum between 1 and 20
//CHECK BUTTON functionality
	check.addEventListener('click', () => {
	console.log(num); //CheatSheat for test XD
	let guess = document.getElementsByClassName('guess')[0].value;//User Value
	document.getElementsByTagName('body')[0].style.backgroundColor = '#222';
	//USER GUIDES
	if (num - guess > 10) {
		message.innerHTML = "You're so far :(";
	} else if (num - guess <= 5) {
		message.innerHTML = "You're SO close ;)";
	} else if (num - guess <= 10) {
		message.innerHTML = "You're close :D";
	}
	//WHAT TO DO FOR WRONG AND CORRECT GUESS
	if (num != guess) {
		live -= 1;
		lives.innerHTML = live;
	} else {
		score += 1;
		scoreBox.innerHTML = score;
		document.getElementsByTagName('body')[0].style.backgroundColor = '#2ecc71';
		message.innerHTML = 'You guessed correctly :D . <br> Number Changed , Play again ;)';
		live = 3;
		num = Math.floor(Math.random() * 21) + 1;
	}
	//WHAT TO HAPPEN IF USER LOSES THE GAME
	if (live == 0) {
		message.innerHTML = '3 Times Wrong :D </br> Number Changed XD';
		document.getElementsByTagName('body')[0].style.backgroundColor = '#c0392b';
		num = Math.floor(Math.random() * 21) + 1;
		live = 3;
		lives.innerHTML = live;
	}
});
//RESET BUTTON FUNCTIONALITY
reset.addEventListener('click', () => {
	document.getElementsByTagName('body')[0].style.backgroundColor = '#222';
	num = Math.floor(Math.random() * 21) + 1;//new number
	message.innerHTML = 'Number Changed;)';
	live = 3;//reset live
	lives.innerHTML = live;
	score = 0;//reset score
    scoreBox.innerHTML = score;
    document.getElementsByClassName('guess')[0].value = "";//empty the input
});
