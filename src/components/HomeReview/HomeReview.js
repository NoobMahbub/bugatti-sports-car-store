import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
const HomeReview = () => {
    const reviews = useReviews();
    return (
        <div>
            <div className='review-container my-5'>
                <h2>Customer Reviews (3)</h2>
                <div className='reviews'>
                    {
                        reviews.slice(0, 3).map(review => (

                            <ReviewDetails key={review.id}
                                review={review}
                            >

                            </ReviewDetails>
                        ))

                    }

                </div>
                <Link to='/reviews' className='home-btn ms-auto'>See All Reviews</Link>
            </div>
        </div>
    );
};

export default HomeReview;