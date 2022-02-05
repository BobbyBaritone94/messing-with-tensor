import React, {useState} from 'react';
import '@tensorflow/tfjs-backend-webgl'
const mobilenet = require('@tensorflow-models/mobilenet');

const analyzeImage = async(e)=>{
    e.preventDefault()
    const img = document.getElementById('img');
    console.log("hello")
    // Load the model.
    mobilenet.load().then(model => {
        // Classify the image.
        model.classify(img,5).then(predictions => {
          console.log('Predictions: ');
          console.log(predictions);
        });
      });
}

function TensorPhotos(props) {

    return (
        <div>
            <img crossOrigin='anonymous' id="img"src="https://picsum.photos/200/300"></img>
            <button onClick={analyzeImage}>Analyze</button>
        </div>
    );
}

export default TensorPhotos;