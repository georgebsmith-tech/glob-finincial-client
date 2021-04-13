const Subscribe = () => {
    return (
        <div className="center-text container mb70">
            <h2 className="f23 bolder tb">
                Subscribe now to get our weekly financial newsletters. !

            </h2>
            <div className="f14 mt20">
                Every day of the week we pick the best for you.
            </div>
            <div className="mt20">
                <div>
                    <input
                        style={{ padding: "18px 25px" }}
                        className="f16 fw"
                        type="email" placeholder="Enter Email Address" />
                </div>
                <div className="mt20">
                    <button
                        style={{
                            padding: "17.5px 70px",
                            borderRadius: "0px 10px 10px 0",
                            boxShadow: "1px 10px 30px rgba(245, 56, 56, 0.35)"

                        }}
                        className="f16 tw bold bg-brand-orange bd-o">
                        Subscribe Now
                    </button>
                </div>
            </div>


        </div>
    )
}


export default Subscribe;