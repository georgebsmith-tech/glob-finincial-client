import Head from 'next/head'
import { useState } from "react"
import styles from '../styles/Home.module.css'
import links from '../configs/links'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { FaSmileO } from 'react-icons/fa'

export default function Withdraw() {
    return (
        <div
            className="" style={{ width: "100vw" }}>
            <h1 className="bold f20 tb v-shadow p10 mt20">
                Withdrawal
            </h1>
            <Assets />

            <TransactionHistory />

            <ReferalIncome />

            <ContestReward />




        </div>



    )
}


Withdraw.layout = "user"

const Assets = () => {
    const assets = [
        {
            type: "cash",
            unit: "USD",
            value: "1,234.12",
            backgroundColor: "rgba(176, 182, 204, 1)",
            midColor: "rgba(31, 48, 110, 0.8)"
        },
        {
            type: "crypto",
            unit: "BTC",
            value: "1.1234",
            backgroundColor: "rgba(166, 241, 255, 1)",
            midColor: "rgba(0, 215, 255, 1)"
        },
        // {
        //     type: "stock",
        //     unit: "USD",
        //     value: "1,2334.23",
        //     backgroundColor: "rgba(252, 191, 210, 1)",
        //     midColor: "rgba(245, 72, 127, 1)"
        // }
    ]
    return (
        <div className="v-shadow mt20 container">
            <h2 className="f14 bold mb30">
                Assets
          </h2>
            <ul>
                {
                    assets.map((asset) => <li

                        style={
                            {
                                backgroundColor: asset.backgroundColor,
                                paddingTop: 20,
                                paddingBottom: 20
                            }}
                        className="br8 mb20 v-shadow">
                        <div className="center-text">
                            <div>
                                <h3
                                    className="text-brand-green mb10"
                                    style={{ fontSize: 27 }}>
                                    {asset.type.toUpperCase()}
                                </h3>
                                <h4 className="f19 bold tb">
                                    Total {asset.type}
                                </h4>
                                <h4 className="bold tb mt10 mb10 bolder f24">
                                    {asset.value} {asset.unit}
                                </h4>
                            </div>
                            <div
                                className="p20"
                                style={{ backgroundColor: asset.midColor }}>
                                <div className="tb f19 bolder">
                                    Total Earned ROI
                                </div>
                                <div className="tw f33 bolder mt10">
                                    1,230.32 {asset.unit}
                                </div>

                            </div>
                            <div className="mt20">
                                <Link href={`/investment?type=${asset.type}`}>
                                    <a className="f19 text-brand-orange bold">
                                        View All Investments
                                </a>

                                </Link>

                            </div>
                            <div className="mt20 flex flex-end">
                                <Link href={links.cashTransactions || ""}>
                                    <a
                                        style={{ marginRight: 23 }}
                                        className="f19 text-brand-orange bolder">
                                        Withdraw
                                </a>

                                </Link>

                            </div>

                        </div>


                    </li>)
                }

            </ul>
        </div>
    )
}

const ReferalIncome = () => {
    return (
        <div className="tw v-shadow mt20 mb30" style={{ paddingTop: 10, paddingBottom: 50 }}>
            <h2 className="f18 bold tb mb30 p10">
                MY REFERAL INCOME
        </h2>
            <p className="f16 tb mb30 p10" style={{ backgroundColor: "rgba(139, 189, 67, 0.8)" }}>
                <h3 className="f18 bolder tb">
                    You Earned
                </h3>
                <div className="f33 tw bold mt10 mb20">
                    1,230.32 USD
                </div>

                <Link href={links.withdraw || ""}>
                    <a className="text-brand-orange bold f18 mb20 block">
                        Withdraw
                </a>

                </Link>
            </p>

            <div className="center-text">
                <div className="f13 plr140 mb30">
                    Referal bonuses is processed within 30days.
            </div>
                <h2 className="f20 normal mb20">
                    YOU CAN EARN MUCH MORE
                </h2>
                <div>
                    <i className="fa fa-smile-o" aria-hidden="true"></i>
                </div>


                <p className="f20 text-brand-green mb20 plr60">
                    Invite more of your friends, share your link or chat a friend with your link.
                    </p>


            </div>
            <div className="center-text">
                <button className="tw br10 bg-brand-orange f16 p15 bd-brand-orange bold" style={{ width: "80%" }}>
                    Refer A friend
            </button>
            </div>
            <div className="center-text mt20">
                <button className="text-brand-orange bolder br10 bw f16 p15 bd-brand-orange bold" style={{ width: "80%" }}>
                    Increase Investment
            </button>
            </div>

        </div>
    )
}


const ContestReward = () => {
    return (
        <div className="tw v-shadow mt20 mb30" style={{ paddingTop: 10, paddingBottom: 50 }}>
            <h2 className="f18 bold tb mb30 p10">
                MY CONTEST REWARDS
        </h2>
            <p className="f16 tb mb30 p10" style={{ backgroundColor: "rgba(163, 147, 186, 1)" }}>
                <h3 className="f18 bolder tb">
                    You Earned
                </h3>
                <div className="f33 tw bold mt10 mb20">
                    1,230.32 USD
                </div>

                <Link href={links.withdraw || ""}>
                    <a className="text-brand-orange bold f18 mb20 block">
                        Withdraw
                </a>

                </Link>
            </p>

            <div className="center-text">
                <div className="f20 plr100 mb30">
                    Referal bonuses is processed within 30days.
            </div>
                <h2 className="f20 normal mb20">
                    YOU CAN EARN MUCH MORE
                </h2>
                <div>
                    <i className="fa fa-smile-o" aria-hidden="true"></i>
                </div>





            </div>
            <div className="center-text">
                <button className="tw br10 bg-brand-orange f18 p15 bd-brand-orange bold" style={{ width: "80%" }}>
                    Withdraw
            </button>
            </div>


        </div>
    )
}

const TransactionHistory = () => {
    const [transHistoryActive, setTransHistoryActive] = useState("cash")
    return (
        <div className="bw mt20 " style={{ paddingTop: 20 }}>
            <h2 className="f14 p10">
                Withdrawal Transactions( History)
            </h2>
            <ul className="flex" style={{ borderBottom: "1px solid rgba(112, 112, 112, 1)" }}>
                {
                    ["cash", "crypto"].map(type => <li
                        className={"f14 p10 pointer " + (transHistoryActive === type && "bolder")}
                        data-type={type}
                        onClick={function (e) { setTransHistoryActive(e.target.dataset.type) }}
                        style={{ borderBottom: transHistoryActive === type ? "5px solid rgba(112, 112, 112, 1)" : "none" }}>{type.toUpperCase()}</li>)
                }



            </ul>
            <div style={{ height: 300, }} className="bw ">
                <div className="f20 mt40 center-text" style={{ color: "rgba(204, 204, 204, 1)" }}>
                    <div>
                        {transHistoryActive}
                    </div>
                    Nothing to see right now
                </div>


            </div>


        </div>
    )
}