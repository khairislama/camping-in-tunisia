import React, { useState, useEffect } from 'react'
import '../../assets/stylesheets/campgroundSlider.css'


function CampgroundSlider(props) {
    const [slideIndex, setSlideIndex] = useState(1)
    useEffect(()=>{
        showSlides(slideIndex);
    }, [slideIndex])
    
    function showSlides(n) {
        var i;
        let slides = document.getElementsByClassName("campgroundSliderMySlides");
        let dots = document.getElementsByClassName("campgroundSliderDemo");
        let captionText = document.getElementById("campgroundSliderCaption");
        if (n > slides.length) {
            setSlideIndex(1)
            n =1
        }
        if (n < 1) {
            setSlideIndex(slides.length)
            n = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" campgroundSliderActive", "");
        }
        slides[n-1].style.display = "block";
        dots[n-1].className += " campgroundSliderActive";
        captionText.innerHTML = dots[n-1].alt;
    }

    const IMG_URL = `/uploads/campgrounds/${props.campground.campgroundImages}`

  return (
    <div className="campgraoundSlider">
        <div className="campgroundSliderContainer">
        <div className="campgroundSliderMySlides">
            <div className="numbertext">1 / 6</div>
            <img src={IMG_URL} style={{ width: "100%" }}/>
        </div>

        <div className="campgroundSliderMySlides">
            <div className="numbertext">2 / 6</div>
            <img src={IMG_URL} style={{ width: "100%" }}/>
        </div>

        <div className="campgroundSliderMySlides">
            <div className="numbertext">3 / 6</div>
            <img src={IMG_URL} style={{ width: "100%" }}/>
        </div>
            
        <div className="campgroundSliderMySlides">
            <div className="numbertext">4 / 6</div>
            <img src={IMG_URL} style={{ width: "100%" }}/>
        </div>

        <div className="campgroundSliderMySlides">
            <div className="numbertext">5 / 6</div>
            <img src={IMG_URL} style={{ width: "100%" }}/>
        </div>
            
        <div className="campgroundSliderMySlides">
            <div className="numbertext">6 / 6</div>
            <img src={IMG_URL} style={{ width: "100%" }}/>
        </div>
            
        <a className="campgroundSliderPrev" onClick={()=> setSlideIndex(slideIndex-1)}>❮</a>
        <a className="campgroundSliderNext" onClick={()=> setSlideIndex(slideIndex+1)}>❯</a>

        <div className="campgroundSliderCaption-container">
            <p id="campgroundSliderCaption"></p>
        </div>

        <div className="campgroundSliderRow">
            <div className="campgroundSliderColumn">
            <img className="campgroundSliderDemo campgroundSliderCursor" src={IMG_URL} style={{ width: "100%" }} 
                onClick={()=> setSlideIndex(1)} alt="The Woods"/>
            </div>
            <div className="campgroundSliderColumn">
            <img className="campgroundSliderDemo campgroundSliderCursor" src={IMG_URL} style={{ width: "100%" }} 
                onClick={()=> setSlideIndex(2)} alt="Cinque Terre"/>
            </div>
            <div className="campgroundSliderColumn">
            <img className="campgroundSliderDemo campgroundSliderCursor" src={IMG_URL} style={{ width: "100%" }} 
                onClick={()=> setSlideIndex(3)} alt="Mountains and fjords"/>
            </div>
            <div className="campgroundSliderColumn">
            <img className="campgroundSliderDemo campgroundSliderCursor" src={IMG_URL} style={{ width: "100%" }} 
                onClick={()=> setSlideIndex(4)} alt="Northern Lights"/>
            </div>
            <div className="campgroundSliderColumn">
            <img className="campgroundSliderDemo campgroundSliderCursor" src={IMG_URL} style={{ width: "100%" }} 
                onClick={()=> setSlideIndex(5)} alt="Nature and sunrise"/>
            </div>    
            <div className="campgroundSliderColumn">
            <img className="campgroundSliderDemo campgroundSliderCursor" src={IMG_URL} style={{ width: "100%" }} 
                onClick={()=> setSlideIndex(6)} alt="Snowy Mountains"/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CampgroundSlider;