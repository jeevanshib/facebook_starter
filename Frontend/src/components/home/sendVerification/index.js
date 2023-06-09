import { useState } from 'react';
import axios from 'axios';

export default function SendVerification({user}) {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const sendVerificationLink = async() => {
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/sendVerification`, {},
      {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });
      setSuccess(data.message)
    } catch (error) {
      setError(error.response.data.message)
    }
  }

  return (
    <div className='bg-primary shadow-shadow-1 shadow-[0_1px_2px] p-[20px] text-[14px] text-primary-color flex flex-col rounded-[10px] send_verification'>
      <span>
        Your account is not verified, verify your account before it gets deleted after a month of creating.
      </span>
      <a onClick={()=> {
        sendVerificationLink();
      }} className='text-blue-color cursor-pointer hover:underline'>Click here to resend verification link</a>
      {success && <div className='success_text'>{success}</div>}
      {error && <div className='error_text'>{error}</div>}
    </div>
  )
}