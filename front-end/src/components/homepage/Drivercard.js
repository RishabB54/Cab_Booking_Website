import axios from "axios"
import "./Drivercard.css"
import React, { useState } from "react"


const DriverDetails =({ driverdata,date,time,address }) => {
    const [ BookedForDay, setBooking] = useState({
        name: driverdata.name,
        city: driverdata.city,
        rate: driverdata.rate,
        email: driverdata.email,
        date: date,
        time: time,
        address: address
    })

    const book = () => {
        axios.post("http://localhost:9002/book", BookedForDay)
            .then( res => {
                alert(res.data.message);
            })
    }


    return (
        <div className="Driver-card">
             {/* <div>Driver Name: {driverdata.name}</div>
             <div>Driver Rate: {driverdata.rate}</div>
             <div>Driver City: {driverdata.city}</div>
             <div>Driver Email: {driverdata.email}</div>
             <div className="button" onClick={book}>Book Driver</div> */}

            <div class="center">
            <div class="property-card">
                <a href="#">
                <div class="property-image">
                    <div class="property-image-title">
                    </div>
                </div></a>
                <div class="property-description">
                    <h5> {driverdata.name} </h5>
                    <p>Driver Rate: {driverdata.rate} Driver City: {driverdata.city} Driver Email: {driverdata.email}</p>
                    <div type="submit" onClick={book}>Book</div>
                </div>                 
            </div>
            </div>
        </div>
    )
}

export default DriverDetails