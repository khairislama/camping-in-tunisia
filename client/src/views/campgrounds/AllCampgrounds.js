import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import CampgroundCard from '../../components/campgroundComponents/CampgroundCard'
import Header from '../../components/Header'
import CampgroundFilter from '../../components/campgroundComponents/CampgroundFilter'
import AuthConext from '../../context/AuthContext'

export default function AllCampgrounds() {
    const [campgrounds, setCampgrounds] = useState();
    const [userBookmarks, setUserBookmarks] = useState([]);
    const {loggedIn} = useContext(AuthConext);

    async function getBookmarks(){
        if (loggedIn == undefined) return null;
        try{
          const result = await axios.get(`http://localhost:3001/api/users/${loggedIn?.userInfo?.id}/getBookmarks`);
          setUserBookmarks(result.data.bookmarks)
        }catch(err){
            console.error(err);            
        }
      }

    async function getCampgrounds(){
        const result = await axios.get("http://localhost:3001/api/campgrounds/");
        setCampgrounds(result.data.campgrounds)
    }

    useEffect(async ()=>{
        getCampgrounds();
    }, []);

    useEffect(async ()=>{
        getBookmarks();
    }, [loggedIn]);

    let renderedCampgrounds = campgrounds !== null && campgrounds !== undefined ? (
        campgrounds.map((campground, index) =>
            <CampgroundCard key={ campground._id } campground={ campground } userBookmarks={ userBookmarks } userID={ loggedIn?.userInfo?.id } /> 
        )
    ): null
    return (
        <div className="container">
            <Header />
            <div className="row">
                <div className="col-lg-12">
                    <h3>Our most popular campgrounds</h3>
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
