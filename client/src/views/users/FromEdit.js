import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useRouteMatch, useHistory } from 'react-router';
import AuthConext from '../../context/AuthContext';


export default function FromEdit() {
    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [bio, setBio] = useState("");
    const [from, setFrom] = useState("");
    const [adresse, setAdresse] = useState("");
    const [situation, setSituation] = useState("");
    const [profession, setProfession] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [userImage, setUserImage] = useState("");
    const match = useRouteMatch();
    const {getLoggedIn} = useContext(AuthConext);

    async function getUserInfo(){
        const result = await axios.get(
            `http://localhost:3001/api/users/${match.params.userID}`,
        );
        setUsername(result.data.user.username);
        setFirstname(result.data.user.firstname);
        setLastname(result.data.user.lastname);
        setBio(result.data.user.bio);
        setFrom(result.data.user.from);
        setAdresse(result.data.user.adresse);
        setSituation(result.data.user.situation);
        setProfession(result.data.user.profession);
        setPhoneNumber(result.data.user.phoneNumber);
    }

    useEffect(()=>{
        getUserInfo();
    }, []);

    async function updateUserInfo(e){
        e.preventDefault();
        try {
            const userData = new FormData();
            userData.append("username", username);
            userData.append("firstname", firstname);
            userData.append("lastname", lastname);
            userData.append("bio", bio);
            userData.append("from", from);
            userData.append("adresse", adresse);
            userData.append("situation", situation);
            userData.append("profession", profession);
            userData.append("phoneNumber", phoneNumber);
            userData.append("userImage", userImage);
            await axios.put(`http://localhost:3001/api/users/${match.params.userID}`, userData);
            await getLoggedIn();
        }catch (err){
            console.error(err);
        }
    }
  return (
    <form onSubmit={updateUserInfo} encType="multipart/form-data" >
            <div className="registerContainer container">
                <h1 className="text-center">General Account Settings</h1>
                <p className="text-center">Please fill all this form to update your account.</p>
                <hr className="registerHr" />

                <label htmlFor="email"><b>Email</b></label>
                <input className="registerInput" type="email" 
                placeholder="Enter Email" 
                name="username" 
                onChange={ (e) => setUsername(e.target.value) }
                value={ username }
                disabled/>

                <label htmlFor="firstname"><b>First Name</b></label>
                <input className="registerInput" type="text" 
                placeholder="Enter first name" name="firstname" 
                onChange={ (e) => setFirstname(e.target.value) }
                value={ firstname }
                required/>

                <label htmlFor="lastname"><b>Last Name</b></label>
                <input className="registerInput" type="text" 
                placeholder="Enter last name" name="lastname" 
                onChange={ (e) => setLastname(e.target.value) }
                value={ lastname }
                required/>

                <label htmlFor="from"><b>Origins</b></label>
                <input className="registerInput" type="text" 
                placeholder="Enter Origins" name="from" 
                onChange={ (e) => setFrom(e.target.value) }
                value={ from }
                required/>

                <label htmlFor="adresse"><b>Adresse</b></label>
                <input className="registerInput" type="text" 
                placeholder="Enter adresse" name="adresse" 
                onChange={ (e) => setAdresse(e.target.value) }
                value={ adresse }
                required/>

                <label htmlFor="situation"><b>situation</b></label>
                <input className="registerInput" type="text" 
                placeholder="Enter situation" name="situation" 
                onChange={ (e) => setSituation(e.target.value) }
                value={ situation }
                required/>

                <label htmlFor="profession"><b>Profession</b></label>
                <input className="registerInput" type="text" 
                placeholder="Enter profession" name="profession" 
                onChange={ (e) => setProfession(e.target.value) }
                value={ profession }
                required/>

                <label htmlFor="phoneNumber"><b>PhoneNumber</b></label>
                <input className="registerInput" type="text" 
                placeholder="Enter phoneNumber" name="phoneNumber" 
                onChange={ (e) => setPhoneNumber(e.target.value) }
                value={ phoneNumber }
                required/>

                <label htmlFor="bio"><b>BIO</b></label>
                <input className="registerInput" type="text" 
                placeholder="Enter bio" name="bio" 
                onChange={ (e) => setBio(e.target.value) }
                value={ bio }
                required/>

                <label htmlFor="userImage"><b>Your image</b></label>
                <input className="form-control" type="file" 
                    placeholder="image url" filename="userImage"
                    onChange={ (e) => setUserImage(e.target.files[0]) }
                />

                <div className="registerClearfix mt-4">
                    <button type="button" className="registerCancelbtn registerbtn">Cancel</button>
                    <button type="submit" className="registerSignupbtn registerbtn">Edit</button>
                </div>
        </div>
        </form>
  )
}
