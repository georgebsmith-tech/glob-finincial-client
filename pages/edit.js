
import { UserContext } from '../contexts/UserContext'
import { useState, useContext, useEffect } from 'react'
export default function EditProfile() {
    const { user, storeUser } = useContext(UserContext)
    console.log(user)
    return (
        <main>
            <div className="p15">
                <form action="">

                    <div className="f12 mb20">
                        <label
                            style={{ color: "rgba(0,0,0,0.3)" }}
                            className="block mb5"
                            htmlFor="">
                            Full Name
                    </label>
                        <input
                            value={user.fullName}
                            className="fw f14 tb"
                            style={{
                                padding: "7px 0px"
                                ,
                                outline: "none",
                                border: "none",
                                borderBottom: "1px solid rgba(0,0,0,0.3)"
                            }}
                            placeholder="Enter Full name"
                            type="text" />
                    </div>
                    <div className="f12 mb20">
                        <label
                            style={{ color: "rgba(0,0,0,0.3)" }}
                            className="block mb5"
                            htmlFor="">
                            Email
                    </label>
                        <input
                            value={user.email}
                            className="fw f14 tb"
                            style={{
                                padding: "7px 0px"
                                ,
                                outline: "none",
                                border: "none",
                                borderBottom: "1px solid rgba(0,0,0,0.3)"
                            }}
                            placeholder="Email"
                            type="email" />
                    </div>
                    <div className="f12 mb20">
                        <label
                            style={{ color: "rgba(0,0,0,0.3)" }}
                            className="block mb5"
                            htmlFor="">
                            Phone no
                    </label>
                        <input
                            value={user.phone}
                            className="fw f14 tb"
                            style={{
                                padding: "7px 0px"
                                ,
                                outline: "none",
                                border: "none",
                                borderBottom: "1px solid rgba(0,0,0,0.3)"
                            }}
                            placeholder="Phone"
                            type="number" />
                    </div>
                    <div className="f12 mb20">
                        <label
                            style={{ color: "rgba(0,0,0,0.3)" }}
                            className="block mb5"
                            htmlFor="">
                            Gender (option)
                    </label>
                        <select
                            value={user.gender}
                            className="f14 bw"
                            style={{
                                padding: "7px 0px"
                                ,
                                width: "100%",
                                outline: "none",
                                border: "none",
                                borderBottom: "1px solid rgba(0,0,0,0.3)"
                            }}
                            placeholder="Phone"
                        >
                            <option value="male">Male</option>
                            <option value="male">Female</option>
                        </select>
                    </div>

                    <div className="f12 mb20">
                        <label
                            style={{ color: "rgba(0,0,0,0.3)" }}
                            className="block mb5"
                            htmlFor="">
                            State
                    </label>
                        <select
                            value={user.state}
                            className="f14 bw"
                            style={{
                                padding: "7px 0px"
                                ,
                                width: "100%",
                                outline: "none",
                                border: "none",
                                borderBottom: "1px solid rgba(0,0,0,0.3)"
                            }}
                            placeholder="Phone"
                        >
                            <option value="male">Rivers</option>
                            <option value="male">Abia</option>
                        </select>
                    </div>
                    <div className="f12 mb20">
                        <label
                            style={{ color: "rgba(0,0,0,0.3)" }}
                            className="block mb5"
                            htmlFor="">
                            Country
                    </label>
                        <select
                            value={user.gender}
                            className="f14 bw"
                            style={{
                                padding: "7px 0px"
                                ,
                                width: "100%",
                                outline: "none",
                                border: "none",
                                borderBottom: "1px solid rgba(0,0,0,0.3)"
                            }}
                            placeholder="Phone"
                        >
                            <option value="Nigeria">Nigeria</option>

                        </select>
                    </div>

                    <div className="f12 mb20">
                        <label
                            style={{ color: "rgba(0,0,0,0.3)" }}
                            className="block mb5"
                            htmlFor="">
                            Address
                    </label>
                        <input
                            value={user.address}
                            className="fw f14 tb"
                            style={{
                                padding: "7px 0px"
                                ,
                                outline: "none",
                                border: "none",
                                borderBottom: "1px solid rgba(0,0,0,0.3)"
                            }}
                            placeholder="Address"
                            type="text" />
                    </div>
                    <div className="plr30">
                        <button className="bd-o bbo tw br5 p10 fw pointer">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}

EditProfile.layout = "none"