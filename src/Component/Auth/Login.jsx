import React from 'react'
import { useState } from 'react';



const Login = ({ handlogin }) => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState("");

    const submitHadler = (e) => {
        console.log("Form submited")
        e.preventDefault();
        handlogin(email, password)
        setpassword("");
        setemail("");
    }

    return (
        <div className='h-screen w-screen flex items-center justify-center'>

            <div className='border-2 border-emerald-600 p-20 rounded-2xl'>
                <form className='flex flex-col items-center justify-center'
                    onSubmit={function (e) {
                        submitHadler(e);
                    }}
                >
                    <input required
                        value={email}
                        onChange={function (e) {
                            setemail(e.target.value)

                        }}
                        className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full ' type='email' placeholder='Enter your email'></input>
                    <input required

                        value={password}
                        onChange={function (e) {
                            setpassword(e.target.value)

                        }}
                        className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full m-8 ' type='password' placeholder='Enter your password' />
                    <button className='outline-none  border-2 border-emerald-600 text-xl py-3 px-5 rounded-full m-8'> Log in</button>

                </form>

            </div>
        </div>
    )
}

export default Login