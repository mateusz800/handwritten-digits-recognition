

class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}


class Canvas{
    constructor(){
        this.canvas = document.querySelector('#canvas');
        this.canvas.height = 28;
        this.canvas.width = 28;
        this.ctx = this.canvas.getContext("2d");
        this.drawFlag = false;
        this.ctx.lineWidth = 2;
        this.ctx.miterLimit = 1;
        this.ctx.lineJoin = 'round';
        this.ctx.lineCap = 'round';
        this.ctx.strokeStyle = "#3333";
        this.coordinates = [];
        this.canvas.onmousedown = this.mouseDown.bind(this);
        this.canvas.onmousemove = this.mouseMove.bind(this);
        this.canvas.onmouseup = this.mouseUp.bind(this);
    }
    getMousePos(e) {
        const rect = this.canvas.getBoundingClientRect();
        const scaleX = this.canvas.width / rect.width; 
        const scaleY = this.canvas.height / rect.height;
        return new Point((e.clientX - rect.left) * scaleX, (e.clientY - rect.top) * scaleY);
    }
    mouseDown(e){
        this.drawFlag = true;
        this.ctx.beginPath();
        this.coordinates.push(this.getMousePos(e));
    }
    mouseMove(e){
        if(this.drawFlag){
            this.coordinates.push(this.getMousePos(e));
            this.drawLine();
            this.coordinates.splice(0, 1);
        }
    }
    mouseUp(e){
        this.drawFlag = false;
        this.coordinates = [];
    }
    drawLine(){
        this.ctx.moveTo(this.coordinates[0].x, this.coordinates[0].y);
        this.ctx.lineTo(this.coordinates[1].x, this.coordinates[1].y);
        this.ctx.stroke();
    }
    clear(){
        this.ctx.closePath();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    prepareData(){
        const image = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        var data = tf.browser.fromPixels(image, 1).reshape([1,28,28,1]);
        data = data.div(255);
        return data;
    }

}




