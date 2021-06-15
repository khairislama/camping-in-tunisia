import React, { useState, useEffect } from 'react'
import { useRouteMatch, Link, useHistory } from 'react-router-dom'
import axios from 'axios'

function FormEdit() {
    let match = useRouteMatch();
    const [campground, setCampground] = useState();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [owner, setOwner] = useState(undefined);
    const history = useHistory();
  
    async function getCampgroundOwner(){
      const ownerRes = await axios.get(`http://localhost:3001/api/campgrounds/${match.params.campgroundID}/owner`);
      setOwner(ownerRes.data);
  }
    
    useEffect(async ()=>{
        const result = await axios(
            `http://127.0.0.1:3001/api/campgrounds/${match.params.campgroundID}`,
        );
        setCampground(result.data.campground);
        setName(result.data.campground.name);
        setDescription(result.data.campground.description);
        setPrice(result.data.campground.price);
        getCampgroundOwner();
    }, []);

    async function editCampground(e){
        e.preventDefault()
        try{
            const campgroundData = {
                name,
                description,
                price
            };
            await axios.put(`http://localhost:3001/api/campgrounds/${match.params.campgroundID}`, campgroundData);
            history.push(`/campgrounds/${match.params.campgroundID}`);
        }catch(err){
            console.error(err);
        }
    }

    let renderedCampground = owner === true && campground !== null && campground !== undefined ? (
        <>
            <h1 style={{ textAlign: "center" }}>Edit { campground.name }</h1>
            <div style={{ width: "30%", margin: "25px auto" }}>
                <form onSubmit={editCampground}>
                    <div className="form-group">
                        <input className="form-control" type="text" 
                            onChange={ (e) => setName(e.target.value) }
                            value={name} name="name"
                        />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" 
                            onChange={ (e) => setDescription(e.target.value) }
                            value={description} name="description"
                        />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="number" 
                            onChange={ (e) => setPrice(e.target.value) }
                            value={price} name="price" 
                            min="0.01" step="0.01"
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Submit!</button>
                    </div>
                </form>
                <Link to={`/campgrounds/${campground._id}`}>Go back</Link>
            </div>
        </>
    ): null
  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                {renderedCampground}
                {
                    owner === false && (
                        history.push("/campgrounds")
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default FormEdit;