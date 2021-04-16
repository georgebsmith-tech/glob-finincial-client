
const HowItWorks = () => {
    const steps = [

        ["Register Personal", "Information"],
        ["Choose your", "Account Type"],
        ["Fund your", "Account"],
        ["Activate your", "Investment"]


    ]
    return (
        <div className="mt50 container">
            <h2 className="center-text tb bold f33">
                How It Works
      </h2>
            {/* <h5 className="center-text f16 mt10 normal">
                Join the Community of Globers in 4 simple ways
      </h5> */}
            <ul

                className="f16 mt20 p15"
                style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", paddingTop: 15, gap: 15 }}>
                {
                    steps.map((step, idx) => {

                        return <li className="flex">
                            <div>
                                <div
                                    className="br10 flex justify-center align-center"
                                    style={{ boxShadow: "0px 32px 54px rgba(37, 138, 255, 0.224553)", backgroundColor: "#8BBD43", width: 58.5, height: 58.5 }}>
                                    <img src={`./images/how-it-works${idx * 1 + 1}.svg`} alt="" />

                                </div>
                                <p className="mt20 bold">
                                    <div>
                                        {step[0]}
                                    </div>
                                    <div>
                                        {step[1]}
                                    </div>
                                </p>
                            </div>
                        </li>
                    })
                }



            </ul>
        </div>
    )
}


export default HowItWorks