import "./TravelCard.css"
import { useState, useEffect } from 'react'


const TravelCard = ({id, destination, image, days, totalCost, description, deleteTravelPlans }) => {

    const [labelClass, setLabelClass] = useState('Regular')

    useEffect(() => {
        if (totalCost <= 350) {
            setLabelClass('greatDeal');
        } else if (totalCost >= 1500) {
            setLabelClass('premium');
        }
    }, [totalCost]);



    return (
        <div className='TravelCard'>

            <img src={image} alt="" />

            <div className="details">
                <h1> {destination} ({days} Days) </h1>
                <p>{description} </p>
                <div>
                    <h5>Price: </h5>
                    <p> {totalCost}€ </p>
                </div>

                <div className="labels">
                    <label className={`${labelClass}`} htmlFor=""> {labelClass}</label>
                </div>

                <button onClick={() => deleteTravelPlans(id)}>Delete</button>
            </div>

        </div>
    )
}

export default TravelCard