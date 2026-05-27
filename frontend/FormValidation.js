import {useEffect, useRef,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import "./App.css";
import axios from "axios";
function FormValidation(){
    const navigate=useNavigate();
    const nameRef=useRef();
    const emailRef=useRef();
    const msgRef=useRef();
    const[mailerr,setmailerr]=useState("");
    // const[show,setshow]=useState(false);
    const validate = async (e) => {
    e.preventDefault();

    const regex = /^[a-z0-9.]{1,}@([a-z]+\.){1,}[a-z]{2,}$/;

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = msgRef.current.value;

    if(email.trim() === ""){
        setmailerr("Email should not be empty");
    }
    else if(!regex.test(email)){
        setmailerr("Enter valid Email");
    }
    else{

        try{

            await axios.post("http://127.0.0.1:8000/submit-form",{
                name,
                email,
                message
            });

            navigate("/successful");

        }
        catch(err){
            console.log(err);
        }
    }
}
    const mailChanged=()=>{
        setmailerr("");
    }
    // useEffect(
    //     ()=>{
    //         if(!validate)
    //     },[emailRef]);
    return<>
        <header>
            <h1 className='heading'>Full Stack Development</h1>
            <button className='logout'>Logout</button>
        </header>
        <div className="formAlgnmt">
            <div className="container">
                <form onSubmit={validate}>
                <div><label>Name:</label><br></br><input type="text" ref={nameRef} placeholder="Enter Your Name"></input></div>
                <div><label>Email:</label><br></br><input  ref={emailRef} placeholder="Enter Your Email" onChange={mailChanged}></input></div>
                {mailerr && <p className='mailerr'>{mailerr}</p>}
                <div><label>Message:</label><br></br><textarea ref={msgRef} placeholder="Enter your message"></textarea></div>
                <button type="submit">Submit</button>
            </form>
            </div>
        </div>
        
    </>
}
export default FormValidation;