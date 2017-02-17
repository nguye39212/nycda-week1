


Math.floor(Math.random() * 20) + 1;
//-create a varible that generates a random number between 1 and 10

var randomNumber = Math.floor(Math.random() * 10) + 1;
//create a varible that holds the result of the prompt of 
//asking someone what number they want to guess

var guess = prompt('guess a number between 1 and 10!');

-wrong (the guess does NOT equal the random number)
-right (the guess DOES equal the random number)

if(randomNumber == guess){
	alert('your right')
} else{
	alert('Eher.')
}