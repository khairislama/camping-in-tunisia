import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useHistory, useRouteMatch } from 'react-router-dom'
import Moment from 'react-moment'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import CampgroundSlider from './CampgroundSlider'

function CampgroundShow(props) {
  const match = useRouteMatch();
  const history = useHistory();
  const [owner, setOwner] = useState(undefined);
  const [dropdownOpen, setOpen] = useState(false);

  async function getCampgroundOwner(){
    const ownerRes = await axios.get(`http://localhost:3001/api/campgrounds/${match.params.campgroundID}/owner`);
    setOwner(ownerRes.data);
  }

  const toggle = () => setOpen(!dropdownOpen);

  async function deleteCampgroud(){
    try{
      await axios.delete(`http://localhost:3001/api/campgrounds/${match.params.campgroundID}`);
      history.push(`/campgrounds`);
    }catch(err){
      console.error(err);
    }
  }

  function editCampground(){
    history.push(`/campgrounds/${ props.campgroundResult.campground._id }/edit`);
  }

  useEffect(()=>{
    getCampgroundOwner();
  }, []);

  return (
    <div className="img-thumbnail">
        <CampgroundSlider campground={ props.campgroundResult.campground } />
        <div className="caption-full">
            <h4 className="float-right">TND { props.campgroundResult.campground.price }/night</h4>
            <h4 className="mt-4 text-monospace font-weight-bold "><a href="#">{ props.campgroundResult.campground.name }</a></h4>
            <p className="font-weight-light mt-3" >{ props.campgroundResult.campground.description }</p>
            <p className="font-italic" >
                Submitted by  
                <a onClick={()=> history.push(`/user/${props.campgroundResult.campground.author.id}`)} className="ml-2" > 
                  { props.campgroundResult.campground.author.firstname } { props.campgroundResult.campground.author.lastname }
                </a>
                <br/><span className="text-muted">Created: <Moment format="DD-MM-YYYY \a\t hh:mm">{ props.campgroundResult.campground.created }</Moment> </span>
            </p>
            {
              owner === true && (
                <>
                <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle caret>
                  <i className="fas fa-cog"></i>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={ editCampground } ><i className="fas fa-edit"></i> Edit</DropdownItem>
                    <DropdownItem onClick={ deleteCampgroud } ><i className="fas fa-trash"></i> Delete</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
                </>                
              )
            }
        </div>
    </div> 
  )
}


export default CampgroundShow;