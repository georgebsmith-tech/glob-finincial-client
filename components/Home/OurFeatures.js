const OurFeatures = () => {
    const Features = [
        {
            text: "In today's volatile economy, you should never depend on a single income source. Grow your funds up to 10% monthly in cash and crypto.",
            title: "Grow Wealth",
            imageURL: "./images/Glob Financial/cash.svg",

        },
        {
            imageURL: "./images/Glob Financial/flexibility.svg",

            title: "Flexibility with investment",
            text: `Invest in 30days, 180days, 360days.
No management fees, No lock funds.
Withdraw your fund at any time`
        },
        {
            imageURL: "./images/Glob Financial/need.svg",
            title: "Meet your Needs",
            text: "Pay bills, support education, rent, etc, fund your goals, with rewards from your account without having to touch your monthly ROI."
        },
        {
            imageURL: "./images/Glob Financial/medal.svg",
            title: "Enjoy Exclusive rewards",
            text: "Spend, buy from anywhere in the world with an online virtual card exclusive for you. Earn 2 to 2.5% referral bonuses on referring your friends with lots of giveaways in the community."
        },
        {
            imageURL: "./images/Glob Financial/accountant.svg",
            title: "Personal Account Manager",
            text: "Reach a dedicated account manager set aside to help you whenever you have a need."
        }
    ]
    return (
        <div
            className="center-text mt30"
            style={{
                backgroundColor: "rgba(139,189,67,0.1)",
                padding: "40px 3px 50px 3px"
            }}>
            <h2
                className="bolder tb mt20"
                style={{ fontSize: 36, marginBottom: 80 }}>
                Our Features
         </h2>
            <ul>
                {Features.map(feature => <li
                    style={{
                        border: "0.5px solid rgba(0,0,0,0.1)",
                        boxShadow: "0px 4px 30px rgba(199, 199, 199, 0.25)",
                        padding: "30px 15px 81px 15px"
                    }}
                    className="mb20 br5">
                    <div style={{ marginBottom: 60 }}>
                        <img
                            src={feature.imageURL} alt="" />            </div>
                    <h3 className="f24 tb bolder mb15">
                        {feature.title}

                    </h3>
                    <p className="f18" style={{ lineHeight: 2 }}>
                        {feature.text}
                    </p>
                </li>)}
            </ul>


        </div>
    )
}


export default OurFeatures;