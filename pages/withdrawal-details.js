import Head from 'next/head'
import { useState } from "react"
import styles from '../styles/Home.module.css'
import links from '../configs/links'
import Link from 'next/link'
import { useRouter } from 'next/router'
import baseURL from '../configs/baseURL'
import { useEffect } from 'react'
import sendRequest from '../utils/server-com/sendRequest'
import { FaSmileO } from 'react-icons/fa'
import axios from 'axios'
const log = console.log
export async function getServerSideProps({ req }) {
    // Fetch data from external API

    const response = await axios.get(`${baseURL}/users/wallet/${req.cookies.id}`)
    const data = response.data
    log(data)
    const result = data.btcWallet.capital + data.cashWallet.capital
    // Pass data to the page via props
    log(result)
    return { props: { walletWorth: result, id: req.cookies.id } }
}



export default function Withdraw({ walletWorth, id }) {
    const [balance, setBalance] = useState(walletWorth)
    const [fromWallet, setFromWallet] = useState("all")
    log(id)
    useEffect(() => {

        (async function () {
            const data = await sendRequest("", "get", `users/wallet/${id}?kind=${fromWallet}`)
            let result = data.wallet
            if (fromWallet === "all") {
                result = data.btcWallet.capital + data.cashWallet.capital
            }
            setBalance(result)

        }())


    }, [fromWallet]);



    return (
        <div
            className="" style={{ width: "100vw", backgroundColor: "rgba(0, 0, 0, 0.16)" }}>
            <h1 className="bold f20 tb v-shadow p10 mt20 bw">
                Withdrawal Details
            </h1>
            <div className="bw">
                <h2 className="f14 normal p10 bb">
                    DETAILS
                </h2>
            </div>
            <div className="bw p20">
                <div className="mb20">
                    <p className="f18 center-text">
                        Withdraw to your personal or company bank account. <span className="f18 text-brand-orange">Add new account</span>
                    </p>
                </div>
                <form action="">
                    <div className="mb20">
                        <label htmlFor="" className="f14 mb10 block">
                            From
                    </label>
                        <select
                            value={fromWallet}
                            onChange={(e) => setFromWallet(e.target.value)}
                            style={{ padding: "10px", width: "100%" }}
                            className="br8 f13"
                            name="" id="">
                            <option value="all">
                                All
                        </option>
                            <option value="savings">
                                Savings
                        </option>
                            <option value="capital">
                                Capital
                        </option>
                            <option value="goal account">
                                Goal Account
                        </option>
                            <option value="life account">
                                Life Account
                        </option>
                            <option value="investment returns">
                                Investment Returns
                        </option>
                        </select>
                        <div className="mt5">
                            Current Balance: {balance} USD
                        </div>

                    </div>
                    <div className="mb20">
                        <label htmlFor="" className="f14 mb10 block">
                            To
                    </label>
                        <select
                            style={{ padding: "10px", width: "100%" }}
                            className="br8 f13"
                            name="" id="">
                            <option value="All">
                                Access Bank
                        </option>
                        </select>


                    </div>

                    <div className="mb20">
                        <label htmlFor="" className="f14 mb10 block">
                            Account Number
                    </label>
                        <input
                            style={
                                {
                                    padding: "10px",
                                    width: "100%"
                                }
                            }
                            className="br8 f13 bd"
                            type="number"
                            placeholder="Enter Acc. Number" />


                    </div>
                    <div className="mb20">
                        <label htmlFor="" className="f14 mb10 block">
                            Amount to Withdraw
                    </label>
                        <input
                            style={
                                {
                                    padding: "10px",
                                    width: "100%"
                                }
                            }
                            className="br8 f13 bd"
                            type="number"
                            placeholder="Enter Amount.e.g 20000" />


                    </div>
                    <div className="center-text mt30">
                        <button className="tw br10 bg-brand-orange f16 p10 bd-brand-orange bold" style={{ width: "100%" }}>
                            Review and Withdraw
            </button>
                    </div>



                </form>
            </div>
        </div>
    )
}

Withdraw.layout = "user"