import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router';
import AuthConext from '../context/AuthContext'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function UserDropdown() {
  const [show, setShow] = useState(false);
  const {getLoggedIn} = useContext(AuthConext);
  const {loggedIn} = useContext(AuthConext);
  const history = useHistory();

  async function logout(){
      await axios.get("http://localhost:3001/api/auth/logout");
      await getLoggedIn();
  }

  const showDropdown = (e)=>{
    setShow(!show);
  }
  const hideDropdown = e => {
    setShow(false);
  }

  return (
    <Dropdown isOpen={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
      <DropdownToggle
        tag="span"
        data-toggle="dropdown"
        style={{color:"white"}}
      >
        <img 
          src={`/uploads/users/${loggedIn.userInfo.userImage}`} 
          id="user-image" 
          className="rounded-circle mr-2"             
          style={{width:"28px", height:"28px"}}
          alt="user"
        /> 
        {loggedIn.userInfo.firstname} {loggedIn.userInfo.lastname}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={()=>{history.push(`/user/${loggedIn.userInfo.id}`)}} className="py-3">See your profile</DropdownItem>
        <DropdownItem onClick={()=>{history.push(`/user/${loggedIn.userInfo.id}/edit`)}}><i className="fas fa-user-cog mr-2"></i>Settings</DropdownItem>
        <DropdownItem divider />
        <DropdownItem><i className="fas fa-bookmark mr-2"></i>Your Bookmarks</DropdownItem>
        <DropdownItem onClick={()=>{history.push(`/contactus`)}}><i className="fas fa-envelope mr-2"></i>Contact US</DropdownItem>
        <DropdownItem onClick={logout}><i className="fas fa-sign-out-alt mr-2"></i>Logout</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default UserDropdown