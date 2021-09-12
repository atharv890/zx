canvas=document.getElementById("bh");
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke(); 

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.arc(300,250,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.arc(350,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.arc(400,250,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.arc(450,200,40,0,2*Math.PI);
ctx.stroke();




