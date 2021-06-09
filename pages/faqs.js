import Link from 'next/link'
import { FaAngleRight, FaArrowRight } from 'react-icons/fa'
import Subscribe from '../components/Subscribe'
import styles from '../styles/Story.module.css'
// import SentMessage from '../../components/SentMessage/SentMessage'


import CommonIssues from "../components/ContactUs/CommonIssues"

import OtherContacts from "../components/ContactUs/OtherContacts"



const ContactUs = () => {

    return (
        <main className="mt30">

            <h3 className="fw bg-brand-orange center-text nun" style={{ fontWeight: '800', fontSize: '48px', padding: '30px' }}>FAQs</h3>
            <div className="p15 mb50" style={{ paddingTop: '10px' }}>

                <div>
                    <h2 className="f18 mt20">
                        HOW CAN WE HELP?
    </h2>
                    <p className="f16 mt20">
                        Ask your question, Kindly Type in your Email address and Question
                    </p>
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
                                    Ask Question
                                    </button>
                            </div>
                        </form>
                    </div>
                </div>

                <CommonQuestionsAndAnswers />

                <div className="ct f16 mb10">
                    Learn more about our fund management.
                </div>


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


export default ContactUs;


const CommonQuestionsAndAnswers = () => {
    const q_and_as = [
        {
            q: " 1.  How do I convert my local currency to dollars, pounds, euros.",
            a: " Answer: Once you register and create an account, you can pick any currency of your choice, we only provide Dollars, Pounds, and Euros, and your funds will automatically be converted into that currency."
        },
        {
            q: "2. Do I need documents or have to go to the bank to open my account.",
            a: "Answer: No, the only thing you need is a valid personal email address and your phone number."


        },
        {
            q: "3. Do I do savings or investments ?",
            a: `
Answer: This is dependent on your objectives and risk level and also you can own both accounts.

Your savings are risk - free and it earns 1 % monthly on your account, while your investment has a risk level and earns 5 % - 10 % monthly.`
        },
        {
            q: `4. When and how can I withdraw my funds:`,
            a: `Answer: The simple answer is anytime.
Make your withdrawal request and within 24-48hours your funds are deposited in your local account or receiving wallet.`
        },
        {
            q: `5. What is the duration of the investments?`,
            a: `
Answer: 30days,  6months, and 12months.
This offers you the flexibility to take your returns and capital at a time frame most comfortable for you. `
        },
        {
            q: `6. Can I terminate an investment at any time?`,
            a: `Answer: Yes, you can, but you will forfeit the returns for that month.`
        },
        {
            q: `7.How do I make withdrawals?`,
            a: `

Answer: Login to your dashboard, go to withdrawals, and request withdrawal from any of your fund wallets. Within 24-48hours you are credited with the local account or receiving the wallet you provided, or in your bitcoin wallet.`
        },
        {
            q: `8. Can I use any person's account to receive funds.`,
            a: `

Answer: No, the withdrawal account you provide must match your name and other credentials as we do a background check to avoid fraud`
        },
        {
            q: `9. If I have other issues, can I reach a customer agent at any time.
`,
            a: `

Answer: Yes, just log in to your dashboard, go to Account Manager and speak with an account manager.`
        },
        {
            q: `10. Is my money safe?`,
            a: `

Answer: Yes, we do not hold money in our wallets as we are not a bank, as well as to protect against a cyberattack and we also provide insurance for funds under our management.`
        }
    ]
    return (
        <ul className="mt40">
            {
                q_and_as.map(q_and_a => {
                    return (
                        <li

                            style={{ backgroundColor: "rgba(139, 189, 67, 0.05)" }}
                            className="f16 p10 mb20 br10">
                            <h4 className="tb mb20">
                                {q_and_a.q}

                            </h4>
                            <p>
                                {q_and_a.a}
                            </p>

                        </li>
                    )
                })
            }

        </ul>
    )
}

