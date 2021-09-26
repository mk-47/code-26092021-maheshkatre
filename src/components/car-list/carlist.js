import React from 'react';
import './style.css';

const CarItem = (props) => {
    if(props.data) {
    return (
        <div className="card">
            <div className="card-body">
                <div className="car-name-container">
                    {/* Random car image */}
                    <img src={`https://loremflickr.com/g/320/240/car?random=${props.data.id}`}/>
                    <div className="car-name-left-container">
                        <div className="display-5">{props.data.company}{" "}{props.data.car_model}</div>
                        <div className="m-3">
                            <span className="h5 m-2">launch Year</span>
                            <span className="h5 m-2">{props.data.car_model_year}</span>
                        </div>
                        <div className="m-3">
                            <span className="h5 m-2">Color</span>
                            <span className="h5 m-2">{props.data.car_color}</span>
                        </div>
                        <div className="m-3">
                            <span className="h5 m-2">Price</span>
                            <span className="h5 m-2 prize-color">{props.data.price}</span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );}
    else {
        return <React.Fragment/>
    }
}

export default CarItem;