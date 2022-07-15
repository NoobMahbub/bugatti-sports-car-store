import React from 'react';
import Rating from 'react-rating';
import { ImStarEmpty, ImStarFull } from 'react-icons/im';
import './ReviewDetails.css';
const ReviewDetails = ({ review }) => {
    const { name, image, rate, message } = review;
    return (
        <div className='review-details-container'>
            <div>
                <img src={image} alt="" />
            </div>
            <div className='review-details'>
                <p>
                    <strong style={{ fontSize: '1.1rem' }}><u>User</u>: {name}</strong>
                </p>
                <p><strong><u>Review</u>: </strong><span className='message'>{message}</span></p>
                <p>
                    <strong><u>Rating</u>: {rate} </strong>
                    <Rating style={{ fontSize: '1rem', marginLeft: '5px' }} initialRating={rate} emptySymbol={<ImStarEmpty style={{ color: '#fdde6c' }} />}
                        fullSymbol={<ImStarFull style={{ color: '#fdde6c' }} />} readonly>
                    </Rating>
                </p>
            </div>
        </div>
    );
};

export default ReviewDetails;