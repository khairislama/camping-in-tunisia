import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import UserSocialMedia from './UserSocialMedia'
import '../../assets/stylesheets/userCampground.css'
import AuthConext from '../../context/AuthContext';
import { useHistory } from 'react-router';

function UserCampground({author}) {

    const [userInfo, setUserInfo] = useState(undefined);
    const history = useHistory();

    async function getUserInfo(){
        try{
            const result = await axios.get(`http://localhost:3001/api/users/${author.id}/`);
            setUserInfo(result.data);
        }catch(err){
            console.error(err);            
        }
    }

    useEffect(()=>{
        getUserInfo();
    }, []);

    let renderedUserInfo = userInfo !== null && userInfo !== undefined ? (
        <div className="userCampgroundCard" style={{ position: "-webkit-sticky", position: "sticky", top: "0" }} >
            <img src={`/uploads/users/${userInfo.user.userImage}`} alt="John" style={{width: "100%"}}/>                
            <h4 className="mt-3 font-weight-bold"> 
                <a onClick={()=> history.push(`/user/${userInfo.user._id}`)} >
                    { userInfo.user.firstname } { userInfo.user.lastname }
                </a> 
            </h4>
                <p className="userCampgroundTitle"> { userInfo.user.surname } </p>
                <p> { userInfo.user.profession } </p>
                <UserSocialMedia userinfo={userInfo.user} />
                <p><button className="userCampgroundButton mt-3">Contact</button></p>
        </div> 
    ): null

    return (
        <>
            {renderedUserInfo}
        </>
  )
}
export default UserCampground;