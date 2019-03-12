var left = 0;
var right = 0;
var main = 0;
var one = 0;
var nine = 0;
var five = 0;
var seven = 0;
var two = 0;
var ninetwo = 0;
var a = document.getElementById("1");
var b = document.getElementById("2");
var c = document.getElementById("3");
var d = document.getElementById("7");
var e = document.getElementById("8");
var f = document.getElementById("9");
var g = document.getElementById("13");
var h = document.getElementById("14");
var i = document.getElementById("15");
var j = document.getElementById("19");
var k = document.getElementById("20");
var l = document.getElementById("21");
var m = document.getElementById("25");
var n = document.getElementById("26");
var o = document.getElementById("27");
var code = 0;
var myBleep = document.getElementById('bleep');
var myDoor = document.getElementById('door');
var myError = document.getElementById('error');


function changeRight() {
	if(main == 0 && left == 0) {
		document.getElementById("main-view").style.backgroundImage="url('images/rightwall.png')";
		if (one == 1){
			document.getElementById("1").src="";
		} else {
			document.getElementById("1").src="images/1.png";
		}
		document.getElementById("6").src="";
		document.getElementById("9").src="";
		document.getElementById("12").src="";
		document.getElementById("14").src="";
		document.getElementById("21").src="";
		if (ninetwo == 1){
			document.getElementById("34").src="";
		} else {
			document.getElementById("34").src="images/9two.png";
		}
		main = 1;
		right = 1;
	} else if(main == 1 && left == 1){
		document.getElementById("main-view").style.backgroundImage="url('images/background2.png')";
		document.getElementById("1").src="";
		if (nine == 1){
			document.getElementById("6").src="";	
		} else {
			document.getElementById("6").src="images/9.png";
		}
		if (five == 1){
			document.getElementById("9").src="";
		} else {
			document.getElementById("9").src="images/5.png";	
		}
		document.getElementById("12").src="";
		document.getElementById("14").src="images/keypad.png";
		document.getElementById("21").src="";
		document.getElementById("34").src="";
		main = 0;
		left= 0;
	} else {
		
	}
}
function changeLeft() {
	if(main == 0 && right == 0){
		document.getElementById("main-view").style.backgroundImage="url('images/leftwall.png')";
		document.getElementById("1").src="";
		document.getElementById("6").src="";
		document.getElementById("9").src="";
		document.getElementById("14").src="";
		if (seven == 1){
			document.getElementById("12").src="";
		} else {
			document.getElementById("12").src="images/7.png";
		}
		if (two == 1){
			document.getElementById("21").src="";
		} else {
			document.getElementById("21").src="images/2.png";
		}
		document.getElementById("34").src="";
		main = 1;
		left = 1;
	} else if(main == 1 && right == 1){
		document.getElementById("main-view").style.backgroundImage="url('images/background2.png')";
		document.getElementById("1").src="";
		if (nine == 1){
			document.getElementById("6").src="";	
		} else {
			document.getElementById("6").src="images/9.png";
		}
		if (five == 1){
			document.getElementById("9").src="";
		} else {
			document.getElementById("9").src="images/5.png";
		}
		document.getElementById("12").src="";
		document.getElementById("14").src="images/keypad.png";
		document.getElementById("21").src="";
		document.getElementById("34").src="";
		main = 0;
		right = 0;
	} else {
		
	}
}

function sendAlert() {
	alert("You clicked the Code Lock!")
}
function removeImg(elem){
	if (elem.src.match("images/1.png")){
		elem.src="images/blank.png";
		one = 1;
		document.getElementById("i1").src=("images/1.png");
	} else if (elem.src.match("images/9.png")){
		elem.src="images/blank.png";
		nine = 1;
		document.getElementById("i2").src=("images/9.png");
	} else if (elem.src.match("images/5.png")){
		elem.src="images/blank.png";
		five = 1;
		document.getElementById("i3").src=("images/5.png");
	}else if (elem.src.match("images/7.png")){
		elem.src="images/blank.png";
		seven = 1;
		document.getElementById("i4").src=("images/7.png");
	}else if (elem.src.match("images/2.png")){
		elem.src="images/blank.png";
		two = 1;
		document.getElementById("i5").src=("images/2.png");
	} else if (elem.src.match("images/9two.png")){
		elem.src="images/blank.png";
		ninetwo = 1;
		document.getElementById("i6").src=("images/9two.png");
	} else {
	}
}

