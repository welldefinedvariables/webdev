var operand1;
var operand2;
var operator;
var input = "";
var result = ""

var stage = "";

var numbers = document.getElementsByClassName('number');
var operators = document.getElementsByClassName('operator');


for (var i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener('click', calc);
}

for (var i = 0; i < operators.length; i++) {
	operators[i].addEventListener('click', calc);
}


function resetcalc(){
	operand1 = "0";
	operand2 = "0";
	operator = "";

	input = "";

	stage = "inputoperand1";
};

resetcalc();

function displayinput(o){
	input = input.concat(o);
	document.getElementById('input').innerHTML = input;
}

function displayresult(o){
	document.getElementById('result').innerHTML = o;
}

function inputoperand(n){
	if(stage == "inputoperand1"){
		operand1 = operand1.concat(n);
		displayinput(n);
		displayresult("00000000");
	}
	else if(stage == "inputoperand2"){
		operand2 = operand2.concat(n);
		displayinput(n);
	}
	
}

function calcoperator(op){
	if(stage == "inputoperand1"){
		operator = op;
		displayinput(op);
		stage = "inputoperand2";
	}
}

function getResult(){
	if(stage == "inputoperand2"){
		var a = parseInt(operand1,2);
		var b = parseInt(operand2,2);
		var c;

		switch(operator){
			case "+":
				c = a+b;
				break;
			case "-":
				c = a-b;
				break;
			case "*":
				c = a*b;
				break;
			case "/":
				c = a/b;
				break;
			default:
				break;
		}

		displayresult(c.toString(2));
		stage = "inputoperand1";
		resetcalc();
	}

}

function calc(e){
	var button = e.target.innerHTML;
	switch(button){
		case "0":
			inputoperand("0");
			break;
		case "1":
			inputoperand("1");
			break;
		case "+":
			calcoperator("+");
			break;
		case "-":
			calcoperator("-");
			break;
		case "*":
			calcoperator("*");
			break;
		case "/":
			calcoperator("/");
			break;
		case "=":
			getResult();
			break;
		default:
			break;
	}
}


for (var i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener('click', calc);
}

for (var i = 0; i < operators.length; i++) {
	operators[i].addEventListener('click', calc);
}

