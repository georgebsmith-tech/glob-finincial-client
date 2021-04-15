import { UserContext } from '../../contexts/UserContext'
import { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ReferralModalContext } from '../../contexts/ReferralContext'

export default function ReferralModal() {
    const { referalModalISOpen, changeModalState } = useContext(ReferralModalContext);

    const router = useRouter()
    const { user, storeUser } = useContext(UserContext)

    return (
        <div
            onClick={() => changeModalState(false)}
            style={{
                position: "fixed",
                top: 0, left: 0, width: "100vw", height: "100vh",
                backgroundColor: "rgba(0,0,0,0.5)"
            }}
            className="bw ct flex justify-center align-center p15">


            <main
                onClick={(e) => { e.stopPropagation() }}
                className="bw p15 br5"
                style={{ paddingBottom: 40 }}>
                <div

                    className="f16">
                    Referral link:
                    <span>
                        {`https://globfinincial.herokuapp.com/sign-in?ref=${user.refID}`}
                    </span>
                </div>
                <div className="f14 mt10 mb20 tb">
                    Or
                </div>
                <div className="f16">
                    Ref ID:
                    <span className="p10 bbo ml5 tw br5">
                        {user.refID}
                    </span>

                </div>

            </main>
        </div>
    )
}