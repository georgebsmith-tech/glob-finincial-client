import Head from 'next/head'

import links from '../configs/links'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import baseURL from '../configs/baseURL'
const log = console.log
import axios from 'axios'

import cookie from 'js-cookie'

const SignUp = ({ history }) => {
    const router = useRouter()
    const [credientials, setCredientials] = useState({ email: "", password: "", country: "", phone: "", fullName: "", repeatPassword: "", referredBy: "" })
    const [regError, setregError] = useState("")


    const register = async (credientials) => {
        try {
            const response = await axios.post(`${baseURL}/auth/register`, credientials)
            const data = response.data
            log(data)
            cookie.set("id", data._id, { expires: 24 })
            router.push("/reward")
        } catch (error) {
            log(error.response.data.error)
            setregError(error.response.data.error)
            window.scrollTo(0, 0)
        }

    }
    const handleRegister = (e) => {
        e.preventDefault()

        log(credientials)
        register(credientials)

    }


    return (
        <main className="container mb30">
            <h1
                style={{ marginTop: 100 }}
                class="tb f36">
                Register
        </h1>
            {
                regError && <div style={{ marginTop: 20, textAlign: "center", border: "1px solid red", borderRadius: 5, fontSize: 14, padding: 10 }}>
                    {regError}
                </div>
            }
            <div className="mt50">
                <form action="">
                    <div className="f16 mb20">
                        <label
                            className="t-grey block mb10"
                            htmlFor="">
                            Full Name
                    </label>
                        <input
                            onChange={(e) => setCredientials({ ...credientials, fullName: e.target.value })}
                            value={credientials.fullName}
                            className="fw br5 f16 t-grey3"
                            style={{
                                padding: "11px 15px",
                                backgroundColor: "rgba(250,250,250,1)",
                                border: "1px solid rgba(250,250,250,1)"
                            }}
                            placeholder="Enter Full name"
                            type="text" />
                    </div>
                    <div className="f16 mb20">
                        <label
                            className="t-grey block mb10"
                            htmlFor="">
                            Email
                    </label>
                        <input
                            onChange={(e) => setCredientials({ ...credientials, email: e.target.value })}
                            value={credientials.email}
                            className="fw br5 f16 t-grey3"
                            style={{
                                padding: "11px 15px",
                                backgroundColor: "rgba(250,250,250,1)",
                                border: "1px solid rgba(250,250,250,1)"
                            }}
                            placeholder="Enter Email"
                            type="email" />
                    </div>

                    <div className="f16 mb20">
                        <label
                            className="t-grey block mb10"
                            htmlFor="country">
                            Country
                    </label>
                        <input
                            id="country"
                            onChange={(e) => setCredientials({ ...credientials, country: e.target.value })}
                            value={credientials.country}
                            className="fw br5 f16 t-grey3"
                            style={{
                                padding: "11px 15px",
                                backgroundColor: "rgba(250,250,250,1)",
                                border: "1px solid rgba(250,250,250,1)"
                            }}
                            placeholder="Country"
                            type="text" />
                    </div>

                    <div className="f16 mb20">
                        <label
                            className="t-grey block mb10"
                            htmlFor="phone">
                            Phone Number
                    </label>
                        <input
                            id="phone"
                            onChange={(e) => setCredientials({ ...credientials, phone: e.target.value })}
                            value={credientials.phone}
                            className="fw br5 f16 t-grey3"
                            style={{
                                padding: "11px 15px",
                                backgroundColor: "rgba(250,250,250,1)",
                                border: "1px solid rgba(250,250,250,1)"
                            }}
                            placeholder="Enter Phone Number"
                            type="number" />
                    </div>
                    <div className="f16 mb20">
                        <label
                            className="t-grey block mb10"
                            htmlFor="referredBy">
                            Referral ID
                    </label>
                        <input
                            id="referredBy"
                            onChange={(e) => setCredientials({ ...credientials, referredBy: e.target.value })}
                            value={credientials.referredBy}
                            className="fw br5 f16 t-grey3"
                            style={{
                                padding: "11px 15px",
                                backgroundColor: "rgba(250,250,250,1)",
                                border: "1px solid rgba(250,250,250,1)"
                            }}
                            placeholder="Enter Referral ID"
                            type="number" />
                    </div>
                    <div className="f16 mb20">
                        <label
                            className="t-grey block mb10"
                            htmlFor="password">
                            Password
                    </label>
                        <input
                            id="password"
                            onChange={(e) => setCredientials({ ...credientials, password: e.target.value })}
                            value={credientials.password}
                            className="fw br5 f16 t-grey3"
                            style={{
                                padding: "11px 15px",
                                backgroundColor: "rgba(250,250,250,1)",
                                border: "1px solid rgba(250,250,250,1)"
                            }}
                            placeholder="Create new Password"
                            type="password" />
                    </div>

                    <div className="f16 mb20">
                        <label
                            className="t-grey block mb10"
                            htmlFor="repeat-password">
                            Confirm Password
                    </label>
                        <input
                            id="repeat-password"
                            onChange={(e) => setCredientials({ ...credientials, repeatPassword: e.target.value })}
                            value={credientials.repeatPassword}
                            className="fw br5 f16 t-grey3"
                            style={{
                                padding: "11px 15px",
                                backgroundColor: "rgba(250,250,250,1)",
                                border: "1px solid rgba(250,250,250,1)"
                            }}
                            placeholder="Confirm Password"
                            type="password" />
                    </div>


                    <div
                        className="center-text mt30 ">
                        <button
                            onClick={handleRegister}
                            className="tw br8 bg-brand-orange bd-o"
                            style={{ padding: "11px 111px" }}>
                            Register
                        </button>
                    </div>
                    <div className="f16 center-text mt10">
                        New Here? <Link href={links.signIn}>
                            <a className="bolder text-brand-orange"> Login</a>
                        </Link>
                    </div>

                </form>
            </div>




        </main>
    )
}

SignUp.layout = "auth"
export default SignUp;