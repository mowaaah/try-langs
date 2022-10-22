const hand_Options = {
	rock: "/assets/rock-pic.png",
	paper: "/assets/paper-pic.png",
	scissors: "/assets/scissor-pic.png",
};

let SCORE = 0;

const pickPersonHand = (hand) => {
	let hands = document.querySelector(".hands_btn");
	hands.style.display = "none";

	let game = document.querySelector(".game");
	game.style.display = "flex";

	//SETTING PERSON Image
	document.getElementById("personPickImage").src = hand_Options[hand];

	pickComputerHand(hand);
};

const pickComputerHand = (hand) => {
	let comp_pick = ["rock", "paper", "scissors"];
	let comp_hand = comp_pick[Math.floor(Math.random() * comp_pick.length)];

	//SETTING COMP Image
	document.getElementById("computerPickImage").src = hand_Options[comp_hand];

	neuter(hand, comp_hand);
};

const neuter = (personHand, compHand) => {
	if (personHand == "paper" && compHand == "scissors") {
		setResult("YOU LOSE!");
	}
	else if (personHand == "paper" && compHand == "rock") {
		setResult("YOU WIN!");
		setScore(SCORE + 1);
	}
	else if (personHand == "paper" && compHand == "paper") {
		setResult("It's a tie!");
	}
	else if (personHand == "rock" && compHand == "scissors") {
		setResult("YOU WIN!");
		setScore(SCORE + 1);
	}
	else if (personHand == "rock" && compHand == "paper") {
		setResult("YOU LOSE!");
	}
	else if (personHand == "rock" && compHand == "rock") {
		setResult("It's a tie!");
	}
	else if (personHand == "scissors" && compHand == "scissors") {
		setResult("It's a tie!");
	}
	else if (personHand == "scissors" && compHand == "rock") {
		setResult("YOU LOSE!");
	}
	else if (personHand == "scissors" && compHand == "paper") {
		setResult("YOU WIN!");
		setScore(SCORE + 1);
	}
};

const restartbtn_Game = () => {
	let game = document.querySelector(".game");
	game.style.display = "none";

	let hands = document.querySelector(".hands_btn");
	hands.style.display = "flex";
};

const setResult = (decision) => {
	document.querySelector(".decision h1").innerText = decision;
};

const setScore = (newScore) => {
	SCORE = newScore;
	document.querySelector(".person_Score h1").innerText = newScore;
};

function resetGame() {
	location.reload();
};

