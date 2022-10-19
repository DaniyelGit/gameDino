const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event) {
	jump();
});

function jump() {
	if (dino.classList != "jump") {
		dino.classList.add("jump");
	}
	setTimeout(function() {
		dino.classList.remove("jump");
	}, 300);
}


let isAlive = setInterval(function() {
	let dinoTop = parseInt(getComputedStyle(dino).getPropertyValue("top"));
	let cactusLeft = parseInt(getComputedStyle(cactus).getPropertyValue("left"));


	if (cactusLeft > 0 && cactusLeft < 50 && dinoTop >= 140) {
		alert('GAME OVER');
	}
}, 10)