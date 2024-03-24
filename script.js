var canvas = document.getElementById('canv');
var ctx = canvas.getContext('2d');
var myColor = 'black';
document.getElementById('color').oninput = function(){
	myColor = this.value;
}
canvas.onmousedown = function(event){
	canvas.onmousemove = function(event){
		var x =  event.offsetX;
		var y = event.offsetY;
		ctx.fillRect(x, y, 10, 10);
		ctx.fillStyle = myColor;
		ctx.fill();
	} 
    canvas.onmouseup = function(){
    	canvas.onmousemove = null;
    }
}

document.getElementById('result').onclick=getResult;

getResult();

function getResult(){
	var option1 = document.getElementById('torttype').value;
	var option2 = document.getElementById('tortsize').value;
	var option3 = document.getElementById('tortform').value;

	var z1=Number(option1);
	var z2=Number(option2);
	var z3=Number(option3);

	console.log(z1,z2,z3);
	z = z1+z2+z3;
	
	var cake=document.getElementsByClassName('cake');
	var cost=0;
	var totalcost=0;
	for (var i = 0; i < cake.length; i++) {
		if (cake[i].checked) {
			cost += parseInt(cake[i].getAttribute('cost'));
		    totalcost=cost+z;
	    }

	}
    document.getElementById('totalcost').innerHTML=totalcost;
}
