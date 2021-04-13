import React, { useState } from 'react'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive';
import styles from '../../styles/GuestHeader.module.css'

const GuestHeader = ({ children }) => {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })

    const [toggleIsOpen, setToggleIsOpen] = useState(false)

    const handleToggle = () => {
        setToggleIsOpen(!toggleIsOpen)
    }

    const pages = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Community",
            url: "/community"
        },
        {
            name: "Product",
            url: "/product"
        },
        {
            name: "Reward",
            url: "/reward"
        },
        {
            name: "Our Story",
            url: "our-story"
        }
        ,
        {
            name: "Login",
            url: "/sign-in"
        }
    ]

    if (isTabletOrMobile) {
        return (
            <div className="pt25">

                <nav className="bw">



                    <div className="flex align-center space-between p15 ">

                        <h2>
                            <span className="bold f16 fw">GLOB</span><span className="f16 fo">
                                FINANCIAL
                </span>
                        </h2>
                        <div>
                            <Link href="/sign-up">
                                <a
                                    style={{
                                        padding: "16px 46px",
                                        boxShadow: "0px 4px 31px rgba(0, 0, 0, 0.15)"
                                    }}
                                    className="f16 tw bg-brand-orange ">
                                    Register
                            </a>
                            </Link>
                        </div>

                        <div
                            onClick={handleToggle}
                        >
                            <img src="./images/toggle-nav.svg" alt="" />
                        </div>
                    </div>


                </nav>
                {
                    toggleIsOpen && <ul className="ct mt50" style={{ borderBottom: "1px solid #f4f4f4" }}>
                        {
                            pages.map((page, idx) => <li
                                key={idx} className="mb30 mt30">
                                <Link href={page.url}>
                                    <a
                                        onClick={() => setToggleIsOpen(false)}
                                        className="f30 tb normal">
                                        {page.name}
                                    </a>
                                </Link>
                            </li>)
                        }

                    </ul>
                }

            </div>


        )
    }
    return (
        <header>

            <nav
                className="bg-brand-green align-center"
                style={
                    {
                        padding: "24px 51px 35px 51px",
                        display: "flex",
                        justifyContent: "space-around"
                    }
                }
            >
                <h2>
                    <span className="bold f24 fw">GLOB</span><span className="f24 fo">
                        FINANCIAL
                </span>
                </h2>
                <ul
                    className="align-center"
                    style={{ display: "flex" }}>
                    <li className="mr30">
                        <Link href="/">
                            <a className="f20 fw">
                                Home
                          </a>
                        </Link>
                    </li>
                    <li className="mr30">
                        <Link href="/community">
                            <a className="f20 fw">
                                Community
                      </a>
                        </Link>
                    </li>
                    <li className="mr30">
                        <Link href="/product">
                            <a className="f20 fw">
                                Product
                      </a>
                        </Link>
                    </li>
                    <li className="mr30">
                        <Link href="/rewards">
                            <a className="f20 fw">
                                Rewards
                      </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/our-stories">
                            <a className="f20 fw">
                                Our Story
                      </a>
                        </Link>
                    </li>
                </ul>
                <ul
                    className="align-center"
                    style={{ display: "flex" }}>
                    <li className="mr30">
                        <Link href="/sign-in">
                            <a
                                style={{ padding: "12px 32px" }}
                                className="f17 fw bd5-orange fo block">
                                Sign in
                      </a>
                        </Link>
                    </li>
                    <li>
                        <Link

                            href="/sign-up">
                            <a
                                style={{ padding: "12px 24px" }}
                                className="f17 fw bd bd5-orange block bg-orange bd5">
                                Become A Member
                      </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default GuestHeader
