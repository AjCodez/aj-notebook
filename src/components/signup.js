import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export const Signup = () => {
    let history = useHistory();

    const [cred, setCred] = useState({ name: '', email: '', password: '', passwordb: '' })

    const onChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: cred.name, email: cred.email, password: cred.password })
        });
        const json = await response.json();
        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            history.push('/');
        }
        else {
            alert('invalid credentials')
        }
    }
    return (
        <div className='container'>

            <h2 className='my-3'>Signup</h2>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" id="name" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="passwordb" className="form-label">Password</label>
                    <input type="password" className="form-control" name='passwordb' id="passwordb" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" name='password' id="password" onChange={onChange} />
                </div>
                <button disabled={cred.password!==cred.passwordb && 'true'}  type="submit" className="btn btn-primary">SignUp</button>
            </form>
        </div>
    )
}
