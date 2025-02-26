let a = 15;

let timeur = 0;

const dialogPause = document.querySelector("dialog.pause");
const dialogAcceuil = document.querySelector("dialog.accueil");
const buttonRule = document.querySelector("button.button2");
const bodyPage = document.querySelector("body.page");

dialogAcceuil.showModal();

function Regle() {
	let dialogRegle = document.createElement("dialog");
	let h2Rules = document.createElement("h2");

	let divInfo1 = document.createElement("div");
	let h3Titre1 = document.createElement("h3");
	let pTexte = document.createElement("p");

	let divInfo2 = document.createElement("div");
	let h3Titre2 = document.createElement("h3");
	let olListe = document.createElement("ol");
	let li1 = document.createElement("li");
	let li2 = document.createElement("li");
	let li3 = document.createElement("li");
	let li4 = document.createElement("li");

	let buttonValider = document.createElement("button");
	let imgValider = document.createElement("img");
	dialogRegle.classList.add("regle");

	h2Rules.classList.add("centre");
	h2Rules.textContent = "RULES";

	h3Titre1.textContent = "OBJECTIVE";

	pTexte.classList.add("fint");
	pTexte.textContent =
		"Be the first player to connect 4 of the same colored discs in a row(either vertically, horizontally, or diagonally).";

	h3Titre2.textContent = "HOW TO PLAY";

	li1.classList.add("fint");
	li1.textContent = "Red goes first in the first game.";

	li2.classList.add("fint");
	li2.textContent =
		"Players must alternate turns, and only one disc can be dropped in each turn.";

	li3.classList.add("fint");
	li3.textContent = "The game ends when there is a 4-in-a-row or a stalemate.";

	li4.classList.add("fint");
	li4.textContent =
		"The starter of the previous game goes second on the next game.";

	buttonValider.classList.add("violeRouge");

	imgValider.src = "./assets/valide.svg";

	dialogRegle.appendChild(h2Rules);
	dialogRegle.appendChild(divInfo1);
	divInfo1.appendChild(h3Titre1);
	divInfo1.appendChild(pTexte);

	dialogRegle.appendChild(divInfo2);
	divInfo2.appendChild(h3Titre2);
	divInfo2.appendChild(olListe);
	olListe.appendChild(li1);
	olListe.appendChild(li2);
	olListe.appendChild(li3);
	olListe.appendChild(li4);

	dialogRegle.appendChild(buttonValider);
	buttonValider.appendChild(imgValider);

	buttonValider.addEventListener("click", () => {
		dialogRegle.remove();
	});

	return dialogRegle;
}
buttonRule.addEventListener("click", () => {
	let regle = Regle();
	document.body.appendChild(regle);
	regle.showModal();
});

let h2J1 = document.querySelector("h2.J1");
let h2J2 = document.querySelector("h2.J2");
let h3SpanSec = document.querySelector("span.time");
const buttonMenu = document.querySelector("button.buttonViole");
function Pause() {
	let dialogPause = document.createElement("dialog");
	let h2Pause = document.createElement("h2");
	let buttonContinue = document.createElement("button");
	let buttonRestart = document.createElement("button");
	let buttonQuit = document.createElement("button");

	dialogPause.classList.add("pause");

	h2Pause.textContent = "PAUSE";

	buttonContinue.textContent = "CONTINUE GAME";
	buttonContinue.classList.add("violeBlanc");

	buttonRestart.textContent = "RESTART";
	buttonRestart.classList.add("violeBlanc");

	buttonQuit.textContent = "QUIT GAME";
	buttonQuit.classList.add("violeRougeWidth");

	dialogPause.appendChild(h2Pause);
	dialogPause.appendChild(buttonContinue);
	dialogPause.appendChild(buttonRestart);
	dialogPause.appendChild(buttonQuit);

	buttonContinue.addEventListener("click", () => {
		dialogPause.remove();
		bodyPage.classList.remove("regle");
		bodyPage.classList.remove("page");
	});
	buttonRestart.addEventListener("click", () => {
		h3SpanSec.textContent = 15;
		h2J1.textContent = 0;
		h2J2.textContent = 0;
		dialogPause.remove();
		bodyPage.classList.remove("regle");
		bodyPage.classList.remove("page");

		debut();
	});
	buttonQuit.addEventListener("click", () => {
		h3SpanSec.textContent = 15;
		h2J1.textContent = 0;
		h2J2.textContent = 0;
		dialogPause.remove();
		dialogAcceuil.showModal();
		bodyPage.classList.remove("regle");

		clearInterval(timeur);
		a = 15;
	});

	return dialogPause;
}
buttonMenu.addEventListener("click", () => {
	bodyPage.classList.remove("regle");
	bodyPage.classList.add("page");
	let pause = Pause();
	document.body.appendChild(pause);
	pause.showModal();
});

