
class Model{
    constructor(){
        this.model = await tf.loadLayersModel('localstorage://model.json')
    }
    predict(data){
        return this.model.predict(data);
    }
}