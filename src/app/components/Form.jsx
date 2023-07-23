'use client'
import { NextResponse } from 'next/server'
import { useState } from 'react'

const Form = () => {
    const [user, setUser] = useState({
        username: '',
        useremail: '',
        usernumber: '',
        usermessage: ''
    })
    const [status, setStatus] = useState(null)
    function handleChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify({
                    username: user.username,
                    useremail: user.useremail,
                    usernumber: user.usernumber,
                    usermessage: user.usermessage
                }) 
            })

            if (!response.ok) {
                console.log('Failed to contact added');
                setStatus('error')
            }

            if (response.ok) {
                console.log('new contact added');
                setStatus('sucess')
            }

            setUser({
                username: '',
                useremail: '',
                usernumber: '',
                usermessage: ''
            })


        } catch (error) {
            console.log(error);
            NextResponse.json({
                message: error.message
            })
        }

    }
    return (
        <div className='py-7' >
            <form
                onSubmit={handleSubmit}
                className='flex py-3 flex-col items-center text-start justify-center border-2 border-gray-400 rounded-md gap-4 sm:w-[500px] w-screen m-auto'>
                <div>
                    <label htmlFor="username">Name</label><br />
                    <input type="text"
                        value={user.username} 
                        onChange={handleChange}
                        placeholder='Enter your name' required  name='username' id='username' />
                </div>
                <div>
                    <label htmlFor="useremail">Email</label><br />
                    <input type="email"
                        value={user.useremail} 
                        onChange={handleChange}
                        placeholder='Enter your email' required name='useremail' id='useremail' />
                </div>
                <div>
                    <label htmlFor="usernumber">Phone Number</label><br />
                    <input type="number"
                        value={user.usernumber} 
                        onChange={handleChange}
                        placeholder='Enter your number' required name='usernumber' id='usernumber' />
                </div>
                <div>
                    <label htmlFor="usermessage">Message</label><br />
                    <textarea type="text" rows='3'
                        value={user.usermessage} 
                        onChange={handleChange}
                        placeholder='Enter your message' required name='usermessage' id='usermessage' />
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
                <div>
                    {status === 'sucess' && <p className='text-green-200'>Thankyou for your message</p>}
                    {status === 'error' && <p className='text-stone-200'>There was an error submitting your message</p>}
                </div>
            </form>
        </div>
    )
}

export default Form