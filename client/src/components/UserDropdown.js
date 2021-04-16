import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router';
import AuthConext from '../context/AuthContext'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function UserDropdown() {

  const [dropdownOpen, setDropdownOpen] = useState(false);
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
        aria-expanded={dropdownOpen}
        style={{color:"white"}}
      >
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScdHD-KQQkMQdJcXTSALcRVFp7chjRbA0e-w&usqp=CAU" 
          id="user-image" 
          className="rounded-circle mr-2"             
          style={{width:"28px", height:"28px"}}
        /> 
        {loggedIn.userInfo.firstname} {loggedIn.userInfo.lastname}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem onClick={()=>{history.push(`/user/${loggedIn.userInfo.id}`)}}>See your profile</DropdownItem>
        <DropdownItem><i class="fas fa-user-cog mr-2"></i>Settings</DropdownItem>
        <DropdownItem divider />
        <DropdownItem><i class="fas fa-bookmark mr-2"></i>Your Bookmarks</DropdownItem>
        <DropdownItem><i class="fas fa-envelope mr-2"></i>Contact US</DropdownItem>
        <DropdownItem onClick={logout}><i class="fas fa-sign-out-alt mr-2"></i>Logout</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default UserDropdown