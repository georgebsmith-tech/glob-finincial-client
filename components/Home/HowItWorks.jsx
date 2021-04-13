
const HowItWorks = () => {
    return (
        <div className="mt50 container">
            <h2 className="center-text tb bold f33">
                How It Works
      </h2>
            {/* <h5 className="center-text f16 mt10 normal">
                Join the Community of Globers in 4 simple ways
      </h5> */}
            <ul

                className="center-text f16 mt20"
                style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", paddingTop: 15, gap: 15 }}>
                {
                    [1, 2, 3, 2].map(step => <li className="flex justify-center">
                        <div>
                            <div
                                className="br10"
                                style={{ boxShadow: "0px 32px 54px rgba(37, 138, 255, 0.224553)", backgroundColor: "#8BBD43", width: 58.5, height: 58.5 }}>

                            </div>
                            <p className="mt20">
                                <div>
                                    Choose your
                                </div>
                                <div>
                                    Account Type
                               </div>
                            </p>
                        </div>
                    </li>)
                }



            </ul>
        </div>
    )
}


export default HowItWorks