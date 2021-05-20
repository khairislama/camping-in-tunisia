import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Moment from 'react-moment';
import { useRouteMatch } from 'react-router';
import '../../assets/stylesheets/profileShow.css'
import AuthConext from '../../context/AuthContext';
import LeftInfos from '../../components/usercomponents/LeftInfos'
import UpperInfos from '../../components/usercomponents/UpperInfos'
import MainInfosCard from '../../components/usercomponents/MainInfosCard'

export default function Show() {
    const [userInfo, setUserInfo] = useState();
    const match = useRouteMatch();
    const {loggedIn} = useContext(AuthConext);

    async function getUserInfo(){
        const result = await axios.get(
            `http://127.0.0.1:3001/api/users/${match.params.userID}`,
        );
        setUserInfo(result.data.user);
    }

    useEffect(()=>{
        getUserInfo();
    }, []);

    let renderedUser = userInfo !== null && userInfo !== undefined ? (
        <>
            <UpperInfos userInfo={userInfo} />
            <div className="row">
                <LeftInfos userInfo={userInfo} />
                <MainInfosCard userInfo={userInfo} />
            </div>
        </>
    ): null

  return (
    <div className="container emp-profile" style={{ border: "1px solid", padding: "10px", boxShadow: "10px 15px 10px green" }}>
        {renderedUser}
    </div>
  )
}
