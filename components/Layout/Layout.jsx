import React from 'react'
import GuestHeader from '../Header/GuestHeader'

import GuestFooter from '../Footer/GuestFooter'
import UserHeder from '../Header/UserHeader'

const GuestLayout = ({ children }) => {
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
