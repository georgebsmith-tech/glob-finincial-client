import Head from 'next/head'
import { useState, useContext } from "react"
import styles from '../styles/Home.module.css'
import links from '../configs/links'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReferralModalContext } from '../contexts/ReferralContext'

import { FaCashRegister, FaGift, FaHeadphones, FaMoneyBill, FaSmileO } from 'react-icons/fa'
const log = console.log
import axios from 'axios'
import baseURL from '../configs/baseURL'

import { BonusContext } from '../contexts/BonusContext'


export async function getServerSideProps({ req }) {
    // Fetch data from external API

    const res = await axios(`${baseURL}/users/referrals/${req.cookies.id}`)
    const { wallet, referrals } = res.data
    log(wallet, referrals)

    // Pass data to the page via props
    return { props: { wallet, referrals } }
}


export default function Bonus({ referrals, wallet }) {

    let content;

    const { referalModalISOpen, changeModalState } = useContext(ReferralModalContext);

    console.log(referalModalISOpen)
    const [active, setActive] = useState("referrals")
    const options = ["referrals", "contest"]
    if (active === "referrals") {
        content = <Referrals referrals={referrals} wallet={wallet} />
        // } else if (active === "gift") {
        //     content = <Gift />
    } else if (active === "contest") {
        content = <Contest />
    }
    return (

        <div
            className="" style={{ width: "100vw", backgroundColor: "rgba(0, 0, 0, 0.16)" }}>
            <h1 className="bolder f20 tb v-shadow p10 mt20 bw">
                Bonus
            </h1>
            <ul className="bw grid grid2">
                {
                    options.map(option => <li
                        onClick={(e) => setActive(e.target.dataset.option)}
                        data-option={option}
                        className={`f16 center-text pointer ${active === option && "bg-brand-green tw bold"}`} style={{ padding: "13px 19px" }}>
                        {option.toUpperCase()}
                    </li>)
                }
            </ul>
            {
                content
            }

        </div>



    )
}

const Contest = () => {
    return (
        <>
            <GiveAway />
            <OngoingContest />
            <ContestRewards />
        </>
    )
}

const OngoingContest = () => {
    return (
        <div className="mt10 bw">
            <h2 className="f14 p15" style={{ borderBottom: "2px solid #00000029" }}>
                ONGOING CONTESTS
            </h2>
            <div className="p15 center-text">
                <div className="f16">
                    Refer your friends an earn amazing prizes at the end of the month. Follow the link to the leaderboard.
                </div>
                <div
                    className="mt10"
                    style={{ paddingBottom: 60 }}>
                    <button className="br5 bd-o bg-brand-orange tw bold fw p10">
                        Attend Contest
    </button>
                </div>
            </div>
            <div style={{ borderTop: "2px solid #00000029" }}>
                <Link href="#">
                    <div className="f14 p10 text-brand-orange flex flex-end">
                        View All Contests
    </div>
                </Link>
            </div>
        </div>
    )
}

Bonus.layout = "user"

const ContestRewards = () => {
    return (
        <div className="mt10 bw">
            <h2 className="f14 p15" style={{ borderBottom: "2px solid #00000029" }}>
                MY CONTEST REWARDS
            </h2>
            <div>
                <div style={{ paddingTop: 40 }}>
                    <div style={{ backgroundColor: "#A393BA" }}>
                        <h4 className="f20 tb bolder p20">
                            You earned
                </h4>

                        <div className="f30 tw bold" style={{ padding: "0px 0px 0px 40px" }}>
                            1,230.32 USD
</div>
                        <Link href={links.withdrawalDetails || ""}>
                            <a className="text-brand-orange bold f18 mb20 block p20">
                                Withdraw
                </a>

                        </Link>
                    </div>
                </div>

            </div>
            <div>
                <div className="f14 ml15">
                    Referal bonuses is processed within30days.
                </div>

            </div>
            <div
                className="p15 mt10"
                style={{ marginBottom: 30 }}>
                <button className="br5 bd-o bg-brand-orange tw bold fw p10">
                    Go to Contest
    </button>
            </div>
        </div>
    )
}


const GiveAway = () => {
    return (
        <div className="bw p15 mt10 pt30">
            <h2 className="f14 center-text tb bold">
                JOIN CONTESTS AND EARN EXCITING REWARDS AND GIVEAWAYS.
            </h2>
            <ul className="f14 grid grid3 center-text mt30 mb50">
                <li>
                    <div className="tb bold">
                        Gift Cards
                </div>
                    <div className="mt10">
                        <FaGift size="2.5rem" />
                    </div>

                </li>
                <li>
                    <div className="tb bold">
                        Cash Prize
                </div>
                    <div className="mt10">
                        <FaMoneyBill size="2.5rem" />
                    </div>

                </li>
                <li>
                    <div className="tb bold">
                        Gadgets
                </div>
                    <div className="mt10">
                        <FaHeadphones size="2.5rem" />
                    </div>

                </li>
            </ul>
        </div>
    )
}


const Gift = () => {
    return (
        <>
            <Phone />
            <InvCard />
        </>
    )
}

