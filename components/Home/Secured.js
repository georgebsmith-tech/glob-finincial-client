const Secured = () => {
    const points = [

        {

            title: "2-Factor Authentication",
            text: "SMS $ Verification and Authenticator Support"
        },
        {

            title: "Withdrawal Confirmation",
            text: "Keep Full Control; over your Account and Information"
        },
        {

            title: "SSL Server Security",
            text: "Make Sure of Secured Internet Connections"
        },
        {

            title: "24/7 Support",
            text: "SMS & Email Verification and Authenticator Support"
        }
        ,
        {

            title: "Funds Security",
            text: "Funds are completely Secured with Us"
        }
    ]
    return (
        <div
            className="bw"
            style={{

                padding: "40px 15px 50px 15px"
            }}>
            <h2
                className="bolder tb mt20"
                style={{
                    fontSize: 28, marginBottom: 20,

                }}>
                Dont Worry about the security of the platform and your Funds
         </h2>
            <div className="f18" style={{ lineHeight: 1.5 }}>
                We Handle Security has our utmost Priority, ensuring your funds and assets have utmost Securuty
         </div>
            <ul>
                {points.map(point => <li
                    style={{
                        margin: "30px 0"
                    }}
                    className="mb20 br5">

                    <div style={{ display: "grid", gridTemplateColumns: "0.8fr 2.5fr", gap: 10, alignItems: "center" }}>
                        <div>
                            <img
                                src="./images/Glob Financial/secure.svg" alt="" />
                        </div>
                        <div>
                            <h3 style={{ fontSize: 20 }} className="tb bolder mb10">
                                {point.title}
                            </h3>

                            <p className="f18" style={{ lineHeight: 2 }}>
                                {point.text}
                            </p>


                        </div>
                    </div>

                </li>)}
            </ul>


        </div>
    )
}


export default Secured;