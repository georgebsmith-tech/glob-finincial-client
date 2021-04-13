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
                            style={{ padding: "10px", width: "100%" }}
                            className="br8 f13"
                            name="" id="">
                            <option value="All">
                                All
                        </option>
                        </select>
                        <div className="mt5">
                            Current Balance: 2000 USD
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