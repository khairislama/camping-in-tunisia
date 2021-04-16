import React, { useState } from 'react'
import { useHistory } from 'react-router';
import axios from 'axios';

function FormAdd() {

    const [name, setName] = useState("");
    const [campgroundImages, setCampgroundImages] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();

    async function addCampground(e){
        e.preventDefault();
        try {
            const campgroundData = new FormData();
            campgroundData.append("name", name);
            campgroundData.append("description", description);
            campgroundData.append("price", price);
            campgroundData.append("campgroundImages", campgroundImages);
            await axios.post("http://localhost:3001/api/campgrounds/", campgroundData)
            history.push("/campgrounds");
        }catch (err){
            console.error(err);
        }
    }

  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h1 style={{ textAlign: "center" }}>Create a new campground</h1>
                <div style={{ width: "30%", margin: "25px auto" }}>
                    <form onSubmit={addCampground} encType="multipart/form-data" >
                        <div className="form-group">
                            <input className="form-control" type="text" 
                                placeholder="name" name="name"
                                onChange={ (e) => setName(e.target.value) }
                                value={name}
                            />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="file" 
                                placeholder="image url" filename="campgroundImages"
                                onChange={ (e) => setCampgroundImages(e.target.files[0]) }
                            />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" 
                                placeholder="description" name="description"
                                onChange={ (e) => setDescription(e.target.value) }
                                value={description}
                            />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="number" 
                                placeholder="price" name="price" 
                                min="0.01" step="0.01"
                                onChange={ (e) => setPrice(e.target.value) }
                                value={price}
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-lg btn-primary btn-block"
                            type="submit">Submit!</button>
                        </div>
                    </form>
                    <a href="/campgrounds">Go back</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormAdd;