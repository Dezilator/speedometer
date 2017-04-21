//ez szétcsúszik telón:


//ablak méretei (és azok %-os csökkentése):
var w;
var h;

function dimension(){
	
	w = window.innerWidth;
	h = window.innerHeight;

}

var wd = 0.1*w;
var hd = 0.1*h;

//document.getElementById("digits").innerHTML = "<img src='digit.png' width='" + wd + "'>"+&nbsp+"<img src='digit.png' width='" + wd + "'>";



window.onclick = sign;


var d; //newDate
var oldtime = 0; //az előbbi idő átadva ide
var currtime = 0; //jelenlegi idő
var clck = 0; 
var dif; //előbbi és jelenlegi különbsége
var pi = 3.1415;
var r = 0.35; //kerék sugara(méterben)
var k = 2 * r * pi; //kerülete (méterben)
var speed = 0;
var speedh = 0;
var speedhs;

var difz = 0;
var currtimez = 0;
var dz;

function time(){

d = new Date();
currtime = d.getTime();
dif = currtime - oldtime;
oldtime = currtime;

}

function timez(){
dz = new Date();
currtimez = dz.getTime();
difz = currtimez - oldtime;
}

//átlag számítás:

function callavgtimer(){
	
	setInterval(avg, 500);
	
}

var speeds = [];
var sLen;
var avg;
var avg1 = 0;

function avg(){
	
	if(speedh > 0){
	speeds.push(speedh);
	
	
	sLen = speeds.length;
	var sLen2 = sLen-1;
	avg = 0;
	avg1 = avg1 + Number(speeds[sLen2]);
	avg = Math.round(avg1/sLen);
	document.getElementById("debug0").innerHTML += speeds[sLen2]+"<br>";
		
	}
	
	document.getElementById("debug2").innerHTML = "Átlag: "+avg+" km/h";
	

	draw();
	
	
}

//grafikon:



var sLeno = 0;
var avgo = 0;
var speedho = 0;

function draw(){
	
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	if(canvas.width == 600){
		canvas.width = w*0.8;
	}
	
	/*if(avgo == 0){
	ctx.moveTo(0, 0);
	ctx.lineTo(Number(1*sLen), Number(100-avg));

	}else{*/
	
	//átlag:
	ctx.beginPath();
	ctx.strokeStyle="#000000";
	ctx.moveTo(sLeno, Number(canvas.height-avgo));
	ctx.lineTo(Number(1*sLen), Number(canvas.height-avg));
	ctx.stroke();
	

		
	//pillanatnyi sebesség:
	ctx.beginPath()
	ctx.strokeStyle="#FF0000";
	ctx.moveTo(sLeno, Number(canvas.height-speedho));
	ctx.lineTo(Number(1*sLen), Number(canvas.height-speedh));
	
	ctx.stroke();
	
	
	sLeno = 1*sLen;
	avgo = avg;
	speedho = speedh;
}

//nullázás:

function callzero(){
setInterval(zero, 3000);
}

function zero(){
timez();

if(difz > 2000){
speedh = 0;
document.getElementById("digits").innerHTML = "<img src='https://raw.githubusercontent.com/Dezilator/speedometer/master/0.png' width='" + wd + "'> <img src='https://raw.githubusercontent.com/Dezilator/speedometer/master/0.png' width='" + wd + "'>";
}
}


var dist = 0;

//feldolgozza a jelet:
function sign() {
	

	clck = clck+1;
	dist = Math.round(dist+k);
	
	time();
	
	if(clck == 2){
	callzero();
	callavgtimer();
	}

	
	//átváltás km/h-ba + feldarabolás számjegyekké:
	difsec = 1000/dif;
	speed = k*difsec;
	speedh = Math.round(speed*3.6);
	speedhs = speedh.toString();
	var spl = speedhs.split("");
	
	//ha csak egy számjegy lenne:
	if(spl[1] == undefined){
		spl[1] = spl[0];
		spl[0] = 0;
	}
	//digit számok kijelzése:
	
	if(clck != 1){
	document.getElementById("digits").innerHTML = "<img src='" + spl[0] + ".png' width='" + wd + "'>" + "&nbsp" + "<img src='" + spl[1] + ".png' width='" + wd + "'>";
	}
	
    
	document.getElementById("debug1").innerHTML = dif;
	document.getElementById("debug3").innerHTML = "Megtett táv: "+dist+" m";

	
	
}
