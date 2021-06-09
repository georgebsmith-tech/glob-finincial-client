import Link from 'next/link'
import { FaAngleRight, FaArrowRight } from 'react-icons/fa'



const CommonIssues = () => {
    const f_and_qs = [
        {
            q: "Password and account access"
        },
        {
            q: "Resets, unlock account"
        },
        {
            q: "Payments, Holds, declines, refunds, crypto, withdrawals"
        },
        {
            q: "Account profile and set up"
        },
        {
            q: "Bank account, credit card, email, phone, changing withdrawal details."
        }
    ]
    return (
        <div className="mt50">
            <h3 className="f24 mb30">
                Common Issues
                </h3>
            <ul>
                {
                    f_and_qs.map(q_and_a => <li
                        style={{ backgroundColor: "rgba(139, 189, 67, 0.05)" }}
                        className="p10 br8 flex space-between f18 mb10 align-center">
                        <div className="bold">
                            {q_and_a.q}
                        </div>
                        <div>
                            <FaAngleRight />
                        </div>
                    </li>)

                }

            </ul>


        </div>

    )
}

export default CommonIssues;