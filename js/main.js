

const canvas = new Canvas();
const model = new Model();
const figure = new Figure();


function makePrediction(){
    const input = canvas.prepareData();
    const prediction = model.predict(input);
    prediction.then((result)=>{
        result.data().then(data=>updateDiagram(data));
    });
    
}

function updateDiagram(data){
    figure.update(data);
}