import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useRouteMatch, useHistory } from 'react-router';
import AuthConext from '../../context/AuthContext';
import { ProgressBar } from 'react-bootstrap'


export default function FromEdit() {
    const [uploadPercent, setUploadPercent] = useState("")
    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [age, setAge] = useState("");
    const [bio, setBio] = useState("");
    const [from, setFrom] = useState("");
    const [adresse, setAdresse] = useState("");
    const [situation, setSituation] = useState("");
    const [profession, setProfession] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [userImage, setUserImage] = useState("");
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("");
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
        setAge(result.data.user.age);
        setAdresse(result.data.user.adresse);
        setSituation(result.data.user.situation);
        setProfession(result.data.user.profession);
        setFacebook(result.data.user.facebook);
        setInstagram(result.data.user.instagram);
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
            userData.append("age", age);
            userData.append("bio", bio);
            userData.append("from", from);
            userData.append("adresse", adresse);
            userData.append("situation", situation);
            userData.append("profession", profession);
            userData.append("phoneNumber", phoneNumber);
            userData.append("facebook", facebook);
            userData.append("instagram", instagram);
            userData.append("userImage", userImage);
            await axios.put(`http://localhost:3001/api/users/${match.params.userID}`, userData);
            await getLoggedIn();
        }catch (err){
            console.error(err);
        }
    }

    async function uploadImageFile({target: {files}}){
        setUserImage(files[0])
        let fileData = new FormData()
        fileData.append('file', files[0])
        const options = {
            onUploadProgress: (progressEvent) =>{
                const {loaded, total} = progressEvent
                let percent = Math.floor((loaded*100)/total)  
                console.log(`${loaded}b of ${total} | ${percent}%`)        
                if (percent < 100)
                    setUploadPercent(percent)      
            }
        }
        try {
            await axios.post("https://run.mocky.io/v3/7cce3ff2-2761-403f-87c9-4474a9b80027", fileData, options)
        } catch(err) {
            console.log(err)
            setUploadPercent(100)  
        }
        return false
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

                <label htmlFor="age"><b>Age</b></label>
                <input className="registerInput" type="text" 
                placeholder="Enter your age" name="age" 
                onChange={ (e) => setAge(e.target.value) }
                value={ age }
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

                <label htmlFor="facebook"><b>Your facebook URL</b></label>
                <input className="registerInput" type="text" 
                placeholder="https://www.facebook.com/" name="facebook" 
                onChange={ (e) => setFacebook(e.target.value) }
                value={facebook}
                required/>

                <label htmlFor="instagram"><b>Your instagram URL</b></label>
                <input className="registerInput" type="text" 
                placeholder="https://www.instagram.com/" name="instagram" 
                onChange={ (e) => setInstagram(e.target.value) }
                value={instagram}
                />

                <label htmlFor="userImage"><b>Your image</b></label>
                <input className="form-control" type="file" 
                    placeholder="image url" filename="userImage"
                    onChange={ uploadImageFile }
                />
                { uploadPercent > 0 && <ProgressBar now={uploadPercent} active label={`${uploadPercent}%`} /> }

                <div className="registerClearfix mt-4">
                    <button type="button" className="registerCancelbtn registerbtn">Cancel</button>
                    <button type="submit" className="registerSignupbtn registerbtn">Edit</button>
                </div>
        </div>
        </form>
  )
}
