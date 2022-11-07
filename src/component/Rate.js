import { useState } from "react";
import StarRatings from "react-star-ratings";


function Rate() {
    const [rate, setRate] = useState(Math.floor(Math.random() * (5 - 1 + 1) + 1));

    function changeRate(newRating, name) {
        setRate(newRating)
        const startList = 0
        if (startList) {
            let start = 0
            for (let i = 0; i < startList.length; i++) {
                start = start + (startList[i]["rate"])
            }
            start = (start / startList.length)
            setRate(start)
        }
    }

    return (
        <>
            <StarRatings
                className="start-rating"
                rating={rate}
                starRatedColor="#59ab6e"
                changeRating={changeRate}
                numberOfStars={5}
                name="rate"
            >
            </StarRatings>
        </>
    )
}

export default Rate;