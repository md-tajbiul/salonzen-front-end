import React from 'react';

const ReviewCart = ({review}) => {
    return (
        <div className="col-md-6 d-flex justify-content-center">
            <div className="card" style={{ width: '20rem', height:"10rem", border:"none"}}>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>{review.description}</p>
                        <footer className="blockquote-footer">{review.name}</footer>
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default ReviewCart;