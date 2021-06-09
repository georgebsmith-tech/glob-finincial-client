import Link from 'next/link'
const ActionLink = ({ classes, cta, text, url, text2 }) => {
    return (
        <div className="container">
            <div className={`bolder tb ${classes} mt5 f18`}>
                {text2}
            </div>
            <div className={classes} style={{ padding: "20px 0" }}>

                <Link href={url || "/sign-up"} >
                    <a className="f16 br5 bg-brand-orange tw wrap" style={{ padding: "10px 25px" }}>
                        {cta || "Open an account Now"}
                    </a>
                </Link>

            </div>

            <div className={`bolder tb ${classes} mt5 f18`}>
                {text}
            </div>
        </div>
    )
}

export default ActionLink;