const dialogPause = document.querySelector("dialog.pause");
const dialogAcceuil = document.querySelector("dialog.accueil");
const buttonRule = document.querySelector("button.button2");
// dialogAcceuil.showModal();

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

	buttonValider.classList.add("viole", "rouge", "position");

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
// buttonRule.addEventListener("click", () => {
// 	let regle = Regle();
// 	document.body.appendChild(regle);
// 	regle.showModal();
// });

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
	buttonQuit.classList.add("violeRouge");

	dialogPause.appendChild(h2Pause);
	dialogPause.appendChild(buttonContinue);
	dialogPause.appendChild(buttonRestart);
	dialogPause.appendChild(buttonQuit);

	buttonContinue.addEventListener("click", () => {
		dialogPause.remove();
	});

	return dialogPause;
}
buttonMenu.addEventListener("click", () => {
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
