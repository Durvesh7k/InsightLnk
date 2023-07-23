import React from 'react'
import { useForm } from '@formspree/react';

const Footer = () => {
    const [state, handleSubmit] = useForm("mleydppw");

    const handelForm = (e) => {
        e.preventDefault();
        handleSubmit(e);
    }

    return (
        <div className='mt-8 md:mx-10 mx-4 text-white'>
            <hr />
            <div className='mt-8 flex flex-col  '>
                <div className='flex flex-col w-full'>
                    <div className='text-2xl flex justify-center' >
                        <h1>Feedback</h1>
                    </div>
                    <div className='flex  justify-center text-base '>
                        {state.succeeded ? (
                            <p className='mt-2 opacity-60'>Thanks for your Feedback!</p>
                        ) : (
                            <>
                                <form className='w-full md:w-1/2' onSubmit={handelForm} >
                                    <p>Email</p>
                                    <input id='Email' name='Email' type='Email' className='w-full bg-transparent rounded-md border outline-none p-4 h-12 mt-2' placeholder='Enter Your mail' />
                                    <p className='mt-4'>Message</p>
                                    <textarea id='message' name='message' type='text' className='w-full bg-transparent rounded-md border outline-none p-4 h-30 mt-2' placeholder='Enter the message here' />

                                    <div className='flex justify-center mt-4'>
                                        <button type='submit' className='w-32 rounded-md h-10 bg-cyan-600 hover:bg-cyan-700'>Submit</button>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>

                </div>

                <div className='flex flex-col md:flex-row justify-between mt-8 mb-4'>
                    <div className='text-sm flex text-center md:text-start'>
                        <p>© Copyright 2023 - Developed by Durvesh Chopade. All right reserved.</p>
                    </div>
                    <div className='flex justify-center md:justify-normal mt-2 md:mt-0'>
                        <p>Leave a ⭐ on <a className='text-sky-300 underline' href='https://github.com/Durvesh7k/InsightLnk'>github repo</a> </p>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Footer