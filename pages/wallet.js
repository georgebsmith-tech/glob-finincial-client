import Head from 'next/head'
import { useState } from "react"
import styles from '../styles/Home.module.css'
import links from '../configs/links'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { FaCashRegister, FaGift, FaHeadphones, FaMoneyBill, FaSmileO } from 'react-icons/fa'
import Withdraw from '../components/Withdraw/Withdraw'

export default function Wallet() {
    const router = useRouter()

    let content;

    const [active, setActive] = useState("cash")
    const options = ["cash", "crypto"]
    if (active === "cash") {
        content = <Cash />
    } else if (active === "gift") {
        content = <Crypto />

    } else {
        // router.push("/404")
    }
    return (
        <div
            className="" style={{ width: "100vw", backgroundColor: "rgba(0, 0, 0, 0.16)" }}>
            <h1 className="bolder f20 tb v-shadow p10 mt20 bw">
                Wallet
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

Wallet.layout = "user"

const Cash = () => {
    return (
        <div className="bw p15 mb50">
            <Balance />
            <BalanceSplit />
            <ActiveInvestments />
            <GlobCreditEarned />
            <div className="ct mt50">
                <button
                    style={{ padding: "11px 100px" }}
                    className="br10 bbo tw f16 bold bd-o">
                    Make Investment
                </button>
            </div>
        </div>
    )
}

const GlobCreditEarned = () => {
    return (
        <div className="br10 mt30 ct"
            style={{ boxShadow: "0 3px 20px #00000029", padding: "25px 15px 25px 15px" }}>
            <h2 className="f14">
                Glob Credit Earned
            </h2>
            <div className="tb f16 mb20 bolder mt10">
                1000
            </div>
            <div className="f16 tb" >
                Every time you invest, you earn credit you can use to reinvest
            </div>

        </div>
    )
}

const ActiveInvestments = () => {
    return (
        <div
            className="br10 mt30"
            style={{ boxShadow: "0 3px 20px #00000029", padding: "25px 15px 25px 15px" }}>
            <h3 className="f16 bold mb20">
                Active Investments
            </h3>
            <ul className="grid gap20 grid2">
                {
                    [1, 2].map(() => <li style={{ border: "1px solid #707070", padding: "20px 0" }}
                        className="br10 ct">
                        <h4 className="f14 tb bolder mb20">
                            $1000
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
                                $2000
                            </div>
                        </div>
                        <div className="mt20 tbo bold f14">
                            Investment active for 6days
                        </div>
                    </li>)
                }

            </ul>
            <div className="mt30">
                <Link href="#">
                    <a className="f18 tbo bolder ct block pointer">
                        View All
                    </a>
                </Link>
            </div>
        </div>
    )
}



const Balance = () => {
    return (
        <div
            className="center-text br10 mt10"
            style={{ boxShadow: "0 3px 20px #00000029", padding: "25px 15px 25px 15px" }}>
            <h3 className="f20 bolder text-brand-green mb10">
                Account Balance
            </h3>
            <div className="f33 tb bolder mb10">
                $1000
                </div>

        </div>
    )
}
const BalanceSplit = () => {
    return (
        <ul className="grid  gap20 grid2 mt30">
            {
                [1, 2, 3, 4].map(() => <li
                    style={{ boxShadow: "0 3px 20px #00000029", padding: "25px 15px 25px 15px" }}
                    className="center-text br10">
                    <h4 className="f13 bolder text-brand-green mb10">
                        Capital
                </h4>
                    <div className="f18 tb bolder mb10">
                        $1000
                </div>
                    <div>
                        <Withdraw classes="f14" />
                    </div>
                </li>)
            }

        </ul>
    )
}