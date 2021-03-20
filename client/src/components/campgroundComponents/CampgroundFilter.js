import React from 'react'
import '../../assets/stylesheets/campgroundFilter.css'

const showDropdownFilter = ()=>{
  document.getElementById("myDropdown").classList.toggle("campgroundFilterShow");
}

const filterFunction = () =>{
  var input, filter, a, i;
  input = document.getElementById("campgroundFilterMyInput");
  filter = input.value.toUpperCase();
  var div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    let txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function CampgroundFilter() {
  return (
    <div className="campgroundFilterDropdown">
      <button onClick={showDropdownFilter} className="campgroundFilterDropbtn">Dropdown</button>
      <div id="myDropdown" className="campgroundFilterDropdownContent">
        <input type="text" placeholder="Search.." id="campgroundFilterMyInput" onKeyUp={filterFunction}/>
        <a href="#about" className="campgroundFilterA">About</a>
        <a href="#base" className="campgroundFilterA">Base</a>
        <a href="#blog" className="campgroundFilterA">Blog</a>
        <a href="#contact" className="campgroundFilterA">Contact</a>
        <a href="#custom" className="campgroundFilterA">Custom</a>
        <a href="#support" className="campgroundFilterA">Support</a>
        <a href="#tools" className="campgroundFilterA">Tools</a>
      </div>
    </div>
  )
}

export default CampgroundFilter