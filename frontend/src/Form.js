import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from 'react';
import axios from 'axios';
import { Nav } from './Nav';

const Form=()=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPword]=useState('');
    const [cpassword,setCPword]=useState('');
    const [perror,setPError]=useState('');
    const [cperror,setCPError]=useState('');
    const [msg,setMsg]=useState('');

    const passwordConstraint=(event)=>{
        const newp=event.target.value
        setPword(newp);
        if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(newp)){
            setPError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.')
        }else{
            setPError('')
        }
    }

    const cpasswordConstraint=(event)=>{
        const newcp=event.target.value;
        setCPword(newcp);
        if(newcp!==password){
            setCPError('Your password and confirmation password must watch.')
        }else{
            setCPError('')
        }
        console.log(!perror && !cperror);
    }

    const submitForm=(e)=>{
        e.preventDefault();
        console.log('Hi')
        console.log(!perror && !cperror)
        if(!perror && !cperror){
            console.log('res.data')
            axios.post('http://localhost:5000/check',{email}).then(res=>{
                console.log(res.data)
                if(res.data==='false'){
                    axios.post('http://localhost:5000/store',{name:name,email:email,password:password}).then(res=>{console.log(res)}).catch(err=>{console.log(err)})
                    alert('Registered Successfully')
                }else{
                    setMsg('Registered with this email already. Try with a new one!')
                }
            }
            ).catch(err=>console.log(err))
        }
    }
    return(
        <>
        <Nav/>
        <div align="center">
        <h1 >Registration Form</h1>
        </div>
        <div class="div row mx-0">
            <div class="div col-6 d-block m-auto" style={{backgroundColor:"white"}}>
                <form method="post" onSubmit={submitForm}>
                    <p style={{color:"#cc2424"}}>{msg}</p>
                    <label class="form-label">Name:</label>
                    <input type="text" required placeholder="Enter name" name="username" class="form-control"  onChange={(event)=>{setName(event.target.value)}}/ ><br/>
                    <label class="form-label">Email:</label>
                    <input type="email" required placeholder="Enter email" name="email" class="form-control" onChange={(event)=>{setEmail(event.target.value)}}/><br/>
                    <label class="form-label">Password:</label>
                    <input type="password" required placeholder="Enter password" name="password" class="form-control" onChange={passwordConstraint}/><br/>
                    <p style={{color:"#cc2424"}}>{perror}</p>
                    <label class="form-label"> Confirm Password:</label>
                    <input type="password" required placeholder="Confirm password" name="cpassword" class="form-control" onChange={cpasswordConstraint}/><br/>
                    <p style={{color:"#cc2424"}}>{cperror}</p>
                    <button class="btn btn-dark" type="submit">Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}

export {Form};