import React, { useState } from 'react'
import { auth } from '../firebase/config';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const Login = ({ getUser }) => {
  const [phone, setPhone] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showOtpInput, setShowOtpInput] = useState(false)
  const [otp, setOtp] = useState("")

  const onCaptchaVerify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
          // console.log(response)
          // onSignup()
        },
        'expired-callback': () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
          alert("Captcha expired. Please refresh the page.")
        }
      });
    }
  }

  const onSignup = () => {
    setLoading(true)
    onCaptchaVerify()
    const appVerifier = window.recaptchaVerifier
    const phoneNumber = "+" + phone

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
        setLoading(false)
        setShowOtpInput(true)
        alert("OTP sent successfully.")
      }).catch((error) => {
        // Error; SMS not sent
        // ...
        setLoading(false)
        alert("Oopss, mission failed!")
        console.log(error)
      });
  }

  const onOTPVerify = () => {
    setLoading(true)
    window.confirmationResult.confirm(otp).then(async (res) => {
      console.log(res)
      getUser(res.user)
      setLoading(false)
    }).catch(err => {
      console.log(err)
      setLoading(false)
    })
  }

  return (
    <div className='flex flex-col w-full h-screen justify-center items-center border bg-gradient-to-r from-rose-100 to-teal-100 gap-4 relative'>
      <h1 className='text-gray-600 font-bold text-4xl absolute top-16'>Cost Manage</h1>

      <div id="recaptcha-container"></div>

      <div className='bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 w-96 h-fit flex flex-col shadow-2xl items-center justify-start gap-6 p-6'>
        <h3 className='text-gray-700 text-xl font-medium'>{showOtpInput ? "Input OTP" : "Please input your phone number"}</h3>
        <div className='flex w-full justify-center items-center'>
          {
            showOtpInput ?
              <input
                type="number"
                onChange={(e) => {
                  setOtp(e.target.value)
                }}
                value={otp}
                className='border-none outline-none px-3 py-1.5'
              /> :
              <div className='block'>
                <PhoneInput
                  country={'in'}
                  value={phone}
                  onChange={value => {
                    setPhone(value)
                  }}
                  inputProps={{
                    name: 'phone',
                    required: true,
                    autoFocus: true
                  }}
                  inputStyle={{
                    borderRadius: 0,
                    fontSize: "1.1rem",
                    padding: "1.5rem 4.5rem",
                    color: "#000b",
                    boxShadow: "0 2px 4px 0 #0002",
                    borderWidth: "0"
                  }}
                />
              </div>
          }
        </div>

        {
          showOtpInput ?
            <button onClick={!loading ? onOTPVerify : null } className='bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 text-gray-200 hover:text-white px-4 py-2 shadow-md rounded'>{loading ? "verifying.." : "Verify OTP"}</button> :
            <button onClick={!loading ? onSignup : null} className='bg-gradient-to-r from-indigo-300 to-cyan-300 hover:from-slate-800 hover:to-slate-600 text-gray-800 hover:text-white px-4 py-2 shadow-md rounded'>{loading ? "sending.." : "Send OTP"}</button>
        }
      </div>
    </div>
  )
}

export default Login