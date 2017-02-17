 function change(){
	document.getElementById('myElement').innerHTML  = "My New Text"
}
 
 function promptme() {
 	var name = prompt('what is your name');
	var greeting = `Hello, ${name}.`; 
	document.getElementById('myElement').innerHTML = greeting;
 }
 



var number= prompt('enter a number')

 if(number>10){
 	alert('your number is greater than 10');
 } 
 else if(number==10){
 	alert('yes')
 }
 else{
 		alert('your number is less than 10');
 } 