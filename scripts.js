/* 
Contributers:

PowerBlade
AG-Labs

*/

var xo=true;
var option=0;
var diff=0;

let gameBoard = {
	squarsArray:	[
		[0,0,0],
		[0,0,0],
		[0,0,0]
	],

	printBoard: function(){
		for(i=0;i<3;i++){
			console.log(this.squarsArray[i]);
		}
	},

	winCheck: function(){
		this.printBoard();
		let gameFin = false;
		let winX, who;
		[winX, who] = this.sumRows();
		if (winX){
			gameFin = true;
			return [gameFin, who]
		}
		[winY, who] = this.sumCols();
		if (winY){
			gameFin = true;
			return [gameFin, who]
		}
		[winXY, who] = this.sumDiags();
		if (winXY){
			gameFin = true;	
			return [gameFin, who]
		}

		return [gameFin, who]
	},


	sumRows: function(){
		let rows = [0,0,0];
		let win = false;
		let winner ="";

		for (i=0; i<3; i++) {
			for (j=0; j<3; j++) {
				rows[i] = rows[i] + this.squarsArray[i][j];
			}
		}
		for (i=0;i<3;i++) {
			if (rows[i] == 3){
				win = true;
				winner = "X";
			}
			if (rows[i] == -3){
				win = true;
				winner = "O";
			}
		}
		return [win, winner];
	},
	sumCols: function(){
		let cols = [0,0,0];
		let win = false;
		let winner = "";
		for (i=0; i<3; i++) {
			for (j=0; j<3; j++) {
				cols[i] = cols[i] + this.squarsArray[j][i];
			}
		}
		for (i=0;i<3;i++) {
			if (cols[i] == 3) {
				win = true;
				winner = "X";
			}
			if (cols[i] == -3) {
				win = true;
				winner = "O";			
			}
		}
		return [win, winner];
	},
	sumDiags: function(){
		let diags = [0,0];
		let win = false;
		let winner = "";

		diags[0] = this.squarsArray[0][0] +this.squarsArray[1][1]+this.squarsArray[2][2];
		diags[1] = this.squarsArray[0][2] +this.squarsArray[1][1]+this.squarsArray[2][0];

		for (i=0;i<2;i++)
		if (diags[i] == 3){
			win = true;
			winner ="X";
		}
		if (diags[i] == -3){
			win = true
			winner = "O";
		}
		return [win, winner];
	},

	playerCondition: function() {
		let block=[0,0,0];
	
		//check rows
		let rows = [0,0,0];
	
		for (i=0; i<3; i++) {
			for (j=0; j<3; j++) {
				rows[i] = rows[i] + this.squarsArray[i][j];
			}
		}
	
		for (i=0;i<3;i++) {
			if (rows[i] == 2){
				block[0] = i+1;
				break;
			}
		}
	
		//check columns
		let cols = [0,0,0];
	
		for (i=0; i<3; i++) {
			for (j=0; j<3; j++) {
				cols[i] = cols[i] + this.squarsArray[j][i];
			}
		}
		for (i=0;i<3;i++) {
			if (cols[i] == 2) {
				block[1] = i+1;
				break;
			}
		}
	
		//check diag
		let diags = [0,0];
	
		diags[0] = this.squarsArray[0][0] +this.squarsArray[1][1]+this.squarsArray[2][2];
		diags[1] = this.squarsArray[0][2] +this.squarsArray[1][1]+this.squarsArray[2][0];
	
		for (i=0;i<2;i++) {
			if (diags[i] == 2){
				block[2]= i+1;
				break;
			}
		}
		return block;
	}
}

function winnerFull() {
	let [end, winner] = gameBoard.winCheck();
	if (end) {
		printOptions(winner);
	}
	
}

// adding x or o

	$(document).ready(function(){
		$(".box").click( function(){
			if (option!=0) {
				let sqaure = $(this).data('numberlk')
				let currID = this.id;
				let yVal = Math.floor((sqaure-1)/3);
				let xVal = ((sqaure-1)%3);
				if (document.getElementById(currID).innerHTML==""){
					if(xo==true){
						document.getElementById(currID).innerHTML = "<p>X</p>";
						gameBoard.squarsArray[yVal][xVal] = 1;
						xo=!xo;
					} else if (xo == false){
						document.getElementById(currID).innerHTML = "<p>O</p>";
						gameBoard.squarsArray[yVal][xVal] = - 1;
						xo=!xo;
					}
					//win stuff here
					winnerFull();
				}
				pcEasy();
				pcMedium();	
			}
			});
	});


