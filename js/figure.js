class Bar{
    constructor(element){
        this.element = element;
        this.value = 0.0;
        this.max_height = 200;
    }
    setValue(newValue){
        this.value = newValue;
        this.element.style.transform = 'translate(0, ' + -this.value*this.max_height + 'px)';
    }

}

class Figure{
    constructor(){
        this.element = document.querySelector('.figure')[0];
        const barElements = document.querySelectorAll('.category');
        this.barArray = new Array(10);
        for(var i=0;i< this.barArray.length; i++){
            this.barArray[i] = new Bar(barElements[i]);
        }
    }
    update(data){
        for(var i=0; i<10; i++){
            this.barArray[i].setValue(data[i]);
        }
    }
}

