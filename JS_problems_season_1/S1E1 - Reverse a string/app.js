console.log("Q1. Given a string, return a new reversed string.");

function reversed(str){
	let a ='';
	for(let character of str){
		a = character + a;
	}
	return a;
}

result = reversed("hello");

console.log(result);

/*return str.split('').reverse().join('');*/