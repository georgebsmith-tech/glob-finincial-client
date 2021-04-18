import Head from 'next/head'
import { useState } from "react"
import styles from '../../styles/Home.module.css'
import links from '../../configs/links'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from "axios"
import { FaCashRegister, FaGift, FaHeadphones, FaMoneyBill, FaSmileO } from 'react-icons/fa'
import Withdraw from '../../components/Withdraw/Withdraw'
import baseURL from '../../configs/baseURL'
const log = console.log


export async function getServerSideProps({ req }) {
    // Fetch data from external API

    const res = await axios(`${baseURL}/users/wallet/${req.cookies.id}`)
    const wallet = res.data


    // Pass data to the page via props
    return { props: wallet }
}

export default function Wallet({ cashWallet }) {
    const router = useRouter()
    console.log(cashWallet)

    let content;

    const [active, setActive] = useState("cash")
    const options = ["cash", "crypto"]
    if (active === "cash") {
        content = <Cash cashWallet={cashWallet} />
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

const Cash = ({ cashWallet }) => {
    return (
        <div className="bw p15 mb50">
            <Balance balance={cashWallet.capital} />

            <Savings />
            <Investments />
            <GlobCreditEarned />
            <div className="ct mt50">
                <Link href="/choose-asset">
                    <button
                        style={{ padding: "11px 100px" }}
                        className="br10 bbo tw f16 bold bd-o hover pointer">
                        Make Investment
                </button>
                </Link>
            </div>
        </div>
    )
}

const Savings = () => {
    return (
        <Link href="/wallet/savings">


            <div
                className="center-text br10 mt20 pointer hover"
                style={{ boxShadow: "0 3px 20px #00000029", padding: "25px 15px 25px 15px" }}>
                <h3 className="f20 bolder text-brand-green mb10">
                    Savings
            </h3>


            </div>
        </Link>
    )
}

const Investments = () => {
    return (
        <Link href="/wallet/investments">


            <div
                className="center-text br10 mt20 pointer hover"
                style={{ boxShadow: "0 3px 20px #00000029", padding: "25px 15px 25px 15px" }}>
                <h3 className="f20 bolder text-brand-green mb10">
                    Investments
            </h3>


            </div>
        </Link>
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


const Balance = ({ balance }) => {
    return (
        <div
            className="center-text br10 mt10"
            style={{ boxShadow: "0 3px 20px #00000029", padding: "25px 15px 25px 15px" }}>
            <h3 className="f20 bolder text-brand-green mb10">
                Account Balance
            </h3>
            <div className="f33 tb bolder mb10">
                ${balance}
            </div>

        </div>
    )
}
