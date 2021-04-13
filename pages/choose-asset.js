import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Assets.module.css'
import { FaCheckCircle, FaCircle } from 'react-icons/fa'
import links from '../configs/links'
import Link from 'next/link'
import { useRouter } from 'next/router'
const log = console.log


const ChooseAsset = function () {
    const router = useRouter()

    const [invType, setInvType] = useState(router.query.kind)

    let content;
    if (invType === "crypto") {
        content = <Crypto />
    } else if (invType === "cash") {
        content = <Cash />
    }
    return (
        <main className="mt50">


            <div
                className="f33 center-text"
                style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", boxShadow: "0px 0px 12px #F2F4F9" }}>

                <div
                    className={"bg-brand-orange bold pointer " + ("cash" === invType && styles.activeAsset)}
                    style={{ padding: 13, borderRadius: "10px 0 0 10px", color: "#F2F2F2" }}
                    onClick={(e) => { setInvType("cash"); router.push("/choose-asset?kind=cash") }}>
                    Cash
                </div>
                <div
                    className={"text-brand-orange bold pointer " + ("crypto" === invType && styles.activeAsset)}
                    onClick={(e) => { setInvType("crypto"); router.push("/choose-asset?kind=crypto") }}
                    style={{ padding: 13, borderRadius: "0 10px 10px 0", backgroundColor: "#F2F2F2" }}>
                    Crypto
                </div>


            </div>
            <section className="mt50">
                {content}
            </section>
        </main>
    )
}


ChooseAsset.layout = "auth"

export default ChooseAsset;

const Crypto = () => {
    return (
        <div
            style={{ marginTop: -70 }}
            className="p15">
            <div
                style={{ position: "relative", bottom: -60 }}
                className="flex justify-center">


                <div
                    className="bw round flex justify-center align-center"
                    style={{ width: 120, height: 120 }}>


                    <div
                        className="round flex justify-center align-center"
                        style={{ width: 100, height: 100, backgroundColor: "#F99400", }}>
                        <img src="./images/Glob Financial/btc.svg" alt="" />
                    </div>
                </div>
            </div>

            <div className="br8">
                <div
                    className="center-text"
                    style={{
                        backgroundColor: "#F99400",
                        paddingTop: 60,
                        paddingBottom: 30,
                        borderRadius: "10px 10px 0 0"
                    }}>
                    <div className="flex justify-center mb20">


                        <div
                            className="round bold bw flex place-center text-brand-green mt20"
                            style={{
                                width: 100, height: 100,
                                fontSize: 52,


                            }}>
                            5%
                    </div>
                    </div>
                    <div >
                        <div className="f19 tw bold">
                            Monthly Returns on Investment
                        </div>

                    </div>

                </div>
                <div
                    style={{
                        backgroundColor: "#F2F2F2",
                        padding: "40px 10px 60px 10px",
                        borderRadius: "0px 0px 10px 10px"
                    }}>
                    <div className="mb50">
                        <div className="f24 center-text">
                            Investment in BTC is equivalent to USD at the current BTC price
                        </div>
                    </div>
                    <div className="center-text">
                        <Link href="/fund-account?kind=btc">
                            <a
                                style={{

                                    padding: "15px 70px"
                                }}
                                className="text-brand-orange p20 f24 inline-block bold mt10 br10 fw bg-brand-green">
                                Invest
                        </a>

                        </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

const Cash = () => {

    return (
        <div>
            <InvestmentAsset

                bg="#800080"
                asset="Prime"
                range="$50 - $5000"
            />
            <InvestmentAsset
                bg="#008000"
                asset="Propel"
                range="$1000 - $15000"
            />
            <InvestmentAsset
                bg="#D4AF37"
                asset="Prosper"
                range="$500 & ABOVE"
            />
        </div>
    )
}



const InvestmentAsset = ({ range, asset, bg }) => {
    const router = useRouter()
    return (
        <div className="mt50 center-text" style={{ backgroundColor: "rgba(242,242,242,1)", padding: "30px 20px" }}>
            <div style={{ borderBottom: "1px solid #fff" }}>
                <h2 className="f33" style={{ color: "rgba(139,189,67,1)" }}>
                    {asset}
                </h2>
                <div className="bold mt10" style={{ fontSize: 40 }}>
                    {range}
                </div>
                <div className="mt20 mb20">
                    <Link href="/fund-account?kind=card-options">
                        <a
                            style={{ padding: "10px 42px" }}
                            className="tw bg-brand-orange br8 bd-o">
                            Invets
                </a>
                    </Link>
                </div>
            </div>
            <div style={{ borderBottom: "1px solid #fff" }} className="p20">
                <div className="f18 bold">
                    Investment Period
                </div>
                <div className="f18 bold">
                    30 Days
                </div>
            </div>
            <div style={{ borderBottom: "1px solid #fff" }} className="p20">
                <div className="f18 bold">
                    ROI
                </div>
                <div className="f18 bold">
                    7.5%
                </div>
            </div>
            <div style={{ borderBottom: "1px solid #fff" }} className="p20">
                <div className="f18 bold">
                    Rewards and Benefits
                </div>
                <div className="f18 bold">
                    <FaCircle />
                </div>
            </div>
            <div style={{ borderBottom: "1px solid #fff" }} className="p20">
                <div className="f18 bold">
                    Life Account
                </div>
                <div className="f18 bold">
                    <FaCircle />
                </div>
            </div>
            <div style={{ borderBottom: "1px solid #fff" }} className="p20">
                <div className="f18 bold">
                    Goal  Wallet
                </div>
                <div className="f18 bold">
                    <FaCircle />
                </div>
            </div>

        </div>
    )
}

