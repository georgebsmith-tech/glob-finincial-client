import Head from 'next/head'
import { useState } from "react"
import styles from '../styles/Home.module.css'
import links from '../configs/links'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from "axios"
import { FaCashRegister, FaGift, FaHeadphones, FaMoneyBill, FaSmileO } from 'react-icons/fa'
import Withdraw from '../components/Withdraw/Withdraw'
import baseURL from '../configs/baseURL'
const log = console.log


export async function getServerSideProps({ req }) {
    // Fetch data from external API

    const res = await axios(`${baseURL}/users/wallet/${req.cookies.id}`)
    const wallet = res.data
    log(wallet)

    // Pass data to the page via props
    return { props: wallet }
}

export default function Wallet({ cashWallet }) {
    const router = useRouter()
    console.log(cashWallet)

    let content;

    const [active, setActive] = useState(1)
    const options = ["all time high", "this week", "this month"]

    return (
        <div
            className="" style={{ width: "100vw", backgroundColor: "rgba(0, 0, 0, 0.16)" }}>
            <h1 className="bolder f20 tb v-shadow p10 mt20 bw">
                Leadership
            </h1>
            <ul className="bw grid grid3">
                {
                    options.map((option, idx) => <li
                        onClick={(e) => setActive(e.target.dataset.option * 1)}
                        data-option={(idx * 1 + 1)}
                        key={idx}
                        className={`f14 center-text bold pointer ${active === (idx * 1 + 1) && "bg-brand-green tw"}`} style={{ padding: "10px" }}>
                        {option.toUpperCase()}
                    </li>)
                }
            </ul>
            <Leaders />



        </div>



    )
}

Wallet.layout = "user"
const Leaders = () => {
    return (
        <div className="pt20 bw mt10">
            <div
                style={
                    {
                        backgroundColor: "#8BBD43",
                        borderRadius: "0 0 40% 40%",
                        paddingBottom: 60
                    }
                }
                className="p15">
                <p className="ct tw bold f14">
                    {"Take the Top Position and win exciting prizes and cash rewards".toUpperCase()}
                </p>
                <ul className="grid grid-leader align-center mt20">
                    <li>
                        <div>
                            <img
                                className="fw"
                                src="./images/home-client.png" alt="" />
                        </div>
                        <div className="ct tw">
                            <div className="tw f16 bold">
                                $600
                            </div>
                            <div className="tw f12 bold">
                                John Doe
                            </div>
                            <div
                                style={{ color: "rgba(255,255,255,0.6)" }} className="f10 bold">
                                Member ID:8123***
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img
                                className="fw" src="./images/home-client.png" alt="" />
                        </div>
                        <div className="ct tw">
                            <div className="tw f16 bold">
                                $600
                            </div>
                            <div className="tw f12 bold">
                                John Doe
                            </div>
                            <div
                                style={{ color: "rgba(255,255,255,0.6)" }} className="f10 bold">
                                Member ID:8123***
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img
                                className="fw" src="./images/home-client.png" alt="" />
                        </div>
                        <div className="ct tw">
                            <div className="tw f16 bold">
                                $600
                            </div>
                            <div className="tw f12 bold">
                                John Doe
                            </div>
                            <div
                                style={{ color: "rgba(255,255,255,0.6)" }} className="f10 bold">
                                Member ID:8123***
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <ul className="bw mt10 pt20 p10">
                {
                    [1, 2, 3, 4, 5, 4, 5, 6, 6, 5, 6].map(leader => <li
                        className="round mb10 p10"
                        style={{ backgroundColor: "#f1f1f1" }}>
                        <ul className="flex align-center space-between f14">
                            <li>
                                <img
                                    style={{ width: 40 }}
                                    src="./images/home-client.png" alt="" />
                            </li>
                            <li className="ct">
                                <div className="bold">
                                    GodsWill Augustine
                                </div>
                                <small className="f10 mt5">
                                    Member ID:1234***
                                </small>
                            </li>
                            <li className="bold f20">$5000</li>
                            <li>Nigeria</li>
                        </ul>

                    </li>)
                }
            </ul>
        </div>
    )
}