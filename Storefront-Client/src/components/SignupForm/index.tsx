import React, { useState } from 'react';

import { useStoreDispatch } from 'store';
import { IUser, UserActions } from 'store/slices/user.slice';

import axios from 'utils/axios'

import "./signupForm.scss";

const SingupForm = () => {
  const dispatch = useStoreDispatch();
  const [userData, setUserData] = useState<IUser & { confirmPassword: string }>({
    firstname: "",
    lastname: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget;

    setUserData(prev => ({
      ...prev,
      [input.id]: input.value
    }))
  }

  const handleSignup = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (userData.password !== userData.confirmPassword) return alert("Passwords doesn't match");

    const response = await axios.post('/users/create', userData).catch(err => alert(err.response.data.err));

    if (!response || !response.data) return;

    localStorage.setItem('login-token', response.data.token);

    dispatch(UserActions.setUser(response.data));
  }

  return (
    <div className="login-form">
      <h4>Signup</h4>
      <hr />
      <form>
        <div className="input-group">
          <label htmlFor="firstname">First Name</label>
          <input type="text" placeholder="First Name" id="firstname" value={userData.firstname} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" placeholder="Last Name" id="lastname" value={userData.lastname} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" value={userData.password} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" placeholder="Password" id="confirmPassword" value={userData.confirmPassword} onChange={handleChange} />
        </div>
        <button onClick={handleSignup}>Signup</button>
      </form>
    </div>
  )
}

export default SingupForm