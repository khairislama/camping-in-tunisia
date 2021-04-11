import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CampgroundCard from '../../components/campgroundComponents/CampgroundCard'
import Header from '../../components/Header'
import CampgroundFilter from '../../components/campgroundComponents/CampgroundFilter'

export default function AllCampgrounds() {
    const [campgrounds, setCampgrounds] = useState();

    async function getCampgrounds(){
        const result = await axios.get("http://localhost:3001/api/campgrounds/");
        setCampgrounds(result.data.campgrounds)
    }

    useEffect(async ()=>{
        getCampgrounds();
    }, []);
    let renderedCampgrounds = campgrounds !== null && campgrounds !== undefined ? (
        campgrounds.map((campground, index) =>
            <CampgroundCard key={ campground._id } campground={ campground }/> 
        )
    ): null
    return (
        <div className="container">
            <Header />
            <div className="row">
                <div className="col-lg-12">
                    <h3>Our most popular campgrounds</h3>
                    <CampgroundFilter />
                </div>
            </div>
            <div className="container">
                <div className="row text-center" style={{ display: "flex", flexWrap: "wrap" }}>
                    {renderedCampgrounds}
                </div>
            </div>
        </div>
  )
}
