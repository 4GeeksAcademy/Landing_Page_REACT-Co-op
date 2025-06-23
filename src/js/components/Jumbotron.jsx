import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


const Jumbotron = () => {
    return (
        <div class="container py-4">
            <div class="p-5 mb-4 bg-body-tertiary rounded-3">
                <div class="container-fluid py-5">
                    <h1 class="display-5 fw-bold">Looking for something to play?</h1>
                    <p class="col-md-8 fs-4">You can see our recomendations here, for what games you can play, 
                        you should keep in mind what type of genre you're looking for before choosing something random.Either that, or press the button below.</p>
                    <button class="btn btn-primary btn-lg" type="button">Surprise me!</button>
                </div>
            </div>
        </div>
    )
};

export default Jumbotron;