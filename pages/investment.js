import Head from 'next/head'
import { useState } from "react"
import styles from '../styles/Home.module.css'
import links from '../configs/links'
import Link from 'next/link'
import { useRouter } from 'next/router'
import sendRequest from '../utils/server-com/sendRequest'
import cookie from 'js-cookie'
const log = console.log
import { FaSmileO } from 'react-icons/fa'
import { getDate } from "../utils/dateAndTime/getDate"


export async function getServerSideProps({ req }) {
    const data = await sendRequest("", "get", `investments/${req.cookies.id}?asset=cash`)
    log(data)
    return {
        props: {
            investments: data
        }
    }
}

function Investmnet({ investments }) {

    return (
        <div
            className="" style={{ width: "100vw", backgroundColor: "rgba(0, 0, 0, 0.16)" }}>
            <h1 className="bold f20 tb v-shadow p10 mt20 bw">
                Investment
            </h1>
            <div>


                <div className="p10 mt10 bw" style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.16)" }}>
                    <select
                        style={{ width: 100 }}
                        name="" id="" className="f8 br5 p5">
                        <option value="cash">
                            cash
               </option>
                        <option value="crypto">
                            crypto
               </option>
                        {/* <option value="cash">
                            stock
               </option> */}

                    </select>
                </div>


            </div>



            <ActiveInvestments investments={investments} />

        </div>



    )
}



Investmnet.layout = "user"
export default Investmnet;



const ActiveInvestments = ({ investments }) => {
    let today = new Date()

    return (
        <div
            className="mt10 bw"
            style={{ boxShadow: "0 3px 20px #00000029", padding: "25px 15px 25px 15px" }}>
            <h3 className="f16 bold mb20">
                Active Investments
            </h3>
            <ul className="grid gap20 grid2">
                {
                    investments.map((investment) => {
                        let invDate = new Date(investment.createdAt)
                        let days = (today - invDate) / (24 * 60 * 60 * 1000)
                        return <li
                            key={investment._id}
                            data-id={investment._id}
                            style={{ border: "1px solid #707070", padding: "20px 0" }}
                            className="br10 ct">
                            <h4 className="f14 tb bolder mb20">
                                ${investment.capital}
                            </h4>
                            <div className="tbg bold f12">
                                ROI
</div>
                            <div className="mt10 tb f13 bolder">
                                7.5%
</div>
                            <div
                                className="p20"
                                style={{ backgroundColor: "#F2F2F2" }}>
                                <h3 className="tbg f14 bold mb10">
                                    Calculated ROI Return
                            </h3>
                                <div className="tb bolder f14">
                                    ${investment.capital * 0.075}
                                </div>
                            </div>
                            <div className="mt20 tbo bold f14">
                                Investment active for {Math.floor(days)}days
                        </div>
                            <Link href={`/investment-detailed?invID=${investment._id}`}>
                                <a className="mt20 tbo bold f14 inline-block" style={{ textDecoration: "underline" }}>
                                    View
                        </a>
                            </Link>
                        </li>
                    })
                }

            </ul>
            <div className="mt30">
                <Link href="#">
                    <a className="f18 tbo bolder ct block pointer">
                        View All
                    </a>
                </Link>
            </div>

            <div className="ct mt50">
                <Link href="/choose-asset">
                    <button
                        style={{ padding: "11px 100px" }}
                        className="br10 bbo tw f16 bold bd-o">
                        Make Investment
                </button>
                </Link>
            </div>

        </div>
    )
}
