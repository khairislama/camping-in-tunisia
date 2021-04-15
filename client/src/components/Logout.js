import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router';
import AuthConext from '../context/AuthContext'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function Logout() {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const {getLoggedIn} = useContext(AuthConext);
  const history = useHistory();

  async function logout(){
      await axios.get("http://localhost:3001/api/auth/logout");
      await getLoggedIn();
      history.push("/campgrounds");
  }

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        tag="span"
        data-toggle="dropdown"
        aria-expanded={dropdownOpen}
        style={{color:"white"}}
      >
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScdHD-KQQkMQdJcXTSALcRVFp7chjRbA0e-w&usqp=CAU" 
          id="user-image" 
          class="rounded-circle mr-2"             
          style={{width:"28px", height:"28px"}}
        /> 
        firstname lastname.touppercase
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem>Some Action</DropdownItem>
        <DropdownItem text>Dropdown Item Text</DropdownItem>
        <DropdownItem disabled>Action (disabled)</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Foo Action</DropdownItem>
        <DropdownItem>Bar Action</DropdownItem>
        <DropdownItem><a onClick={logout} class="dropdown-item" href="/campgrounds">Logout</a></DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default Logout