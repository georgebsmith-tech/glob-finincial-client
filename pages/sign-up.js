import Head from 'next/head'

import links from '../configs/links'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import baseURL from '../configs/baseURL'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { getCountries, getCountryCallingCode } from 'react-phone-number-input/input'
import en from 'react-phone-number-input/locale/en.json'

import axios from 'axios'

import cookie from 'js-cookie'
const log = console.log

export async function getServerSideProps({ req }) {
    // Fetch data from external API

    const response = await fetch("https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-name.json")
    const data = await response.json()

    // Pass data to the page via props
    return { props: { countries: data } }
}


const SignUp = ({ countries = [] }) => {
    console.log(getCountries())
    log(getCountryCallingCode(getCountries()[10]))
    const [countryOptions, setCountryOptions] = useState(countries);
    log(en)
    // log(en[getCountries()[10]])
    const router = useRouter()
    const [credientials, setCredientials] = useState({ email: "", password: "", country: "Nigeria", phone: "", fullName: "", repeatPassword: "", referredBy: "" })
    const [regError, setregError] = useState("")
    // console.log(countryOptions)

    const register = async (credientials) => {
        try {
            const body = { ...credientials }
            body.referredBy = !body.referredBy && undefined
            const response = await axios.post(`${baseURL}/auth/register`, body)
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
        const body = { ...credientials }
        // body.referredBy = body.referredBy.toString(),
        body.refCode = body.referredBy ? body.referredBy : "-1"
        delete body.referredBy
        log(body)
        log(typeof body.referredBy)
        register(body)

        // log(credientials)

    }

    const setValue = (e) => {
        log("Number changed")
        setCredientials({ ...credientials, phone: e + "" })
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
                            htmlFor="gender">
                            Gender
                    </label>
                        <select
                            id="gender"
                            onChange={(e) => setCredientials({ ...credientials, gender: e.target.value })}
                            value={credientials.gender}
                            className="fw br5 f16 t-grey3"
                            style={{
                                padding: "11px 15px",
                                backgroundColor: "rgba(250,250,250,1)",
                                border: "1px solid rgba(250,250,250,1)"
                            }}
                            placeholder="Country" >
                            <option value="">Choose Gender</option>
                            <option value="male">Male</option>
                            <option value="male">Female</option>
                        </select>
                    </div>

                    <div className="f16 mb20">
                        <label
                            className="t-grey block mb10"
                            htmlFor="country">
                            Country
                    </label>
                        <select
                            id="country"
                            onChange={(e) => setCredientials({ ...credientials, country: e.target.value })}
                            value={credientials.country}
                            className="fw br5 f16 t-grey3"
                            style={{
                                padding: "11px 15px",
                                backgroundColor: "rgba(250,250,250,1)",
                                border: "1px solid rgba(250,250,250,1)"
                            }}
                            placeholder="Country" >
                            {countryOptions.map(countryOption => (<option value={countryOption.country} key={countryOption.country} >{countryOption.country}</option>))}
                        </select>
                    </div>


                    <div className="f16 mb20">
                        <label
                            className="t-grey block mb10"
                            htmlFor="phone">
                            Phone Number
                    </label>
                        <PhoneInput

                            international
                            defaultCountry="NG"
                            value={credientials.phone}
                            onChange={setValue} />
                        {/* <input
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
                            type="number" /> */}
                    </div>
                    <div className="f16 mb20">
                        <label
                            className="t-grey block mb10"
                            htmlFor="referredBy">
                            Referral Code
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
                            placeholder="Enter Referral Code"
                            type="text" />
                        <small className="f10">
                            When Ever you use a referral code  you earn 10% more.
                            </small>
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