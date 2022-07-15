import React, { useEffect } from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import './Reviews.css'
const Reviews = () => {
    const reviews = useReviews();

    return (

        <div className='review-container'>
            <h2>What our customers say!</h2>
            <div className='reviews'>
                {
                    reviews.map(review => (
                       
                        <ReviewDetails key={review.id}
                            review={review}
                        >

                        </ReviewDetails>
                        ))

                }
            </div>
        </div>
    );
};

export default Reviews;