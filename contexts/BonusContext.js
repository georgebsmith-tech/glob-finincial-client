import React, { createContext, useState } from 'react';
import { useRouter } from 'next/router'
export const BonusContext = createContext();
const BonusContextProvider = (props) => {
    const [referrals, setReferrals] = useState([]);
    const storeReferrals = data => {
        setReferrals({
            referrals: data.referrals,
        })
    }
    const logout = () => {
        setReferrals({});
    }
    return (
        <BonusContext.Provider value={{ referralss, storeReferrals }}>
            {props.children}
        </BonusContext.Provider>
    )
}
export default BonusContextProvider;