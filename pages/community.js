import Subscribe from "../components/Subscribe";
import Link from 'next/link'


export default function Community() {
    return (
        <main className="mt50">
            <h1 className="ct tbo f23 normal mb30">
                COMMINITY
            </h1>

            <h3 className="ct lh1p5 f24 tb bold p15">
                A platform dedicated to promoting financial literacy and independence
            </h3>
            <div className="f18 ct">
                <p className="lh1p5">
                    Join our members to share, learn and interact with each other financial knowledge to build your fortune.

             </p>
                <p className="mt30">
                    Win amazing giveaways.
               </p>

            </div>


            <div>

            </div>
            <div>
                <img src="./images/community1.svg" alt="community image 1" />
            </div>

            <BlogAds />
            <div>
                <img src="./images/community3.svg" alt="" />
            </div>

            <Quarterly header="OUR QUARTERLY REPORT"
                content="Every quarter, we report the state of our portfolio to our members to give them insight into the company operating and financial activities."
            />
            <Quarterly
                header="QUARTERLY SHAREHOLDERS LETTER"
                content="We see our members as shareholders, and every quarter we let them in on our fund's management strategy, improvements, results, new product developments, much more, how these better their lives."
            />

            <SocialMedia />
            <Subscribe />
        </main>
    )
}

const SocialMedia = () => {
    const socialMedia = [
        {
            name: "facebook"
        },
        {
            name: "twitter"
        },
        {
            name: "instagram"
        },

    ]
    return (
        <div
            className="mb50"
            style={{
                backgroundColor: "rgba(139, 189, 67, 0.1)"
            }}>
            <p className="f24 bolder tb ct lh1p5 pt70 mb10 p20">
                Follow the community to share, learn and interact
          </p>

            <div>
                <ul className="flex justify-center">
                    {
                        socialMedia.map((sm, idx) => <li>
                            <Link href="#">
                                <a className={`${idx < 2 && "mr10"}`}>
                                    <img src={`./images/${sm.name}.svg`} alt={`Link to ${sm.name}`} />
                                </a>

                            </Link>
                        </li>)
                    }


                </ul>
            </div>

        </div>
    )
}

const Quarterly = ({ header, content }) => {
    return (
        <div className="mb50 p15">


            <h2 className="f36 mb20">
                {header}
            </h2>
            <p
                className="f22 mb30"
                style={{ fontFamily: "Montserrat" }}>
                {content}
            </p>
            <div>
                <Link href="#">
                    <a className="br5 tw bbo p10 f16">
                        Check the latest report
                    </a>
                </Link>
            </div>
        </div>
    )
}

const BlogAds = () => {
    return (
        <div className="p15">
            <h2 className="f33 bold ct mb30 p15">
                Blog
            </h2>
            <p className="ct f16 mb30">
                Read our latest news or general news
            </p>

            <div
                style={{ boxShadow: "0px 4px 8px rgba(22, 28, 82, 0.1)" }}
                className="br8">
                <div>
                    <img
                        className="fw"
                        src="./images/community2.svg" alt="" />
                </div>
                <div className="p15">


                    <h3 className="f16 mb10 bold ct">
                        Understanding financial freedom
                </h3>
                    <p className="f16 mb30">
                        Financial freedom means that you get to make life decisions without being overly stressed about the financial impact because you are prepared.
               </p>
                    <small className="f12">
                        January 29, 2020
                </small>
                </div>
            </div>



        </div>
    )
}