import React from "react";
import "./Property.css";


function  Property () {
    return (
     <section class="light-theme">
    <div class="banner d-flex align-items-center">
        <div class="banner-left">
            <h1>Transparent <br/> Modern  <br/> Property </h1>
            <div class="inner-desc">
                <p>we are here to make your journey to a new home, simple and memorable. So we decided to bring you a
                    platform which allows you to browse through thousands of property listings across 5+ cities in
                    Kenya.
                    Now buying and renting comes with the freedom of ease and comfort. </p>
                <form>
                    <div class="form-group d-flex flex-wrap">
                        <input type="text" class="form-control" id="exampleInputtext1"
                            placeholder="Enter city to search properties here"/>
                        <button type="submit" class="black-btn">Search</button>
                    </div>
                </form>
            </div>
    
        </div>
        <div class="banner-right d-flex">
            <div class="family">
                <img src="https://yudiz.com/codepen/real-estate/property-img-one.png" alt="img" class="img-fluid"></img>
                <img src="https://yudiz.com/codepen/real-estate/property-img-two.png" alt="img" class="img-fluid"></img>
                <div class="banner-right-inner">
                    <h2>5k+</h2>
                    <span>satisfied <br/> family </span>
                    <img src="https://yudiz.com/codepen/real-estate/heart-icon.svg" alt="heart-icon" class="img-fluid"></img>
                </div>
                <img src="https://yudiz.com/codepen/real-estate/property-img-three.png" alt="img" class="img-fluid"></img>
                <img src="https://yudiz.com/codepen/real-estate/property-img-four.png" alt="img" class="img-fluid"></img>
            </div>
            <div class="sale">
                <img src="https://yudiz.com/codepen/real-estate/property-img-five.png" alt="img" class="img-fluid"></img>
                <img src="https://yudiz.com/codepen/real-estate/property-img-six.png" alt="img" class="img-fluid"></img>
                <div class="banner-right-inner">
                    <h2>10k+</h2>
                    <span>Available <br/> Unit for Sale </span>
                    <img src="https://yudiz.com/codepen/real-estate/unit-icon.svg" alt="unit-icon" class="img-fluid"></img>
                </div>
                <img src="https://yudiz.com/codepen/real-estate/property-img-seven.png" alt="img" class="img-fluid"></img>
                <img src="https://yudiz.com/codepen/real-estate/property-img-eight.png" alt="img" class="img-fluid"></img>
            </div>
        </div>
    </div>
</section>
    )
}

export default Property;