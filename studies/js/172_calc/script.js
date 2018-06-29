

function soma(){

	var a = parseInt(document.getElementById('number1').value);
	var b = parseInt(document.getElementById('number2').value);

	var result = a+b;

	console.log(a + b);

	document.getElementById('outputText').innerHTML =  result;

	//Pintando o texto de soma
	document.getElementById('soma').style.color = 'red';

	//Os demais de preto
	document.getElementById('divide').style.color = 'black';
	document.getElementById('subtrai').style.color = 'black';

}


function subtrai(){

	var a = parseInt(document.getElementById('number1').value);
	var b = parseInt(document.getElementById('number2').value);

	var result = a-b;

	console.log(a+b);

	document.getElementById('outputText').innerHTML =  result;

	//Pintando o texto de soma
	document.getElementById('subtrai').style.color = 'red';

	//Os demais de preto
	document.getElementById('divide').style.color = 'black';
	document.getElementById('soma').style.color = 'black';
}


function divide(){

	var a = parseInt(document.getElementById('number1').value);
	var b = parseInt(document.getElementById('number2').value);

	var result = a/b;

	console.log(a/b);

	document.getElementById('outputText').innerHTML =  result;

	//Pintando o texto de soma
	document.getElementById('divide').style.color = 'red';

	//Os demais de preto
	document.getElementById('soma').style.color = 'black';
	document.getElementById('subtrai').style.color = 'black';
}