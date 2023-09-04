import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContextProvider';
import axios from 'axios';

function SignupAndLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggInOrSignUp, setIsLoggInOrSignUp] = useState('signup');
    const { setUsername: setLoggedInUser, setId } = useContext(UserContext);

    async function handleSubmit(ev) {
        ev.preventDefault();
        const url = isLoggInOrSignUp === 'signup' ? 'signup' : 'login'
        const { data } = await axios.post(`http://localhost:4000/${url}`, { username, password })
        setLoggedInUser(username);
        setId(data.id);
    }

    return (
        <div className='h-screen flex items-center'>
            <form className='w-64 mx-auto' onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='username'
                    placeholder='Userame'
                    className='block w-full p-2 mb-2'
                    onChange={(e) => setUsername(e.target.value)}
                    required="true"
                />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    className='block w-full p-2 mb-2'
                    onChange={(e) => setPassword(e.target.value)}
                    required="true"
                />
                <button type='submit' className='block w-full bg-blue-500 h-11 text-white rounded-sm' >{isLoggInOrSignUp === 'signup' ? "Sign Up" : "Login"}</button>
                <div className='text-center mt-2'>
                    {
                        isLoggInOrSignUp === 'signup' && (
                            <div>
                                Already a member?
                                <button onClick={() => setIsLoggInOrSignUp('login')}>Login</button>
                            </div>
                        )
                    }
                    {
                        isLoggInOrSignUp === 'login' && (
                            <div>
                                Don't have an account? 
                                <button onClick={() => setIsLoggInOrSignUp('signup')}>Sign up</button>
                            </div>
                        )
                    }
                </div>
            </form>
        </div>
    )
}

export default SignupAndLogin
