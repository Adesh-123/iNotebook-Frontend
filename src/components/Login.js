import React from 'react'
import {useState} from 'react'
import { useHistory } from 'react-router';

const Login = (props) => {
    const history=useHistory();
    const [credential, setCredential] = useState({email:"" ,password:""});
    const handleSubmit= async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email:credential.email,password:credential.password }),
          });
          const json = await response.json();
          console.log(json);
          if(json.sucess){
              localStorage.setItem('token',json.awthtoken);
              props.showAlert("Sucessfully Login","success")
              history.push('/Home');
          }
        else  props.showAlert("Invalid detail","danger")
    }
    const onchange=(e)=>{
        setCredential({ ...credential, [e.target.name]: e.target.value });
    }

    return (
        <>
        <div className="container"  >
            <h1 className="mt-3">Login in with your Account to use iNotebook</h1>
            <form onSubmit={handleSubmit}>
            <div className="form-group" style={{marginTop:"50px"}}>
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="email" name="email" value={credential.email}  onChange={onchange} aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                 <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credential.password} onChange={onchange} name="password" id="password" />
            </div>
            <button type="submit" className="btn btn-primary my-3">Submit</button>
            </form>
        </div>
        </>
    )
}

export default Login

