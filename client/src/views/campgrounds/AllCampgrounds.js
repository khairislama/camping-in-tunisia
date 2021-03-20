import React from 'react'
import CampgroundCard from '../../components/campgroundComponents/CampgroundCard'
import Header from '../../components/Header'
import CampgroundFilter from '../../components/campgroundComponents/CampgroundFilter'

export default function allCampgrounds() {
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
                    <CampgroundCard />
                    <CampgroundCard />
                    <CampgroundCard />
                    <CampgroundCard />
                    <CampgroundCard />
                    <CampgroundCard />
                    <CampgroundCard />
                    <CampgroundCard />
                    <CampgroundCard />
                    <CampgroundCard />
                </div>
            </div>
        </div>
  )
}
