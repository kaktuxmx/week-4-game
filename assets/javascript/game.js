var randomtotalnm = "";
var ranimg1;
var ranimg2;
var ranimg3;
var ranimg4;

// Create all random numbers
randomtotalnm = Math.floor(Math.random() * 100);
		console.log(randomtotalnm);
		$("#numerototal").html("randomtotalnm");
ranimg1 = Math.floor(Math.random() * 37 )+ 1;
		console.log(ranimg1);
		$("#azteca1").html(ranimg1);
ranimg2 = Math.floor(Math.random() * 10) + 1;
		console.log(ranimg2);
		$("#cantante1").html(ranimg2)
ranimg3 = Math.floor(Math.random() * 3) + 1;
		console.log(ranimg3);
		$("#catrin1").html(ranimg3);
ranimg4 = Math.floor(Math.random() * 21)+ 1;
		console.log(ranimg4);
		$("#pistola1").html(ranimg4);

//logic 

// 1. Pick the random amounts with the clicks on the images and add up the addition on the screen
// 2. compare results when the equal or over values are on the addition
// 3. System to save the score of the player.




