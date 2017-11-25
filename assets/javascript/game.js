//This is to create all the random numbers that are going to be used.
$(document ).ready(function(){

//Game Variables
var randomtotalnm = "";
var ranimg1;
var ranimg2;
var ranimg3;
var ranimg4;

//Score Variables
var ntotal = 0;
var scorewin = 0;
var scoreloose = 0;
var jjs = 0;


	function getrandomnumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	function resetgame() {
		// I need to reset the Game randomtotalnm
		randomtotalnm = getrandomnumber(65,95);
		$("#numerototal1").html("This is the number that you need to match:" + randomtotalnm);

		// I need to reset the random numbers of the images
		ranimg1 = getrandomnumber(5,12);
		console.log(ranimg1);
		ranimg2 = getrandomnumber(2,4);
		console.log(ranimg2);
		ranimg3 = getrandomnumber(5,15);
		console.log(ranimg3);
		ranimg4 = getrandomnumber(1,7);
		console.log(ranimg4);
		$("#foto1").attr("ran", ranimg1);
		$("#foto2").attr("ran", ranimg2);
		$("#foto3").attr("ran", ranimg3);
		$("#foto4").attr("ran", ranimg4);
		// I need to reset the tag #yaganaste
		$("#yaganaste").html("");

		// I need to reset ntotal 
		ntotal = 0;
		$("#valordenumero").html("The number that you have so far is:" + ntotal);
	}

// Create all random numbers
var randomtotalnm = getrandomnumber(65, 90);
		console.log(randomtotalnm);
		$("#numerototal1").html("This is the number that you need to match:" + randomtotalnm);

var ranimg1 = getrandomnumber(5, 12);;
		console.log(ranimg1);
		//$("#azteca1").html(ranimg1);

var ranimg2 = getrandomnumber(2, 4);;
		console.log(ranimg2);
		//$("#cantante1").html("");

var ranimg3 = getrandomnumber(5, 15);;
		console.log(ranimg3);
		//$("#catrin1").html("");

var ranimg4 = getrandomnumber(1, 7);;
		console.log(ranimg4);
		//$("#pistola1").html("");





		$("#foto1").attr("ran", ranimg1);
		$("#foto2").attr("ran", ranimg2);
		$("#foto3").attr("ran", ranimg3);
		$("#foto4").attr("ran", ranimg4);


		$(".foto").click(function(){
				console.log(this);
				ntotal += parseInt($(this).attr("ran"));
				$("#valordenumero").html("The number that you have so far is:" + ntotal);
				addingnumber();
		});		

		function addingnumber() {
			if (ntotal > randomtotalnm) {
				$("#yaganaste").html("You are over!");
				scoreloose++;
				jjs++;
				$("#juegosjugados").html("Juegos jugados=" + jjs);
				$("#scoreperdiendo").html("Your loose games: " + scoreloose);
				// Create a funtion where the game will reset, but only will reset the Total Number, the guessed numbers and there should be a game counter too.
				resetgame();
			}else if (ntotal < randomtotalnm) {
				$("#yaganaste").html("Keep playing, you still not there!");
			}else if (ntotal === randomtotalnm) {
				$("#yaganaste").html("WIIINNNNNN!!!!!!");
				scorewin++;
				jjs++;
				$("#juegosjugados").html("Juegos jugados=" + jjs);
				$("#scoreganando").html("You score is:" + scorewin);
				resetgame();
			}
		};
			
		
});







// 1. Pick the random amounts with the clicks on the images and add up the addition on the screen

//verifing if i can do this... with the n variables... still not making my n to wokr on the HTML...
		// $("#foto1").on("click", function(){
		// 		ntotal += ranimg1;
		// 		console.log(ntotal);
		// 		$("#valordenumero").html("The number that you have so far is:" + ntotal);
		// });
		// $("#foto2").on("click", function(){
		// 		ntotal += ranimg2;
		// 		$("#valordenumero").html("The number that you have so far is:" + ntotal);
		// });
		// $("#foto3").on("click", function(){
		// 		ntotal += ranimg3;
		// 		console.log(ntotal);
		// 		$("#valordenumero").html("The number that you have so far is:" + ntotal);
		// });
		// $("#foto4").on("click", function(){
		// 		ntotal += ranimg4;
		// 		$("#valordenumero").html("The number that you have so far is:" + ntotal);
		// });

		// 2. compare results when the equal or over values are on the addition
// 3. System to save the score of the player.

