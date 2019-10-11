

class Model{
    constructor(){
        this.model = this.loadModel();
        
    }
    async loadModel(){
        this.model = await tf.loadLayersModel("http://127.0.0.1:8080/model.json");
    }
    async predict(data){
        return this.model.predict(data);
    }
}