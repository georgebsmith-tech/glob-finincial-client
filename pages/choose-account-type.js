import Head from 'next/head'
import Link from 'next/link'
import { FaArrowRight, FaFacebook } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import Subscribe from '../components/Subscribe'
import ActionLink from '../components/ActionsButtons/ActionLink'

import axios from 'axios'


function AccountType() {
    const [active, setActive] = useState("savings")
    return (
        <div>
            <h1 className="f30 center-text mt50 bold tb container">
                ACCOUNT TYPE
            </h1>
            <div className="mt10">
                <ul className=" grid grid2 f20">
                    <li
                        onClick={() => setActive("savings")}
                        style={{ backgroundColor: "#F2F4F9" }}
                        className={`ct to p10 ${active === "savings" && "active-border"}`}>Savings</li>
                    <li
                        onClick={() => setActive("investment")}
                        className={`ct bbo tw p10 ${active !== "savings" && "active-border"}`}>investment</li>
                </ul>
            </div>
            <main className="p20">
                {
                    active === "savings" && <div className="mt20 mb30 f14">
                        Earn 1% monthly in USD/EUROS/POUNDS
                </div>
                }

                <ConversionOptions />

                <div className="f16 mt30">
                    N.B : Funds are very secured.
                </div>

                <div className="ct mt50">
                    <Link href="#">
                        <a
                            style={{ padding: "10px 50px" }}
                            className="f18 p10 bbo tw br5 bdo">Proceed</a>
                    </Link>
                </div>
            </main>


        </div>
    )
}
AccountType.layout = "auth"
export default AccountType;


const ConversionOptions = () => {
    const [USD, setUSD] = useState(0);
    const [EUR, setEUR] = useState(0);
    const [GBP, setGBP] = useState(0)
    useEffect(() => {
        (async function () {
            const response_usd = await axios.get("https://free.currconv.com/api/v7/convert?q=USD_NGN&compact=ultra&apiKey=be38bd6ed32388abd93e")
            console.log(response_usd.data.USD_NGN)
            setUSD(response_usd.data.USD_NGN);

            const response_eur = await axios.get("https://free.currconv.com/api/v7/convert?q=EUR_NGN&compact=ultra&apiKey=be38bd6ed32388abd93e")
            console.log(response_eur.data.EUR_NGN)
            setEUR(response_eur.data.EUR_NGN)

            const response_gbp = await axios.get("https://free.currconv.com/api/v7/convert?q=GBP_NGN&compact=ultra&apiKey=be38bd6ed32388abd93e")
            console.log(response_gbp.data.GBP_NGN)
            setGBP(response_gbp.data.GBP_NGN)

        })

    })
    const options = [
        {
            name: "USD",
            text: "United State Dollar",
            img: "usd.svg",
            value: USD
        },
        {
            name: "EUROS",
            text: "EU",
            img: "euros.svg",
            value: EUR
        }, {
            name: "POUNDS",
            text: "British",
            img: "pounds.svg",
            value: GBP
        },

    ]
    return (
        <ul
            style={{ boxShadow: "0px 2px 14px rgba(0, 0, 0, 0.105808)" }}
            className="br6">
            {
                options.map(option => {
                    return (
                        <li className="grid grid3 p20 active-option align-center">
                            <div>
                                <div>
                                    <img src={`/images/${option.img}`} alt="" />
                                </div>
                                <div>
                                    <h3 className="f18">
                                        1.0
                                </h3>
                                    <h4 className="f20">
                                        {option.name}
                                    </h4>
                                    <p className="f16">
                                        {option.text}
                                    </p>
                                </div>
                            </div>
                            <div className="p20">
                                {/* <FaArrowRight /> */}
                                <img src="/images/arrow-right.svg" alt="" />
                            </div>
                            <div>
                                <div>
                                    <img src={`/images/naira.svg`} alt="" />
                                </div>
                                <h3 className="f18">
                                    {option.value.toFixed(2)}
                                </h3>
                                <div>
                                    <h4 className="f20">
                                        Naira
                                    </h4>
                                    <p className="f16">
                                        Nigeria
                                    </p>
                                </div>
                            </div>
                        </li>

                    )
                })
            }
        </ul>
    )
}

