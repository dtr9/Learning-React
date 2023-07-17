import React from 'react';
import {setUserName,setUserEmail} from '../redux/slices/userSlice'
import { useSelector,useDispatch } from 'react-redux';
const UserComponent = () => {
  const userName=useSelector((state)=> state.userDetail.userName);
  const userEmail=useSelector((state)=>state.userDetail.userEmail);
  const dispatch=useDispatch();
  const userNameChangeHandler=(e)=>{
    dispatch(setUserName(e.target.value));
  }
  const userEmailChangeHandler=(e)=>{
    dispatch(setUserEmail(e.target.value));
  }
  return (
    <div className='usercomponent'>
        <h1>UserComponent</h1>
        <h2>Enter User Details</h2>
        <label>Enter Username: </label>
        <input type='text' value={userName} onChange={userNameChangeHandler}></input>
        <label>Enter Email: </label>
        <input type='email' value={userEmail} onChange={userEmailChangeHandler}></input>
        <h2> Name: {userName}</h2>
        <h2> Email: {userEmail}</h2>
    </div>
    
  )
}

export default UserComponent