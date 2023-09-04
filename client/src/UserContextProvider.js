import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({});

function UserContextProvider({ children }) {
    const [username, setUsername] = useState(null);
    const [id, setId] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:4000/profile')
            .then(res => {
                console.log(res.data)
                setId(res.data.userId);
                setUsername(res.data.username);
            })
    }, [])

    return (
        <UserContext.Provider value={{ username, setUsername, id, setId }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