const grille = [
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
];
var Score1 = 0;
var Score2 = 0;
var colonne = 0;
var NonDuJoueur = "";
var chronomètre = 15;

const grilleAvecGagnant1 = [
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["X", "X", "X", "X", "", "", ""],
];

const grilleAvecGagnant2 = [
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["X", "", "", "", "", "", ""],
	["X", "", "", "", "", "", ""],
	["X", "", "", "", "", "", ""],
	["X", "", "", "", "", "", ""],
];

const grilleAvecGagnant3 = [
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "X", "", "", ""],
	["", "", "X", "", "", "", ""],
	["", "X", "", "", "", "", ""],
	["X", "", "", "", "", "", ""],
];

const grilleAvecGagnant4 = [
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "X", "", "", ""],
	["", "", "X", "O", "", "", ""],
	["", "O", "O", "O", "", "", ""],
	["X", "O", "O", "O", "O", "", ""],
];

const grilleSansGagnant = [
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "X", "", "", ""],
	["", "", "X", "O", "", "", ""],
	["", "O", "O", "O", "", "", ""],
	["X", "O", "O", "X", "O", "", ""],
];

function checkWinner(grille) {
	const grilleLength = grille.length;
	const grillehup = grille[0].length;
	const directions = [
		[0, 1],
		[1, 0],
		[1, 1],
		[-1, 1],
	];

	for (let [d1, d2] of directions) {
		for (let i = 0; i < grilleLength; i++) {
			for (let h = 0; h < grillehup; h++) {
				const target = grille[i][h];
				if (target !== "") {
					for (let j = 1; j < 4; j++) {
						const I = i + j * d1;
						const H = h + j * d2;
						if (I < 0 || I >= grilleLength || H < 0 || H >= grillehup) {
							break;
						}
						if (grille[I][H] !== target) {
							break;
						}
						if (j == 3) {
							return target;
						}
					}
				}
			}
		}
	}
	return "";
}

let resultat = "";

resultat = checkWinner(grilleAvecGagnant1); // retourne "X"
console.log(resultat);

resultat = checkWinner(grilleAvecGagnant2); // retourne "X"
console.log(resultat);

resultat = checkWinner(grilleAvecGagnant3); // retourne "X"
console.log(resultat);

resultat = checkWinner(grilleAvecGagnant4); // retourne "O"
console.log(resultat);

resultat = checkWinner(grilleSansGagnant); // retourne ""
console.log(resultat);

const buttonPlay = document.querySelector("button.button1");
buttonPlay.addEventListener("click", () => {
	dialogAcceuil.close();
	bodyPage.classList.remove("page");
	debut();
});

let pSpanPlay = document.querySelector("span.player");

function flashText() {
	console.log(a);
	a--;
	h3SpanSec.textContent = a;
	if (a == 0) {
		clearInterval(timeur);
	}
}
function debut() {
	clearInterval(timeur);

	a = 15;

	timeur = setInterval(flashText, 1000);
}
