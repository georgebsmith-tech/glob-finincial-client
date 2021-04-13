import Head from 'next/head'
import Link from 'next/link'
import { FaFacebook } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import Subscribe from '../components/Subscribe'

import axios from 'axios'


export default function Home() {
    const val = 200
    return (
        <div>
            <h1 className="f24 center-text mt50 bold tb container">
                RETURNS ON INVESTMENT(ROI)
            </h1>
            <Cards />
            {/* <div
                className="flex justify-center"
                style={{ width: "100vw", zIndex: 20 }}> */}
            {/* <div style={{ height: val, backgroundColor: "white", borderRadius: "90%", position: "relative", bottom: -120 }}>

            </div> */}
            {/* </div> */}
            <div style={{ position: "relative", bottom: -80 }}>
                <img
                    className="fw"
                    src="./images/sho.png" alt="this " />
            </div>

            <section className="mb50" style={{ backgroundColor: "#F5FFED", padding: "80px 0", position: "relative", zIndex: -10 }}>
                <AccountBenefits />
                <GlobCredit />
                <OnlineVirtualCard />
                <ReferralBonus />
                <CommunityGiveAway />
            </section>
            <Subscribe />

        </div>
    )
}


const AccountBenefits = () => {
    return (
        <>
            <div className="container">
                <h2 className="f28 mb30">
                    ADDITIONAL ACCOUNT BENEFITS

        </h2>
                <div className="mb20">
                    <h3 className="f18 mb20 tb ">
                        LIFE ACCOUNT:
                </h3>
                    <p className="f16 lh1p5">
                        This serves you as an emergency fund to provide financial security for your emergency needs and it's only activated on Propel Account and Prosper account.
                        Propel Life Account earns 1% monthly.
                        Prosper Life Account earns 1.25% monthly.

                </p>
                </div>

                <div className="mb20">
                    <h3 className="f18 mb20 tb ">

                        GOAL WALLET/FUND:

                </h3>
                    <p className="f16 lh1p5">
                        This rewards 2% monthly on both propel and prosper cash account supporting you to achieve your goals like paying your bills, education, financing real estate property, healthcare, car, etc without having to touch your monthly ROI.


                </p>
                </div>


            </div>
            <div>
                <img
                    className="fw"
                    src="./images/emergency fund.svg" alt="" />
            </div>
        </>
    )
}

const ReferralBonus = () => {
    return (
        <div className="container">
            <h2 className="f28 tb bolder mb20">
                REFERRAL BONUS

            </h2>
            <p className="f16 tb lh1p5">
                Earn 2.5%(for funds below $1000) and 2%(for funds from $1000 and above) for referring your friends with your referral link.
                You also earn additionally, 0.5% every time an existing member you referred re-investment(deposits to their investment account).
                Note: Referral bonuses are redeemed after 30days.

            </p>
        </div>
    )
}

const OnlineVirtualCard = () => {
    return (
        <div >
            <div className="container mt20">


                <h2 className="f28 tb bolder mb20 center-text">

                    ONLINE VIRTUAL CARD
            </h2>
                <p className="f16 tb lh1p5">
                    You have an online virtual card(dollars) that allows you to purchase, spend and buy anywhere in the world.
                    When you make an investment you also earn points called  WEALTH POINTS which can be converted to cash and spend(used) on your card.


            </p>
            </div>
            <div className="relative mt30">
                <div
                    className="flex flex-end"
                    style={{ position: "absolute", right: 0, top: 0 }}>
                    <img
                        style={{ width: "100%" }}
                        src="./images/cash.png" alt="" />
                </div>

                <div>
                    <img src="./images/ring_small.png" alt="" />
                </div>
            </div>
            <div>
                <img
                    className="fw"
                    src="./images/ring_big.png" alt="" />
            </div>
        </div>

    )
}


const CommunityGiveAway = () => {
    return (
        <div className="container mt50">
            <h2 className="f28 tb bolder mb20 center-text">

                COMMUNITY GIVEAWAYS

            </h2>
            <p className="f16 tb lh1p5">
                Members enjoy exclusive giveaways from our community and participate in monthly contests that reward them with phones, cash, vouchers, etc.



            </p>
        </div>
    )
}



const GlobCredit = () => {
    return (
        <div className="container">
            <h2 className="f28 tb bolder mb20">
                GLOB CREDITS


            </h2>
            <p className="f16 tb lh1p5">
                Every time you invest, you earn credit that rewards you with cash to top-up for your next investment.
                This increases your investment capital, meaning every investment you make gives you money for another investment. Wow.


            </p>
        </div>
    )
}

const Cards = () => {

    return (
        <ul className="mt50"
            style={{ margin: 30 }}>
            <CashCard />
            <CardCrypto />
        </ul>
    )
}


const CashCard = () => {
    return (
        <li
        >
            <Link href="/choose-asset?kind=cash">

                <div className="center-text bw pointer"
                    style={{ boxShadow: "2px 6px 30px 3px rgba(0, 0, 0, 0.1)", padding: "50px 20px 30px 20px", marginBottom: 60, height: 200 }}>
                    <h2 className="tb bold mb20 f24">
                        Cash
                </h2>
                    <p className="f14">
                        <div className="mb10">
                            Earns 7.5% Prime Account
            </div>
                        <div className="mb10">

                            9% Propel Account
            </div>
                        <div className="mb10">
                            10% Prosper Account.
              </div>

                    </p>
                </div>
            </Link>
        </li>
    )
}
const CardCrypto = () => {
    return (
        <li
        >
            <Link href="/choose-asset?kind=crypto">

                <div className="center-text bw pointer"
                    style={{ boxShadow: "2px 6px 30px 3px rgba(0, 0, 0, 0.1)", padding: "50px 20px 30px 20px", marginBottom: 60, height: 200 }}>
                    <h2 className="tb bold mb20 f24">
                        Crytocurency
                </h2>
                    <p className="f14">
                        <div className="mb20">
                            Earns 5% monthly on Bitcoin
                            .

            </div>


                    </p>
                </div>
            </Link>
        </li>
    )
}
