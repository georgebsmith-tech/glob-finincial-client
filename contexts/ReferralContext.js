import React, { createContext, useState } from 'react';
export const ReferralModalContext = createContext();
const ReferralModalContextProvider = (props) => {
    const [referalModalISOpen, setReferalModalISOpen] = useState(false);
    const changeModalState = data => {
        console.log(data)
        setReferalModalISOpen(data)
        console.log(referalModalISOpen)

    }

    return (
        <ReferralModalContext.Provider value={{ referalModalISOpen, changeModalState }}>
            {props.children}
        </ReferralModalContext.Provider>
    )
}
export default ReferralModalContextProvider;