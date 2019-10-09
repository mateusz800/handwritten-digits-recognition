

const canvas = new Canvas();
const model = new Model();


function makePrediction(){
    const input = canvas.prepareData();
    const prediction = model.predict(input);
    prediction.then((result)=>{
        result.data().then(data=>updateDiagram(data));
    });
    
}

function updateDiagram(data){
    console.log(data);
}