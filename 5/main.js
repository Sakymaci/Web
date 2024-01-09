var loses = 0;
var wins = 0;
			
var play = function(userChoice) {
					
					document.getElementById("player").innerHTML="";
					document.getElementById("opponent").innerHTML="";
					document.getElementById("results").innerHTML="";
				
					
					if (userChoice == "kő" || userChoice == "papír" || userChoice == "olló") {
						document.getElementById("player").innerHTML='Ön választása' + ' ' + userChoice;
					} else if (userChoice == "rope") {
						document.getElementById("player").innerHTML='Ön választása' + ' ' + userChoice;
					} else {
						document.getElementById("player").innerHTML=".";
						
						return false;
					}
				
					var computerChoice = Math.random();
					if (computerChoice < 0.34) {
						computerChoice = "kő";
					} else if(computerChoice <= 0.67) {
						computerChoice = "papír";
					} else {
						computerChoice = "olló";
					}
				 
				 	document.getElementById("opponent").innerHTML='  Gép választása' + ' ' + computerChoice;
				 
					 var compare = function (choice1,choice2) {
						if (choice1 == choice2) {
							return "Döntetlen";
						} else if (choice1 == "kő"){
							if (choice2 =="olló") {
								wins++;
								return "Kő nyert";
							} else {
								loses++;
								return "Papír nyert";
							}
						} else if (choice1 == "papír") {
							if (choice2 == "kő") {
								wins++;
								return "papír nyert";
							} else {
								loses++;
								return "olló nyert";
							}
						} else if (choice1 == "olló") {
							if (choice2 == "kő") {
								loses++;
								return "kő nyert";
							} else {
								wins++;
								return "olló nyert";
							}
						} else if (choice1 == "rope") {
							wins++;
							return "rope FTW";
						} else {
							return "error. bummer dude. game over. no dice.";
						}
					};

					var winner = compare(userChoice,computerChoice);
					document.getElementById("results").innerHTML=winner;
					document.getElementById("wins").innerHTML=wins;
					document.getElementById("loses").innerHTML=loses;
					
					if (wins > 99 || loses > 99) {
						document.getElementById("wins").style.fontSize="44";
						document.getElementById("loses").style.fontSize="44";
					}
					if (wins > 999) {
						alert("You reached the max score of 999. <br />Congratulations, you have no life.");
					}
					if (loses > 999) {
						alert("Your opponent reached the max score of 999. <br />We're sorry, you have no life.");
					}
			};

var reset = function() {
	loses = 0;
	wins = 0;
	document.getElementById("wins").innerHTML=wins;
	document.getElementById("loses").innerHTML=loses;
};