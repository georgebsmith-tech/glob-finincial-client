
import { useState, useEffect } from 'react'
import currencies from '../../configs/currencies'

const log = console.log

export default function CalculateReturns() {
    const [asset, setAsset] = useState("cash")
    const [cashAmount, setCashAmount] = useState(10000)
    const [acctType, setAcctType] = useState("propel")
    const [perc, setPerc] = useState(7.5)
    const [currency,setCurrency]=useState("USD")
    const [curSymbol, setCurSymbol] = useState("$")

    const theCurrencies = Object.keys(currencies)
    // log(theCurrencies)

    useEffect(() => {

        if (asset === "crypto") {
            setPerc(5)
        } else {
            if (acctType === "propel") {
                setPerc(9)
            } else if (acctType === "prosper") {
                setPerc(10)
            } else if (acctType === "prime") {
                setPerc(7.5)
            }
        }


    }, [acctType, asset])
    useEffect(() => {

        setCurSymbol(currencies[currency].symbol)


    }, [currency])
    return (
        <div className="mt50 mb20">
            <div className="container">


                <h2 className="f33 tb bolder center-text">
                    Calculate Returns on Investment
</h2>

                <p
                    style={{ fontFamily: "Gilroy", lineHeight: 1.5 }}
                    className="f18 mt10">For Better understanding of your Investment Retuns, Calculate your ROI by selecting the membership Plan you are interested in.</p>

                <div className="mt50">
                    <div>
                        <div>
                            <label htmlFor="" className="f18">Select Membership plan</label>
                        </div>

                        <select
                            value={asset}
                            onChange={(e) => setAsset(e.target.value)}

                            style={{ width: "100%" }}
                            name="" id=""
                            className="p10 mt5 f18">
                            <option value="cash">cash</option>
                            <option value="crypto">Crypto</option>

                        </select>
                    </div>
                    {
                        asset === "cash" &&
                        <div className="mt30">
                            <div>
                                <label htmlFor="" className="f18">Select Account Type</label>
                            </div>

                            <select
                                value={acctType}
                                onChange={(e) => setAcctType(e.target.value)}
                                style={{ width: "100%" }}
                                name="" id=""
                                className="p10 mt5 f18">
                                <option value="propel">Propel</option>
                                <option value="prime">Prime</option>
                                <option value="prosper">Prosper</option>
                            </select>
                        </div>
                    }
                    <div className="mt30">
                        <div>
                            <label htmlFor="" className="f18">Choose Your Currency</label>
                        </div>

                        <select
                            value={currency}
                            onChange={(e) => {setCurrency(e.target.value)}}
                            style={{ width: "100%" }}
                            name="" id=""
                            className="p10 mt5 f18">
                            {
                                theCurrencies.map((currency,idx) => <option 
                                key={idx}
                                    data-symbol={currencies[currency].symbol} value={currency}>{currencies[currency].name} ({currency})</option>)
                            }
                           
                           
                       
                        </select>
                    </div>
                    <div className="mt30">
                        <div>
                            <label htmlFor="" className="f18">Enter Amount</label>
                        </div>

                        <input
                            onChange={(e) => setCashAmount(e.target.value)}
                            value={cashAmount}
                            type="number"
                            style={{ width: "100%" }}
                            name="" id=""
                            className="p10 mt5 f18" />

                    </div>

                    <div className="mt30">
                        <div>
                            <label htmlFor="" className="f18">Percentage Return (monthly)</label>
                        </div>

                        <input
                            value={perc}
                            style={{ width: "100%" }}
                            className="p10 mt5 f18"
                            disabled />

                    </div>
                </div>
            </div>
            <div
                className="p20 mt30"
                style={{ backgroundColor: "rgba(139,189,67,0.1)" }}>
                <h3 className="center-text f24 tb">
                    Returns on Investment

        </h3>
                <div className="ct f18 bolder mt20 tb">
                    with your
        </div>
                <div className="center-text f33 bolder mt20 text-brand-green">
                    Basic Investment Plan
        </div>
                <div
                    className="center-text bolder text-brand-orange mt50"
                    style={{ fontSize: 64 }}>

                    {curSymbol} {(cashAmount * perc / 1000).toFixed(2)}
                </div>
                <div className="ct">
                <p className="f12 mb10 mt10">
                        Once you change the amount on your plan, your ROI changes as well.

                       
                </p>
                <p className="f12">
                        Try another amount or a different plan.
                </p>

                </div>
            </div>
        </div>
    )
}
