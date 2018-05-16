console.log("Q2. Given a Number, return a new reversed number.");

function reversed(num) {
	var a = num.toString().split('').reverse().join('');

	return parseInt(a)*Math.sign(num);
}

var result =reversed(-500);

console.log(result);