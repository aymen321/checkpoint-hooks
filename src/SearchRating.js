import ReactStars from "react-rating-stars-component";
import React from "react";

const SearchRating = () => {
    var ratingValue =0
    const changerating = (newRating) => {
        console.log("111111",newRating);
        ratingValue= newRating
        //return (ratingValue)
    };
    
    return (
        <div>
             <ReactStars
                count={5}
                size={24}
                onChange={changerating}
                //let value={changerating}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
            />
        </div>
    )
}

export default SearchRating
