import Link from 'next/link'

const AccountManager = () => {
    return (
        <div>
            <h1 className="bolder f20 tb v-shadow p10 mt20 bw normal">
                Account Manager
            </h1>
            <div className="" style={{ backgroundColor: '#8BBD4380', padding: '15px 10px' }}>
                <h3 className="tb f14" >Write new message</h3>
                <form action="">
                    <div className="f16 mb20 mt30">
                        <label
                            className=" block mb10 tb f14"
                            htmlFor="">
                            Recipient
                        </label>
                        <input

                            className="fw br5 f16 t-grey3"
                            style={{
                                padding: "17px 15px",
                                backgroundColor: "#00000029",
                                opacity: '0.5',
                                border: "1px solid rgba(250,250,250,1)"
                            }}
                        />
                    </div>
                    <div className="f14 mt30">
                        <label
                            className="block mb10 tb f14"
                            htmlFor="">
                            New Message
                        </label>
                        <textarea name="" id="" rows="13" className="fw br5 f14 t-grey3 "
                            style={{
                                padding: "17px 15px",
                                backgroundColor: "#00000029",
                                opacity: '0.5',
                                border: "1px solid rgba(250,250,250,1)"
                            }}></textarea>
                    </div>
                    <div className="center-text p10">

                        <button className="tw br5 bg-brand-orange bd-o block f20 center-text p10 fw"
                        >
                            Send Message
                        </button>

                    </div>
                </form>
            </div>
        </div>
    )
}

AccountManager.layout = "user"
export default AccountManager;