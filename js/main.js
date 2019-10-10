

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
    document.querySelector('#prediction_label').innerHTML = "I think it is "+data.indexOf(Math.max(...data));
    document.querySelector('#question').classList.add('active');
}

function answer(value){
    document.querySelector('#question').classList.remove('active');
}