//Reverse a string, put it in alphabetical order, & dertimine if it's a palindrome.

//console.log("strings.js is loading");

let input = document.getElementById("input");
let output = document.getElementById("main");
let submitBtn = document.getElementById("submit");
let resetBtn = document.getElementById("reset");
let testString = "";
let reversed = "";
let palindromeCheck = "";
let alphabetically = "";

submitBtn.addEventListener("click", submit);
resetBtn.addEventListener("click", reset);

function submit() {
	let userInput = input.value;
	testString = userInput;
	console.log("user input", testString);

	reversal(testString);
	alphabits(testString);
	palindrome(testString);

	output.innerHTML = `Your string: ${testString}
						<br> 
						Your string reversed: ${reversed}
						<br> 
						Your string in alphabetical order: ${alphabetically}
						<br>
						Is it a palindrome? ${palindromeCheck}`
}

/*  Reversing with decrementing for loop
	The starting point of the loop will be (testString.length - 1) which 
	corresponds to the last character of the string.
    decrement i after each iteration. Loop starts at the end of string,
    and works its way backwards */

function reversal() {
	for (var i = testString.length - 1; i >= 0; i--) {
		reversed += testString[i];
	}
	console.log("REVERSED: ", reversed);
	return reversed;
};


function alphabits() {
	//let letters = testString.split("");
	//let alphabetically = letters.sort();
	alphabetically = testString.split("").sort().join("");

	console.log("IN ORDER: ", alphabetically);
	//return alphabetically;

};

function palindrome() {
	if (testString === reversed) {
		palindromeCheck = "Yes";
		console.log("This is a palindrome");
	} else {
		palindromeCheck = "No";
		console.log("This is not a palindrome");
	}

};

function reset () {
	input.value = "";
	//testString = "";
	reversed = "";
	alphabetically = "";
	output.innerHTML = "";
	//console.log("RESET TEST STRING", testString);
}