function reset() {

	for (i=0;i<3;i++){
		for(j=0;j<3; j++){
			gameBoard.squarsArray[i][j]=0;
		}
	}

	for(i=1;i<10;i++){
		document.getElementById("c"+i).innerHTML="";
	}
	option=0;
	diff=0;
}



/* playing against the computer */
function pcEasy(){
	if (xo==false && option==2 && diff==1) {
		randomPlay();
		winnerFull();
	}
}

function pcMedium() {
	if (xo==false && option==1 && diff==2 ) {
		counterPlay(gameBoard.playerCondition());
		winnerFull();
	}
}

function randomPlay() {
	var counter=0;
	do {
		var rNumH = Math.floor(Math.random() * 3);
		var rNumV = Math.floor(Math.random() * 3);
		var chosenNum=3*(rNumH)+(rNumV)+1;
		if (document.getElementById("c"+chosenNum).innerHTML=="") {
			document.getElementById("c"+chosenNum).innerHTML="<p>O</p>";
			gameBoard.squarsArray[rNumH][rNumV] = - 1;
			xo=!xo;
			break;
		}
		console.log(counter+=1);
	} while (counter<10);
	
}




function playMode(value) {
	switch (value) {
		case 1:
			option=1; 	//play against friend (local)
			printOptions("reset");
			break;
		case 2:
			option=2;	//Play against computer
			printOptions("computer");
			break;
	
		default:
			break;
	}
}

function difficulty(value) {
	switch (value) {
		case 1:
			diff=1;
			printOptions("reset");
			break;
		case 2:
			diff=2;
			printOptions("reset");
			break;
	
		default:
			break;
	}

}

function pvc() {
	option=2;
}


function counterPlay(playerCon) {
	var counter=0;
	if(playerCon[0]!=0) {//rows
		for (i=0; i<3; i++){
			if(gameBoard.squarsArray[playerCon[0]-1][i]==0) {
				playO([playerCon[0]-1,i]);
			}
		}
	} else if(playerCon[1]!=0) {//columns
		for (i=0; i<3; i++){
			if(gameBoard.squarsArray[i][playerCon[1]-1]==0) {
				playO([i,playerCon[1]-1]);
			}
		}
	} else if(playerCon[2]!=0) {//diagonal
		if(playerCon[2]==1) {
			for (i=0; i<3; i++){
				if(gameBoard.squarsArray[i][i]==0) {
					playO([i,i]);
				}
			}	
		} else if(playerCon[2]==2){
			if(gameBoard.squarsArray[0][2]==0){
				playO([0,2])
			} else if(gameBoard.squarsArray[1][1]==0){
				playO([1,1]);
			} else if(gameBoard.squarsArray[2][0]==0){
				playO([2,0]);
			}
		}

	} else {//nothing
		randomPlay();
	}
}

function playO(coordinates) {
	if(xo==false){
		var chosenNum=3*(coordinates[0])+(coordinates[1])+1;
		document.getElementById("c"+chosenNum).innerHTML="<p>O</p>";
		gameBoard.squarsArray[coordinates[0]][coordinates[1]] = - 1;
		xo=!xo;
	}
	
}

function printOptions(input) {
	switch (input) {
		case 0:
			reset();
			document.getElementById("winner").innerHTML='<input class="choose" type="button" onclick="playMode(1)" value="Play against friend">  ';
			document.getElementById("winner").innerHTML+='<input class="choose" type="button" onclick="playMode(2)" value="Play against computer">  ';
			document.getElementById("winner").innerHTML+='<input class="choose" type="button" onclick="playMode(3)" value="Play Online" disabled>';
			break;
		case "computer":
			document.getElementById("winner").innerHTML='<input class="choose" type="button" onclick="difficulty(1)" value="Easy">  ';
			document.getElementById("winner").innerHTML+='<input class="choose" type="button" onclick="difficulty(2)" value="Medium">  ';
			document.getElementById("winner").innerHTML+='<input class="choose" type="button" onclick="difficulty(2)" value="Hard" disabled>';
			break;
		case "X":
			document.getElementById("winner").innerHTML = "X has won the game";
			document.getElementById("winner").innerHTML+='<br/><input class="choose" type="button" onclick="printOptions(0)" value="Play again?">  ';
			break;
		case "O":
			document.getElementById("winner").innerHTML = "O has won the game";
			document.getElementById("winner").innerHTML+='<br/><input class="choose" type="button" onclick="printOptions(0)" value="Play again?">  ';
			break;
		case "reset":
			document.getElementById("winner").innerHTML = '<input class="choose" type="button" onclick="printOptions(0)" value="Reset">';
			break;
		default:
			break;
	}	
}