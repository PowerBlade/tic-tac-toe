var xo=true;
var sq1=0;
var sq2=0;
var sq3=0;
var sq4=0;
var sq5=0;
var sq6=0;
var sq7=0;
var sq8=0;
var sq9=0;
// adding x or o
$(document).ready(function(){
	
  $("#c1").click(function() {
    if (document.getElementById('box1').innerHTML=="") {
      if(xo==true){
				document.getElementById('box1').innerHTML="X";
				sq1=1;
				xo=!xo;
      }else if(xo==false){
				document.getElementById('box1').innerHTML="O";
				sq1=(-1);
				xo=!xo;
			}
		}
		win();	
	});

	$("#c2").click(function() {
    if (document.getElementById('box2').innerHTML=="") {
      if(xo==true){
				document.getElementById('box2').innerHTML="X";
				sq2=1;
				xo=!xo;
      }else if(xo==false){
				document.getElementById('box2').innerHTML="O";
				sq2=(-1);
				xo=!xo;
			}
    }
		win();
	});
	
	$("#c3").click(function() {
    if (document.getElementById('box3').innerHTML=="") {
      if(xo==true){
        document.getElementById('box3').innerHTML="X";
				sq3=1;
				xo=!xo;
      }else if(xo==false){
				document.getElementById('box3').innerHTML="O";
				sq3=(-1);
				xo=!xo;
			}
    }
		win();
	});
	
	$("#c4").click(function() {
    if (document.getElementById('box4').innerHTML=="") {
      if(xo==true){
        document.getElementById('box4').innerHTML="X";
				sq4=1;
				xo=!xo;
      }else if(xo==false){
				document.getElementById('box4').innerHTML="O";
				sq4=(-1);
				xo=!xo;
			}
    }
		win();
	});
	
	$("#c5").click(function() {
    if (document.getElementById('box5').innerHTML=="") {
      if(xo==true){
        document.getElementById('box5').innerHTML="X";
				sq5=1;
				xo=!xo;
      }else if(xo==false){
				document.getElementById('box5').innerHTML="O";
				sq5=(-1);
				xo=!xo;
			}
    }
		win();
	});
	
	$("#c6").click(function() {
    if (document.getElementById('box6').innerHTML=="") {
      if(xo==true){
        document.getElementById('box6').innerHTML="X";
				sq6=1;
				xo=!xo;
      }else if(xo==false){
				document.getElementById('box6').innerHTML="O";
				sq6=(-1);
				xo=!xo;
			}
    }
		win();
	});
	
	$("#c7").click(function() {
    if (document.getElementById('box7').innerHTML=="") {
      if(xo==true){
        document.getElementById('box7').innerHTML="X";
				sq7=1;
				xo=!xo;
      }else if(xo==false){
				document.getElementById('box7').innerHTML="O";
				sq7=(-1);
				xo=!xo;
			}
    }
		win();
	});
	
	$("#c8").click(function() {
    if (document.getElementById('box8').innerHTML=="") {
      if(xo==true){
        document.getElementById('box8').innerHTML="X";
				sq8=1;
				xo=!xo;
      }else if(xo==false){
				document.getElementById('box8').innerHTML="O";
				sq8=(-1);
				xo=!xo;
			}
    }
		win();
	});
	
	$("#c9").click(function() {
    if (document.getElementById('box9').innerHTML=="") {
      if(xo==true){
        document.getElementById('box9').innerHTML="X";
				sq9=1;
				xo=!xo;
      }else if(xo==false){
				document.getElementById('box9').innerHTML="O";
				sq9=(-1);
				xo=!xo;
			}
    }
		win();
	});
});

//specifying win conditions
function win() {
	if ((sq1+sq2+sq3)==3 || (sq4+sq5+sq6)==3 || (sq7+sq8+sq9)==3 || (sq1+sq4+sq7)==3 || (sq2+sq5+sq8)==3 || (sq3+sq6+sq9)==3 || (sq1+sq5+sq9)==3 || (sq3+sq5+sq7)==3) {
		alert("x is the winner");
		reset();
	} else if ((sq1+sq2+sq3)==-3 || (sq4+sq5+sq6)==-3 || (sq7+sq8+sq9)==-3 || (sq1+sq4+sq7)==-3 || (sq2+sq5+sq8)==-3 || (sq3+sq6+sq9)==-3 || (sq1+sq5+sq9)==-3 || (sq3+sq5+sq7)==-3){
		alert("o is the winner");
		reset();
	} else if ((sq1!=0) && (sq2!=0) && (sq3!=0) && (sq4!=0) && (sq5!=0) && (sq6!=0) && (sq7!=0) && (sq8!=0) && (sq9!=0)){
		alert("its a draw");
		reset();
	}
}

function reset(){
	sq1=sq2=sq3=sq4=sq5=sq6=sq7=sq8=sq9=0;
	document.getElementById('box1').innerHTML="";
	document.getElementById('box2').innerHTML="";
	document.getElementById('box3').innerHTML="";
	document.getElementById('box4').innerHTML="";
	document.getElementById('box5').innerHTML="";
	document.getElementById('box6').innerHTML="";
	document.getElementById('box7').innerHTML="";
	document.getElementById('box8').innerHTML="";
	document.getElementById('box9').innerHTML="";
}