import styles from '../styles/Story.module.css'
import { FaUserAlt } from 'react-icons/fa';
import Subscribe from '../components/Subscribe';

const Story = () => {
    return (
        <div className={styles.story}>
            <div className={styles.grid}>
                <div style={{}}>
                    {/* <img src=" ./images/ourstory.png" alt="Our Story" width='100%' height="100%" className={styles.none} /> */}
                </div>
                <div style={{ paddingTop: 40, width: "60%" }} className={`tt ${styles.container}`
                }>
                    <h1 style={{ fontWeight: '700', fontSize: '48px' }} className={`mb50`}>Our Story</h1>
                    <span className="lh1p5">Our story inspires us and we hope it inspires you. We began our journey in search of opportunities that will make profound impacts in the lives of people in society.
                    We discovered, people needed to protect their money from the uncertainties of negative economic circles impacts such as inflation, devaluation, resulting in the money they hold losing value, with a relative increase in the cost of living and reduction in their ability to buy more with the money they have.
                    The existing solutions only served the ultra(super) wealthy and were not accessible to middle and low-income good and hardworking people who are making efforts to build their wealth and have a great life for themselves and their families, we decided to build the solution.
                    We created a system in which you can learn and give protection to your money also giving you the ability to build wealth to achieve the freedom to share your life with the people and things that matter most to you.
                    Our story inspires us and we hope it inspires you...
                    </span>
                </div>
            </div>
            <div style={{}} className={styles.grid}>
                <div style={{ position: 'relative', width: "70%" }} className={styles.container}>
                    <div className="ct p15 mb50 mt20">


                        <img
                            className="fw"
                            src="./images/story-hero.svg" alt=" story images" />
                    </div>
                    <h3 style={{ fontWeight: '700', marginBottom: "10px" }} className="f24">HOW WE USE YOUR FUNDS</h3>

                    <span className="much" style={{ lineHeight: "30px" }}>
                        We have our proprietary systems in which we invest in the Capital market<br /> and cryptocurrency market.  <br />
                        We trade on the market daily to earn profits, and our trading is guided by <br /> our fund management principle "OF NEVER LOSE MONEY" A low-risk <br /> exposure to funds with the possible best returns from the market. <br />
                        The profits from our trade, we share with you as Returns on Investment and hold a reserve for the company, a WIN-WIN. <br /><br />

                        We ensure we create security and insurance for your funds by holding <br /> reserves in Cryptocurrency,(BITCOIN AND ETHERUM), cash, and divergent <br /> investment portfolios. <br />
                        In the case of liquidity of funds, we have access to the best brokers and funding structures in the market to help easily offset our trading balance for cash and fund you at any time.
                        .</span>
                </div>
                {/* <div className="mb20">
                    <img src=" ./images/Illustration 1.svg" alt="Our Story" width="80%" className={styles.container} />
                </div> */}
            </div>
            <div style={{ padding: '20px', marginBottom: '50px' }}>
                <h3 className="center-text f36 tt mb15">Our Vision & Mission</h3>
                <div style={{ padding: '10px' }}>
                    <div className={`mb30 ${styles.flex}`}>

                        <img src="./images/ourstory3.png" className={styles.none} alt="" />
                        <div
                            style={{ boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.1)" }}
                            className={`p30`}>
                            <img src=" ./images/mission.png" alt="Our Story" className="mb15" />
                            <p className="f22 mb15"> <b>Mission</b></p>
                            <span>
                                To give everyone the access to gain the freedom to achieve their highest aspirations and dreams.
                            </span>
                        </div>
                    </div>
                    <div className={`p30`} style={{ justifyContent: 'flex-end', boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.1)" }}>

                        <div style={{ zIndex: '66' }} className={`${styles.r} ${styles.card} {}`}>
                            <img src="./images/vission.svg" alt="" className="mb15" />
                            <p className="f22 mb15"> <b>Vision</b></p>
                            <span>
                                Empowering the fine art of living among humans.
                            </span>
                        </div>
                        <img src="./images/ourstory4.png" className={styles.none} alt="" />
                    </div>
                </div>

            </div>
            <Subscribe />
        </div>
    )
}


export default Story