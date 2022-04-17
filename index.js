setInterval(() => {
	console.log("hello world");
}, 0);

function f1() {
	console.log(this);
}

for (let i = 0; i < 1000; i++) {
	setTimeout(() => {
		console.log("cycke in setTimeout with timeout");
	}, 2000);
	setTimeout(() => {
		console.log("cycle in settimeout");
	}, 0);
}

const f2 = () => console.log(this);
