import Head from 'next/head'
import styles from '../styles/Home.module.css'
import links from '../configs/links'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import baseURL from '../configs/baseURL'

import Modal from '@material-ui/core/Modal';
const log = console.log
// const userID = localStorage.getItem("id")
export async function getServerSideProps({ req }) {
    // Fetch data from external API

    const res = await axios(`${baseURL}/users/${req.cookies.id}`)
    const user = res.data
    // log(user)

    // Pass data to the page via props
    return { props: { user } }
}

function Dashboard({ user = { _id: "23122", wallet: {} } }) {
    const [userData, setUserData] = useState(user)
    return (
        <div
            className="" style={{ width: "100vw" }}>
            <h1 className="bold f20 tb v-shadow p10 mt20">
                Dashboard
            </h1>
            <UserProfile user={userData} />
            <AccountValue user={userData} />
            <ReferAFriend />
        </div>
    )
}

Dashboard.layout = "user"
export default Dashboard;


const UserProfile = ({ user }) => {
    return (
        <div className="center-text flex align-center flex-cols  v-shadow p40 mt20">
            <div className="mb20" style={{ width: 70 }}>
                <img
                    style={{ width: "100%" }}
                    src="./images/home-client.png" alt="" />
            </div>

            <h3 className="tb f23">
                {user.fullName}
            </h3>
            <div className="f16">
                Member ID: <span className="bold tb">{user._id.substr(0, 6)}***</span>
            </div>
        </div>
    )
}


const ReferAFriend = () => {
    const [showReferalOptions, setshowReferalOptions] = useState("")
    return (
        <div className="p10 tw v-shadow mt20" style={{ paddingTop: 30, paddingBottom: 50 }}>
            <h2 className="f16 bolder tb mb30">
                Spread The Word
        </h2>
            <p className="f16 tb mb30">
                Invite your friends to Sign up to Glob and earn a reward.
        </p>
            <div className="center-text">
                <button
                    onClick={() => setshowReferalOptions(true)}
                    className="tw br10 bg-brand-orange f16 p15 bd-brand-orange bold" style={{ width: "80%" }}>
                    Refer A friend
            </button>
            </div>

        </div>
    )
}

const AccountValue = ({ user }) => {
    const accounts = [
        {
            name: "Life Account",
            value: user.wallet.lifeAccount
        },
        {
            name: "Goal Account",
            value: user.wallet.goalAccount
        },
        {
            name: "ROI",
            value: user.wallet.ROI
        }
    ]
    return (
        <div
            className="bw mt20 p10"
            style={{ paddingTop: 20 }}>
            <div
                className="center-text mb30">
                <h2
                    className="f14">
                    Account Value
            </h2>
                <div
                    className="f30 bold tb mt10">
                    ${user.wallet.lifeAccount + user.wallet.goalAccount + user.wallet.referralAccount}
                </div>
            </div>
            {
                accounts.map((account) => <li >
                    <Link
                        href={links.withdrawal}>
                        <a
                            className="v-shadow mb20 flex align-center space-between p20"
                            style={{ paddingBottom: 40 }}>


                            <div>
                                <h3
                                    className="f14 mb20">
                                    {account.name}
                                </h3>
                                <div
                                    className="f18 bolder">
                                    {account.value}
                                </div>

                            </div>
                            <div>
                                <div>
                                    this
                        </div>

                            </div>
                        </a>
                    </Link>

                </li>)
            }


        </div>
    )
}