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
    // console.log(data.query)
    return {
        props: {
            investments: data
        }
    }
}

function Investmnet({ investments }) {
    const router = useRouter()
    const presentID = (router.query.invID)

    return (
        <div
            className="" style={{ width: "100vw", backgroundColor: "rgba(0, 0, 0, 0.16)" }}>
            <h1 className="bold f20 tb v-shadow p10 mt20 bw">
                Investment Detailed
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
                {
                    investments.length === 0 ?
                        <div className="bw p20 ct f18 grey3">You have no active Investment.
                            <div className="p20">
                                <Link href="/choose-asset">
                                    <button className="bbo tw bd-o p10 br5 f14 pointer">
                                        Make An Investment
                                </button>
                                </Link>
                            </div></div> :
                        <>
                            <div className="p10 bw mb5">
                                <ul className="grid grid6 cg10">
                                    <li className="f10 bold tb">Date</li>
                                    <li className="f10 bold tb">Acc  </li>
                                    <li className="f10 bold tb"> Capital</li>
                                    <li className="f10 bold tb nb">Accum. ROI</li>
                                    <li className="f10 bold tb nb">Life Acc. </li>
                                    <li className="f10 bold tb nb">Goal Wallet</li>
                                    <li></li>
                                </ul>


                            </div>
                            <ul>
                                {

                                    investments.map((investment) => {
                                        const date = getDate(investment.createdAt).split(" ")
                                        return <li>
                                            <ul
                                                style={{
                                                    backgroundColor: investment._id === presentID ? "rgba(255,255,0,0.2)" : "white"

                                                }}
                                                className="grid grid6 cg10 p10 bw mb2 align-center">
                                                <li

                                                    className="f10 nb"><div>
                                                        {`${date[0]} ${date[1]}`}
                                                    </div>
                                                    <div>
                                                        {`${date[2]}`}
                                                    </div></li>
                                                <li className="f10">{investment.accType}  </li>
                                                <li className="f10 nb"> {investment.capital} USD</li>
                                                <li className="f10">{investment.ROI} USD</li>
                                                <li className="f10">{investment.lifeAccount} USD </li>
                                                <li className="f10">{investment.goalAccount} USD</li>
                                                {/* <li>
                                                    <Link href={links.withdrawalDetails || ""}>
                                                        <a className="f10 text-brand-orange bold">
                                                            withdraw
                                </a>
                                                    </Link>
                                                </li> */}
                                            </ul>

                                        </li>
                                    })
                                }
                            </ul>
                        </>
                }



            </div>



        </div>



    )
}



Investmnet.layout = "user"
export default Investmnet;