import Link from 'next/link'
import { FaAngleRight, FaArrowRight } from 'react-icons/fa'
import Subscribe from '../components/Subscribe'
import styles from '../styles/Story.module.css'
// import SentMessage from '../../components/SentMessage/SentMessage'


import CommonIssues from "../components/FAQs/CommonIssues"

import OtherContacts from "../components/FAQs/OtherContacts"



const Faqs = () => {

    return (
        <main className="mt30">

            <h3 className="fw bg-brand-orange center-text nun" style={{ fontWeight: '800', fontSize: '48px', padding: '30px' }}>FAQs</h3>
            <div className="p15 mb50" style={{ paddingTop: '10px' }}>

                <div>
                    <h2 className="f24">
                        Let us know your issue so we can quickly help you resolve it.
    </h2>
                    <div className="mt30">
                        <form action="">
                            <div style={{ position: "relative" }}>


                                <img
                                    style={{ position: "absolute", top: 15, left: 15 }}

                                    src="/images/email-icon.svg" alt="" />
                                <input
                                    className="p10 br6 f16"
                                    type="text"
                                    placeholder="Email Address"
                                    style={{ width: "100%", paddingLeft: 40 }}
                                />

                            </div>
                            <div style={{ position: "relative" }}>

                                <img
                                    style={{ position: "absolute", top: 43, left: 15 }}

                                    src="/images/message-icon.svg" alt="" />
                                <textarea
                                    style={{ paddingLeft: 40, width: "100%" }}
                                    className="br8 mt30 p10 f16"
                                    name="" id="" cols="30" rows="10"
                                    placeholder="Message"
                                ></textarea>
                            </div>

                            <div className="ct p20">
                                <button className="br8 f16 tw bbo bd-o"
                                    style={{ padding: "10px 40px" }}>
                                    Send Message
                                    </button>
                            </div>
                        </form>
                    </div>
                </div>

                <CommonIssues />


                <OtherContacts />


            </div>
            <Subscribe />
            <style jsx>
                {`
                  p{
                    font-size: 18px;
                    margin-bottom: 10px;
                    opacity:0.5;                    
                    font-family: Nunito;
                  }
                  .nop{
                     opacity:1;
                  }  
                `}
            </style>
        </main>

    )
}


export default Faqs;


