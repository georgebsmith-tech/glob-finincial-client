import Head from 'next/head'
import { useState, useEffect } from "react"
import styles from '../styles/Home.module.css'
import links from '../configs/links'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from "axios"
import { FaCashRegister, FaGift, FaHeadphones, FaMoneyBill, FaSmileO } from 'react-icons/fa'
import Withdraw from '../components/Withdraw/Withdraw'
import baseURL from '../configs/baseURL'
import { Pie } from '@reactchartjs/react-chart.js'
const log = console.log


export async function getServerSideProps({ req }) {
    // Fetch data from external API

    const res = await axios(`${baseURL}/users/wallet/${req.cookies.id}`)
    const wallet = res.data
    log(wallet)
    // Pass data to the page via props
    return { props: { wallet } }
}

export default function Networth({ wallet }) {
    const router = useRouter()
    const [theWallet, setTheWallet] = useState(wallet.cashWallet)

    const [active, setActive] = useState(1)
    const options = ["cash", "crypto"]
    useEffect(() => {
        if (active === 1) {
            setTheWallet(wallet.cashWallet)
        } else if (active === 2) {
            setTheWallet(wallet.btcWallet)
        }


    }, [active]);

    return (
        <div
            className="" style={{ width: "100vw", backgroundColor: "rgba(0, 0, 0, 0.16)" }}>
            <h1 className="bolder f20 tb v-shadow p10 mt20 bw">
                Networth
            </h1>

            <div className="mt10 bw">
                <h2


                    className="p10 g14">
                    My Ownership
            </h2>


                <ul className="bw grid grid2">
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
            </div>
            <div className="">
                {
                    active === 1 ?
                        <SummaryCash wallet={theWallet} /> :
                        <SummaryBTC wallet={theWallet} />
                }


                <PortFolio asset={active} />
            </div>




        </div>



    )
}

Networth.layout = "user"


const SummaryBTC = ({ wallet }) => {
    const copyWall = { ...wallet }
    delete copyWall._id
    delete copyWall.capital
    delete copyWall.createdAt
    delete copyWall.updatedAt
    console.log(Object.values(copyWall))
    const accumReturns = Object.values(copyWall).reduce((a, b) => a + b)
    return (
        <div className="bw p20 mt10">
            <div className="flex space-between mt20 ct">
                <div >
                    <div className="f14">
                        Investment
</div>
                    <div className="f21 bold tb mt10">
                        ${wallet.capital}
                    </div>
                </div>
                <div >
                    <div className="f14">
                        Accumulative Returns
</div>
                    <div className="f21 bold tb mt10">
                        ${accumReturns}
                    </div>
                </div>
            </div>
            <div className="ct mt30" >
                <div className="f14">
                    Total
</div>
                <div className="f21 bold tb mt10">
                    ${accumReturns + wallet.capital}
                </div>
            </div>

        </div>
    )
}

const SummaryCash = ({ wallet }) => {
    const copyWall = { ...wallet }
    delete copyWall._id
    delete copyWall.capital
    delete copyWall.createdAt
    delete copyWall.updatedAt
    console.log(Object.values(copyWall))
    const accumReturns = Object.values(copyWall).reduce((a, b) => a + b)
    return (
        <div className="bw p20 mt10">
            <div className="flex space-between mt20 ct">
                <div >
                    <div className="f14">
                        Savings
</div>
                    <div className="f21 bold tb mt10">
                        ${wallet.savings || 0}
                    </div>
                </div>
                <div >
                    <div className="f14">
                        Investments
</div>
                    <div className="f21 bold tb mt10">
                        ${wallet.capital}
                    </div>
                </div>
            </div>

            <div className="ct mt30" >
                <div className="f14">
                    Accumulative Returns
</div>
                <div className="f21 bold tb mt10">
                    {accumReturns}

                </div>
            </div>

            <div className="ct mt30" >
                <div className="f14">
                    Total
</div>
                <div className="f21 bold tb mt10">
                    ${accumReturns + wallet.capital}
                </div>
            </div>

        </div>
    )
}

const PortFolio = ({ asset = 1 }) => {


    const data = {
        // labels: [
        //     'Cash',
        //     'Crypto'
        // ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50],
            backgroundColor: [
                asset === 1 ? 'rgb(255, 0, 13)' : 'rgb(100, 100, 13)',
                asset === 1 ? 'rgb(0, 10, 255)' : 'rgb(100, 10, 100)'
            ],
            hoverOffset: 4
        }]
    };

    return (
        <div className="p15 bw mt10">
            <h2>
                My Portfolio(Assets)
            </h2>
            <div>
                <div className="mt20 flex justify-center">
                    <Pie data={data} />

                </div>
                <div className="flex justify-center mt30">
                    <div className="flex mr40">
                        <div style={{ width: 20, height: 20, backgroundColor: asset === 1 ? 'rgb(0, 10, 255)' : 'rgb(100, 10, 100)' }} className="round">

                        </div>
                        <div className="ml5">
                            <div className="f14">
                                {asset === 1 ? "Savings" : "Investment"}
                            </div>
                            <div className="f14 bolder tb">
                                $1000
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div style={{ width: 20, height: 20, backgroundColor: asset === 1 ? 'rgb(255, 0, 13)' : 'rgb(100, 100, 13)' }} className="round">

                        </div>
                        <div className="ml5">
                            <div className="f14">
                                {asset === 1 ? "Investments" : "Returns"}
                            </div>
                            <div className="f14 bolder tb">
                                $1000
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt40">
                    <Link href="/choose-asset">
                        <a className="f14 bbo tw p10 fw block ct br5">
                            Add More To Your Assets

                    </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}