const Phone = () => {
    return (
        <div className="bw p15 mt10 hoverflow-hidden">
            <div className="tb bold f18">
                {"  Open a VIP ACCOUNT FROM $50,000 AND ABOVE AND WIN A BRAND NEW IPHONE 12MAX PRO WITH $1000 ON YOUR VIRTUAL CARD FOR SPENDING.".toUpperCase()}
            </div>
            <div style={{ marginLeft: "25%", position: "relative", top: -45 }}>
                <img src="./images/phone.png" alt="" />
            </div>
            <div style={{ marginTop: -40, marginBottom: 30 }}>
                <Link href="/choose-asset">
                    <button className="br5 bd-o bg-brand-orange tw bold fw p10 pointer">
                        Add more to your Asset
    </button>
                </Link>
            </div>
        </div>
    )
}

const InvCard = () => {
    return (
        <div className="bw mt10 hoverflow-hidden">
            <div >
                <img
                    className="fw"
                    src="./images/card1.svg" alt="" />
            </div>
        </div>
    )
}


const Referrals = ({ referrals, wallet }) => {
    return (
        <>
            <ReferAFriend />
            <MyReferrals referrals={referrals} />
            <MyReferralIncome wallet={wallet} />
        </>

    )
}

const MyReferralIncome = ({ wallet }) => {
    return (
        <div className="bw mb30 mt10">


            <h2 className="f14 p15 normal" style={{ borderBottom: "2px solid #00000029" }}>
                MY REFERRAL INCOME
        </h2>

            <div style={{ paddingTop: 40 }}>
                <div className="bg-brand-green">
                    <h4 className="f20 tb bolder p20">
                        You earned
                </h4>

                    <div className="f30 tw bold" style={{ padding: "0px 0px 0px 40px" }}>
                        {wallet.cashWallet.referralAccount + wallet.btcWallet.referralAccount} USD
</div>
                    <Link href={links.withdrawalDetails || ""}>
                        <a className="text-brand-orange bold f18 mb20 block p20">
                            Withdraw
                </a>

                    </Link>
                </div>
            </div>
            <div className="center-text">
                <div className="f16 tb">
                    Referal bonuses are processed within 30days.
                </div>
                <div className="f20 mt10 tb bold">
                    {"you can earn much more".toUpperCase()}
                </div>
                <div className="mt20">
                    <img src="./images/Icon feather-smile.svg" alt="" />
                </div>
                <p className="text-brand-green mt10 f20 p15">
                    Invite more of your friends, share your link or chat a friend with your link.
                </p>
                <div
                    className="mt10 p15">
                    <button

                        className="br5 bd-o bg-brand-orange tw bold fw p10">
                        Refer a Friend
                </button>
                </div>
                {/* <div className="p15">


                    <Link href="/choose-asset">
                        <a
                            style={{ width: "100%" }}
                            className="br5 bd-o bw text-brand-orange bold p10 block f14">
                            Increase Investment
                </a>
                    </Link>
                </div> */}
            </div>
        </div>
    )
}

const MyReferrals = ({ referrals }) => {
    // const [referrals, setReferrals] = useState([])
    return (
        <div className="bw mt20">
            <h2 className="f14 p15" style={{ borderBottom: "2px solid #00000029" }}>
                MY REFERRALS
            </h2>
            {
                referrals.length === 0 ? <div style={{ height: 150 }}
                    className="flex justify-center align-center f20">
                    You Have No Referrals Yet.
                </div> :
                    <ul>
                        <li>
                            <ul className="grid grid3">
                                <li>    <h4 className="f14 bold p10 tb">User</h4></li>
                                <li>    <h4 className="f14 bold p10 tb">Bonus</h4></li>
                                <li>    <h4 className="f14 bold p10 tb">Country</h4></li>
                            </ul>
                        </li>
                        <li>
                            {
                                referrals.map(ref =>
                                    <ul className="grid grid3 gap20 mb10 p10" style={{ backgroundColor: "#00000020" }}>



                                        <li className="f16" >
                                            {ref.refID.substr(0, 4)}***
                                        </li>
                                        <li className="f16">
                                            {ref.upReferralBonus}
                                        </li>

                                        <li className="f16">
                                            {ref.country || "Nigeria"}
                                        </li>


                                    </ul>)
                            }

                        </li>
                    </ul>
            }

        </div>
    )
}
const ReferAFriend = () => {
    const { referalModalISOpen, changeModalState } = useContext(ReferralModalContext);
    console.log(changeModalState)
    return (
        <div className="bw mt20 container" >
            <div className="center-text">
                <img src="./images/referral.png" alt="" />
            </div>
            <h2 className="f18 bolder tb">
                WIN WITH YOUR FRIENDS.
            </h2>
            <p className="f16 mt10">
                Invite your friends with your referral ID or Code, they earn 10% more RoR on their first investment and you earn 2 to 2.5% plus a 0.5% recurring referral bonus.
            </p>

            <div className="mt50">
                <button
                    onClick={() => {
                        console.log(referalModalISOpen);
                        changeModalState(true)
                    }
                    }
                    className="br5 bd-o bg-brand-orange tw bold fw p10 pointer">
                    Refer a friend
                </button>
            </div>
        </div>
    )
}
