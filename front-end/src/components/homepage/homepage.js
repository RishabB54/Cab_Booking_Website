import "./homepage.css"
import React, { useState } from "react"
import axios from "axios"
import DriverDetails from "./Drivercard"

const Homepage = ({setLoginUser}) => {
    const [output,setOutput]=useState([]);

    const [ city, setCity] = useState({
        cityname: "",
        destination: "",
        cartype: "",
        date: "",
        time: "",
        address: "",
    })

    const handleChange = e => {
        const { name, value } = e.target
        setCity({
            ...city,
            [name]: value
        })
    }

    const submitdata = (event) => {
      event.preventDefault();
        console.log(city)
        axios.post("http://localhost:9002/homepage", city)
        .then(res => {
            console.log("hi response");
            console.log(res.data.message);
            console.log(res.data);
            console.log(typeof(res))
            setOutput(res.data);
        })
        // .catch((err) => {})
        var x= document.getElementById("driver_content");
        if (x.style.display === "block") {
            x.style.display = "none";
          }
    }

    return (
        <div class="homepage">
            {/* <h1>Hello Homepage</h1>
            <div className="button" onClick={() => setLoginUser({})}>Logout</div>
            <input type="text" name="cityname" value={city.cityname} placeholder="City Name" onChange={ handleChange }></input>
            <input type="text" name="destination" value={city.destination} placeholder="Final Destination" onChange={ handleChange }></input>
            <input type="text" name="cartype" value={city.cartype} placeholder="Car Type" onChange={ handleChange }></input>
            <input type="date" name="date" value={city.date} placeholder="Date of travel" onChange={ handleChange }></input>
            <input type="time" id="time" name="time" value={city.time} onChange={handleChange}></input>
            <input type="text" id="address" name="address" value={city.address} placeholder="Pickup Address" onChange={handleChange}></input>

            <div className="button" onClick={submitdata}>Submit</div>
             */}
            <section class="ftco-section">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-md-10">
                    <div class="wrapper">
                      <div class="row no-gutters">
                        <div class="col-md-6">
                          <div class="contact-wrap w-100 p-lg-5 p-4">
                            <h3 class="mb-4">Send us a message</h3>
                            <div id="form-message-warning" class="mb-4"></div> 
                            <div id="form-message-success" class="mb-4">
                              Your message was sent, thank you!
                            </div>
                            <form method="POST" id="contactForm" name="contactForm" class="contactForm">
                              <div class="row">
                                <div class="col-md-12">
                                  <div class="form-group">
                                    <input type="text" class="form-control" name="cityname" value={city.cityname} placeholder="City Name" onChange={ handleChange }></input>
                                  </div>
                                </div>
                                <div class="col-md-12"> 
                                  <div class="form-group">
                                    <input type="text" class="form-control" name="destination" value={city.destination} placeholder="Destination" onChange={ handleChange }></input>
                                  </div>
                                </div>
                                <div class="col-md-12">
                                  <div class="form-group">
                                    <input type="text" class="form-control" name="cartype" value={city.cartype} placeholder="Car Type" onChange={ handleChange }></input>
                                  </div>
                                </div>
                                <div class="col-md-12">
                                  <div class="form-group">
                                  <input type="date" class="form-control" name="date" value={city.date} placeholder="Date of travel" onChange={ handleChange }></input>
                                  </div>
                                </div>
                                <div class="col-md-12">
                                  <div class="form-group">
                                    <input type="time" id="time" class="form-control" name="time" value={city.time} onChange={handleChange}></input>
                                  </div>
                                </div>
                                <div class="col-md-12">
                                  <div class="form-group">
                                    <textarea name="address" value={city.address} placeholder="Pickup Address" onChange={handleChange} class="form-control" id="message" cols="30" rows="3" ></textarea>
                                    {/* <input type="text" id="address" name="address" value={city.address} placeholder="Pickup Address" onChange={handleChange}></input> */}
                                  </div>
                                </div>
                                <div class="col-md-12">
                                  <div class="form-group">
                                    <input type="submit" value="Submit" class="btn btn-primary" onClick={submitdata}></input>
                                    <div class="submitting"></div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div class="col-md-6 d-flex align-items-stretch">
                          <div class="info-wrap w-100 p-lg-5 p-4 img">
                            {/* <h3>Contact us</h3>
                            <p class="mb-4">We're open for any suggestion or just to have a chat</p>
                            <div class="dbox w-100 d-flex align-items-start">
                              <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fa fa-map-marker"></span>
                              </div>
                              <div class="text pl-3">
                                <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                              </div>
                            </div>
                            <div class="dbox w-100 d-flex align-items-center">
                              <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fa fa-phone"></span>
                              </div>
                              <div class="text pl-3">
                                <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                              </div>
                            </div> */}
                            
                            <div class="dbox w-100 d-flex align-items-center">
                              {/* <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fa fa-paper-plane"></span>
                              </div> */}
                              <div class="text pl-3">
                                {/* <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p> */}
                                <div id="driver_content" >
                                      {output.map((one_driver) => (
                                          <DriverDetails driverdata={one_driver} date={city.date} time={city.time} address={city.address}/>
                                      ))}
                                </div>
                              </div>
                            </div>
                            {/* <div class="dbox w-100 d-flex align-items-center">
                              <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fa fa-globe"></span>
                              </div>
                              <div class="text pl-3">
                                <p><span>Website</span> <a href="#">yoursite.com</a></p>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div id="driver_content" >
                    {output.map((one_driver) => (
                        <DriverDetails driverdata={one_driver} date={city.date} time={city.time} address={city.address}/>
                    ))}
              </div> */}

            </section>
        </div>
    )
}

export default Homepage