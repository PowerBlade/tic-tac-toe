/* 
Contributers:

Edwin Kadavy
Andrew Godley

*/

var xo=true;

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
	}
}

// adding x or o
$(document).ready(function(){
	
	$(".box").click( function(){
		let sqaure = $(this).data('numberlk')
		let currID = this.id;
		let xVal = Math.floor((sqaure-1)/3);
		let yVal = ((sqaure-1)%3);

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
			let [end, winner] = gameBoard.winCheck();
			if (end) {
				alert(winner + " has won the game");
				reset();
			}
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
}


/* playing againsthe computer */
function pc(){
	if (xo==false) {
		while (1) {
			var rNumV = Math.floor(Math.random() * 3);
			var rNumH = Math.floor(Math.random() * 3);
			if (gameBoard.squarsArray[rNumH][rNumV] == 0) {
				gameBoard.squarsArray[rNumH][rNumV] = - 1;
				xo=!xo;
				break;
			}
		}
		
		
	}
}


