import Head from 'next/head'
import Link from 'next/link'
import { FaFacebook } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import Subscribe from '../components/Subscribe'
import ActionLink from '../components/ActionsButtons/ActionLink'

import axios from 'axios'


export default function Products() {
    const val = 200
    return (
        <div>
            <h1 className="f24 center-text mt50 bold tb container">
                PRODUCTS
            </h1>
            <TheProducts />



            <Subscribe />

        </div>
    )
}

const TheProducts = () => {

    const products = [
        {
            img: "savings.svg",
            title: "Savings",
            content: `Hold an account in Dollars, Euros, or pounds and have it grow 1% monthly.
Protect your money against devaluation and inflation while also enjoying a higher valuation with steady monthly growth. `
        },
        {
            img: "investments.svg",
            title: "investment",
            content: `Earn up to 5 to 10% RoR on your funds and cryptocurrency.
Enjoy a unique monthly payout.
Add or withdraw funds at any time`
        },
        {
            img: "v-card.svg",
            title: "Virtual Dollar Card",
            content: `Spend, buy, purchase with a virtual dollar card, using free wealth points earn on every deposit you do into your account. `,
            CTA: "Try it Now"
        }

    ]
    return (
        <ul>
            {
                products.map(product => {
                    return <div className="p20">
                        <div>
                            <img
                                className="fw"
                                src={`/images/${product.img}`} alt="" />
                        </div>
                        <div>
                            <h2 className="f48 ptb20">{product.title}</h2>
                            <p className="f18 lh1p5">
                                {product.content}
                            </p>
                        </div>
                        <div>
                            Get started

                    <ActionLink classes="left" cta={product.CTA} />
                        </div>
                    </div>
                })
            }
        </ul>
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
                        This serves as an emergency fund to provide financial security for your emergency needs and it's only activated on Propel and Prosper account. Propel account- 1%, Prosper account- 1.25%.

                </p>
                </div>

                <div className="mb20">
                    <h3 className="f18 mb20 tb ">

                        GOAL ACCOUNT:

                </h3>
                    <p className="f16 lh1p5">
                        This rewards 2% on both propel and prosper cash account supporting you to achieve your goals like paying your bills, education, financing real estate property, healthcare, car, etc without having to touch your monthly ROI.


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
                            7.5% Prime Account
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
                            5% monthly on Bitcoin
                            .

            </div>


                    </p>
                </div>
            </Link>
        </li>
    )
}