function useCodelock(){
	if (one == 1 && nine == 1 && five == 1 & seven == 1 && two == 1 && ninetwo == 1){
		document.getElementById("main-view").style.backgroundImage="url('images/gray.png')";
		document.getElementById("1").onclick = null;
		document.getElementById("6").onclick = null;
		document.getElementById("9").onclick = null;
		document.getElementById("12").onclick = null;
		document.getElementById("14").onclick = null;
		document.getElementById("21").onclick = null;
		document.getElementById("34").onclick = null;
		document.getElementById("1").setAttribute("onClick", "enterCodelock(this);");
		document.getElementById("2").setAttribute("onClick", "enterCodelock(this);");
		document.getElementById("3").setAttribute("onClick", "enterCodelock(this);");
		document.getElementById("7").setAttribute("onClick", " enterCodelock(this);");
		document.getElementById("8").setAttribute("onClick", " enterCodelock(this);");
		document.getElementById("9").setAttribute("onClick", " enterCodelock(this);");
		document.getElementById("13").setAttribute("onClick", " enterCodelock(this);");
		document.getElementById("14").setAttribute("onClick", " enterCodelock(this);");
		document.getElementById("15").setAttribute("onClick", " enterCodelock(this);");
		document.getElementById("19").setAttribute("onClick", " enterCodelock(this);");
		document.getElementById("20").setAttribute("onClick", " enterCodelock(this);");
		document.getElementById("21").setAttribute("onClick", " enterCodelock(this);");
		document.getElementById("25").setAttribute("onClick", " clearCode(this);");
		document.getElementById("27").setAttribute("onClick", " checkCode(this);");
		document.getElementById("14").src=("");
		document.getElementById("larrow").src=("");
		document.getElementById("rarrow").src=("");
		document.getElementById("1").src="images/1.png";
		document.getElementById("1").classList.add("border");
		document.getElementById("1").classList.add("button");
		document.getElementById("1").classList.remove("opacity25");
		document.getElementById("2").src="images/2.png";
		document.getElementById("2").classList.add("border");
		document.getElementById("2").classList.add("button");
		document.getElementById("3").src="images/3.png";
		document.getElementById("3").classList.add("border");
		document.getElementById("3").classList.add("button");
		document.getElementById("7").src="images/4.png";
		document.getElementById("7").classList.add("border");
		document.getElementById("7").classList.add("button");
		document.getElementById("8").src="images/5.png";
		document.getElementById("8").classList.add("border");
		document.getElementById("8").classList.add("button");
		document.getElementById("9").src="images/6.png";
		document.getElementById("9").classList.add("border");
		document.getElementById("9").classList.add("button");
		document.getElementById("9").classList.remove("opacity25");
		document.getElementById("13").src="images/7.png";
		document.getElementById("13").classList.add("border");
		document.getElementById("13").classList.add("button");
		document.getElementById("14").src="images/8.png";
		document.getElementById("14").classList.add("border");
		document.getElementById("14").classList.add("button");
		document.getElementById("15").src="images/9.png";
		document.getElementById("15").classList.add("border");
		document.getElementById("15").classList.add("button");
		document.getElementById("19").src="images/asterisk.png";
		document.getElementById("19").classList.add("border");
		document.getElementById("19").classList.add("button");
		document.getElementById("20").src="images/0.png";
		document.getElementById("20").classList.add("border");
		document.getElementById("20").classList.add("button");
		document.getElementById("21").src="images/hashtag.png";
		document.getElementById("21").classList.add("border");
		document.getElementById("21").classList.add("button");
		document.getElementById("21").classList.remove("opacity25");
		document.getElementById("25").src="images/clear.png";
		document.getElementById("25").classList.add("border");
		document.getElementById("25").classList.add("button");
		document.getElementById("27").src="images/enter.png";
		document.getElementById("27").classList.add("border");
		document.getElementById("27").classList.add("button");
	}else{
		alert("You Must Find The Code To Use The Lock.");
	}
}

function enterCodelock(elem){
	document.getElementById('bleep').play();
	if (code == 0 && elem.src.match("1.png")){
		code = 1;
		console.log("1");
	} else if (code == 1 && elem.src.match("9.png")){
		code = 2;
		console.log("2");
	} else if (code == 2 && elem.src.match("5.png")){
		code = 3;
		console.log("3");
	} else if (code == 3 && elem.src.match("7.png")){
		code = 4;
		console.log("4");
	} else if (code == 4 && elem.src.match("2.png")){
		code = 5;
		console.log("5");
	} else if (code == 5 && elem.src.match("9.png")){
		code = 6;
		console.log("6");
	} else {
	}
}

function checkCode(){
	if (code == 6){
		console.log("yuh");
		document.getElementById('door').play();
		alert("You have gained accessed to his computer")
		window.location.replace("http://raphaelvigil.github.io/website3/");
	} else {
		alert("The Code Is Incorrect!");
		error.play();
	}
}

function clearCode(){
	code = 0;
	alert("The Code Has Been Cleared!");
	document.getElementById('error').play();
}