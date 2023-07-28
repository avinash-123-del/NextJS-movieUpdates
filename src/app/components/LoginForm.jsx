'use client'
import { useState} from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import Link from 'next/link'
const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginBtn, setLoginBtn] = useState('Login')

    const router = useRouter()


    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            setLoginBtn('Please wait')
            const res = await fetch("/api/login", {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ email, password })
            })

            if (res.status === 404 ) {
                toast.error('login failed')
            }
            
            if(res.status === 500){
                toast.error('Invalid email or password')
            }
           

            else if (res.ok) {
                toast.success('login success')
                router.push('/')
                router.refresh()
            }
        }
        catch (error) {
            console.log("login failed", error.message);
            toast.error('login failed')
        }

        finally {
            setLoginBtn('Login')

        }
    }
   

    return (
        <div className='my-8 md:w-[30%] w-[80%] m-auto'>
            <form onSubmit={loginHandler}>

                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="youremail@mail.com" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                <button type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">{loginBtn}</button>

                <Link href={'/signup'}>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
                </Link>


            </form>
        </div>
    )
}

export default LoginForm





