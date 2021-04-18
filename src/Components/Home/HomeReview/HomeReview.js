import React, { useEffect, useState } from 'react';
import loadingGif from "../../../Assets/loading.gif";
import HomeReviewCart from './HomeReviewCart';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const url = `https://cryptic-escarpment-26918.herokuapp.com/reviews`;
        fetch(url)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    return (
        <div className="container text-center" style={{marginBottom:'10vh'}}>
            <h2>People Says</h2>
            <div className="row" style={{marginRight:'0', marginBottom:"2rem", marginTop:'2rem'}}>
                {
                    reviews.map(review => <HomeReviewCart review={review} key={review._id}/>)
                }
            </div>
            {
                reviews.length === 0 && <img  style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}} src={loadingGif} alt="Loading"/>
            }
        </div>
    );
};

export default Review;