import Head from 'next/head'
import Link from 'next/link'
import { FaFacebook } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import Subscribe from '../components/Subscribe'
import ActionLink from '../components/ActionsButtons/ActionLink'

import axios from 'axios'


export default function Products() {
    const val = 200
    return (
        <div>
            <h1 className="f30 center-text mt50 bold tb container">
                PRODUCTS
            </h1>
            <TheProducts />
            <Subscribe />

        </div>
    )
}

const TheProducts = () => {

    const products = [
        {
            img: "savings.svg",
            title: "Savings",
            content: `Hold an account in Dollars, Euros, or pounds and have it grow 1% monthly.
Protect your money against devaluation and inflation while also enjoying a higher valuation with steady monthly growth. `,
            text2: "Get Started"
        },
        {
            img: "investments.svg",
            title: "investment",
            content: `Earn up to 5 to 10% RoR on your funds and cryptocurrency.
Enjoy a unique monthly payout.
Add or withdraw funds at any time`,
            text: "Earn 10% more ROI",

        },
        {
            img: "v-card.svg",
            title: "Virtual Dollar Card",
            content: `Spend, buy, purchase with a virtual dollar card, using free wealth points earn on every deposit you do into your account. `,
            CTA: "Try it Now"
        }

    ]
    return (
        <ul>
            {
                products.map(product => {
                    return <div className="p20">
                        <div>
                            <img
                                className="fw"
                                src={`/images/${product.img}`} alt="" />
                        </div>
                        <div>
                            <h2 className="f48 ptb20">{product.title}</h2>
                            <p className="f18 lh1p5">
                                {product.content}
                            </p>
                        </div>
                        <div>
                            <ActionLink classes="left" cta={product.CTA} text={product.text}
                                text2={product.text2}
                            />
                        </div>
                    </div>
                })
            }
        </ul>
    )
}

