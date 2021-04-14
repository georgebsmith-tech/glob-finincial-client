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
import { Pie } from '@reactchartjs/react-chart.js'
const log = console.log


export async function getServerSideProps({ req }) {
    // Fetch data from external API

    const res = await axios(`${baseURL}/users/wallet/${req.cookies.id}`)
    const wallet = res.data

    // Pass data to the page via props
    return { props: { wallet } }
}

export default function Networth({ wallet }) {
    const router = useRouter()


    const [active, setActive] = useState(1)
    const options = ["all time high", "this week", "this month"]

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
            </div>
            <Summary wallet={wallet} />
            <PortFolio />



        </div>



    )
}

Networth.layout = "user"


const Summary = ({ wallet }) => {
    const copyWall = { ...wallet.cashWallet }
    delete copyWall._id
    delete copyWall.capital
    const accumReturns = Object.values(copyWall).reduce((a, b) => a + b)
    return (
        <div className="bw p20 mt10">
            <div className="flex space-between mt20 ct">
                <div >
                    <div className="f14">
                        Cash Amount
</div>
                    <div className="f21 bold tb mt10">
                        ${wallet.cashWallet.capital}
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
                    ${accumReturns + wallet.cashWallet.capital}
                </div>
            </div>

        </div>
    )
}

const PortFolio = () => {


    const data = {
        // labels: [
        //     'Cash',
        //     'Crypto'
        // ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50],
            backgroundColor: [
                'rgb(255, 0, 13)',
                'rgb(0, 10, 255)'
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
                <div className="mt20">
                    <Pie data={data} />

                </div>
                <div className="flex justify-center mt30">
                    <div className="flex mr40">
                        <div style={{ width: 20, height: 20, backgroundColor: 'rgb(0, 10, 255)' }} className="round">

                        </div>
                        <div className="ml5">
                            <div className="f14">
                                Cash
                            </div>
                            <div className="f14 bolder tb">
                                $1000
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div style={{ width: 20, height: 20, backgroundColor: 'rgb(255, 0, 13)' }} className="round">

                        </div>
                        <div className="ml5">
                            <div className="f14">
                                Cash
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