var randomtotalnm = "";
var ranimg1;
var ranimg2;
var ranimg3;
var ranimg4;



//This is to create all the random numbers that are going to be used.
$(document ).ready(function(){
// Create all random numbers
randomtotalnm = Math.floor(Math.random() * 40 + 35);
		console.log(randomtotalnm);
		$("#numerototal1").html("This is the number that you need to match:" + randomtotalnm);

ranimg1 = Math.floor(Math.random() * 15 )+ 1;
		console.log(ranimg1);
		//$("#azteca1").html(ranimg1);

ranimg2 = Math.floor(Math.random() * 10) + 1;
		console.log(ranimg2);
		//$("#cantante1").html("");

ranimg3 = Math.floor(Math.random() * 3) + 1;
		console.log(ranimg3);
		//$("#catrin1").html("");

ranimg4 = Math.floor(Math.random() * 9)+ 1;
		console.log(ranimg4);
		//$("#pistola1").html("");



})

var n;

// 1. Pick the random amounts with the clicks on the images and add up the addition on the screen

//verifing if i can do this... with the n variables... still not making my n to wokr on the HTML...
		$("#foto1").on("click", n)
		$("#foto2").on("click", n2)
		$("#foto3").on("click", n3)
		$("#foto4").on("click", n4)

		function addingnumber() {
			n += this.value;
			$("#valordenumero")html("Esto es lo que llevas sumado:" + n);
		}

// 2. compare results when the equal or over values are on the addition
// 3. System to save the score of the player.




