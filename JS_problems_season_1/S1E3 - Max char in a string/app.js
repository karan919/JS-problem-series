console.log("Q3. Max char in a string");

function max(str){
	const charMap ={};
	let max =0;
	let maxChar ='';

	for(let i of str){
		charMap[i] = charMap[i] + 1 || 1;
	}

	for(let i in charMap){
		if(charMap[i]> max){
			max=charMap[i];
			maxChar = i;
		}
	}

	return maxChar;
}

var result= max("hellooooooo world");

console.log(result); 