const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
const model = new Model();
ctx.lineWidth = 10;

coordinates = {
    'first': [0, 0],
    'second': [0, 0]
}
var draw = false;

canvas.onmousedown = function(e){
    draw = true;
    ctx.beginPath();
    coordinates.first[0] = getMousePos(e).x;
    coordinates.first[1] = getMousePos(e).y;  

}

canvas.onmousemove = function(e){
    if(draw){
        coordinates.second[0] = getMousePos(e).x;
        coordinates.second[1] = getMousePos(e).y;
        drawLine();
        coordinates.first[0] = coordinates.second[0];
        coordinates.first[1] = coordinates.second[1];
    }
}

canvas.onmouseup = function(e){
    draw = false;
}

function drawLine(){
    ctx.moveTo(coordinates.first[0], coordinates.first[1]);
    ctx.lineTo(coordinates.second[0], coordinates.second[1]);
    ctx.stroke();
}

function getMousePos(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width; 
    const scaleY = canvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
}

function reset(){
    ctx.closePath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    coordinates.first[0] = coordinates.second[0];
    coordinates.first[1] = coordinates.second[1];
}

function predict(){
    var data = ctx.getImageData(0, 0, canvas.width, canvas.height);
    console.log(data);
    //const prediction = model.predict(data);
}