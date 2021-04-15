import React, { createContext, useState } from 'react';
import { useRouter } from 'next/router'
export const UserContext = createContext();
const UserContextProvider = (props) => {
    const [user, setUser] = useState({ _id: "23122", wallet: {}, refID: "2312n3" });
    const storeUser = data => {
        console.log(data)
        setUser(data.user)
        console.log(user)
    }
    const logout = () => {
        setReferrals({});
    }
    return (
        <UserContext.Provider value={{ user, storeUser }}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;