//ez szétcsúszik telón:


//ablak méretei (és azok %-os csökkentése):
var w = window.innerWidth;
var h = window.innerHeight;
var wd = 0.3*w;
var hd = 0.3*h;

//document.getElementById("digits").innerHTML = "<img src='digit.png' width='" + wd + "'>"+&nbsp+"<img src='digit.png' width='" + wd + "'>";



window.onclick = sign;


var d; //newDate
var oldtime = 0; //az előbbi idő átadva ide
var currtime = 0; //jelenlegi idő
var clck = 0; 
var dif; //előbbi és jelenlegi különbsége
var pi = 3.1415;
var r = 0.35; //kerék sugara
var k = r * pi; //kerülete
var speed = 0;
var speedh = 0;

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

//feldolgozza a jelet:
function sign() {
	

	clck = clck+1;
	
	time();
	
	if(clck > 2){
	callzero();
	}

	
	//átváltás km/h-ba + feldarabolás számjegyekké:
	difsec = 1000/dif;
	speed = k*difsec;
	speedh = Math.round(speed*3.6);
	var speedhs = speedh.toString();
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

	
	
}
