import React from 'react'
import GuestHeader from '../Header/GuestHeader'
import { useState, useContext } from "react"
import GuestFooter from '../Footer/GuestFooter'
import UserHeder from '../Header/UserHeader'
import ReferralModal from '../Modals/ReferralModal'
import { ReferralModalContext } from '../../contexts/ReferralContext'

const GuestLayout = ({ children }) => {
    const { referalModalISOpen, changeModalState } = useContext(ReferralModalContext);
    const layout = children.type.layout
    console.log(layout)
    if (layout === "auth") {
        return (
            <>
                <GuestHeader />
                { children}
            </>
        )
    } else if (layout === "user") {

        return <>
            <UserHeder />
            { children}
            {
                referalModalISOpen && <ReferralModal />
            }

        </>
    }
    return (
        <>
            <GuestHeader />
            { children}
            <GuestFooter />
        </>
    )
}

export default GuestLayout
