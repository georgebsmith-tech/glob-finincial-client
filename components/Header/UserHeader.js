import Link from "next/link";
import { FaBell, FaHamburger, FaSearch } from "react-icons/fa";
import { useState } from 'react'
import pages from '../../configs/usersLinks'

import styles from '../../styles/UserHeader.module.css'


export default function UserHeder() {

    const [navIsOpen, setNavIsOpen] = useState(false)

    return (
        <header>
            <nav className="p15 bbg">
                <ul className="flex space-between">
                    <li>
                        <Link href="/dashboard">
                            <h2>
                                <span className="bold f16 fw">GLOB</span><span className="f16 fo">
                                    FINANCIAL
                </span>
                            </h2>
                        </Link>
                    </li>

                    <li>
                        <ul className="flex align-center">
                            <li>
                                <Link href="#">
                                    <a className="mr20">
                                        <FaBell size="1.8rem" />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a className="mr20">
                                        <FaSearch
                                            size="1.8rem" />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <img
                                        onClick={() => setNavIsOpen(true)}
                                        src="./images/toggle-nav-white.svg" alt="" />
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div
                onClick={() => setNavIsOpen(false)}
                style={{
                    position: "fixed", top: 0, right: 0, height: "100vh", overflowY: "auto", zIndex: 10,
                    width: "100vw",
                    backgroundColor: "rgba(139, 189, 67, 0.8)"
                }}
                className={`flex-end ${!navIsOpen ? "hide" : "flex"} ` + styles.toggleWrapper} >



                <div className="flex" style={{ width: "75vw", backgroundColor: "#FCFCFE" }}>
                    <div className="fw">
                        <div>
                            <div className={styles.headerProfile}>
                                <div className="p10 flex flex-end">
                                    <Link href="/edit">
                                        <a className="round flex justify-center align-center pointer"
                                            style={{
                                                border: "1px solid rgba(255,255,255,0.5",
                                                width: 35,
                                                height: 35
                                            }}>


                                            <img
                                                className="fw"
                                                src="./images/edit.svg" alt="" />
                                        </a>
                                    </Link>
                                </div>

                                <div
                                    style={
                                        {
                                            padding: "10px 5px 30px 10px"
                                        }}
                                    className={"flex align-center "}>

                                    <div className="" style={{ width: 70 }}>
                                        <img
                                            style={{ width: "100%" }}
                                            src="./images/home-client.png" alt="" />
                                    </div>
                                    <div className="ml20">
                                        <h3 className="f16 tw normal">
                                            {"Godswill asimetonka"}
                                        </h3>
                                        <div className="f14 mt5 tw">
                                            <span
                                                style={{ color: "rgba(255,255,255,0.5)" }}
                                                className="">{"231456"}***</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className="pt10 mt10 fw" style={{ backgroundColor: "#FCFCFE" }}>
                            {
                                pages.map(page => <li className="fw">
                                    <Link href={page.url || ""}>
                                        <a className="f15  normal flex flex-end p15 ">
                                            <span className="mr20 tbo">{page.name}</span>
                                            <span>
                                                <img src={`./images${page.url}.svg`} alt="" />
                                            </span>
                                        </a>
                                    </Link>
                                </li>)
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}