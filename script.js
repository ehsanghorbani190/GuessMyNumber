'use strict';
let check = document.getElementsByClassName('check')[0],
	reset = document.getElementsByClassName('again')[0],
	message = document.getElementsByClassName('message')[0],
	lives = document.getElementsByClassName('score')[0],
	live = 3,
	score = 0,
	scoreBox = document.getElementsByClassName('highscore')[0],
	num = Math.floor(Math.random() * 21) + 1;
check.addEventListener('click', () => {
	console.log(num);

	let guess = document.getElementsByClassName('guess')[0].value;
	document.getElementsByTagName('body')[0].style.backgroundColor = '#222';
	if (num - guess > 10) {
		message.innerHTML = "You're so far :(";
	} else if (num - guess <= 5) {
		message.innerHTML = "You're SO close ;)";
	} else if (num - guess <= 10) {
		message.innerHTML = "You're close :D";
	}
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
	if (live == 0) {
		message.innerHTML = '3 Times Wrong :D </br> Number Changed XD';
		document.getElementsByTagName('body')[0].style.backgroundColor = '#c0392b';
		num = Math.floor(Math.random() * 21) + 1;
	}
});
reset.addEventListener('click', () => {
	document.getElementsByTagName('body')[0].style.backgroundColor = '#222';
	num = Math.floor(Math.random() * 21) + 1;
	message.innerHTML = 'Number Changed;)';
	live = 3;
	lives.innerHTML = live;
	score = 0;
    scoreBox.innerHTML = score;
    document.getElementsByClassName('guess')[0].value = "";
});
