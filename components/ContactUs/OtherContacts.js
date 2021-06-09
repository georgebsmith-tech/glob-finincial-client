import Link from 'next/link'
import { FaAngleRight, FaArrowRight } from 'react-icons/fa'



const OtherContacts = () => {
    const contacts = [
        {
            text: "Its like Texting, send us a note",
            caption: "Message Us",
            img: "messager.svg"
        },
        {
            text: "Its like Texting, send us a note",
            caption: "Ask the Community",
            img: "community.svg"
        },
        {
            text: "support@globfinancial.com",
            caption: "Email",
            img: "email.svg"
        },

    ]
    return (
        <div className="mt50">
            <h3 className="f24 mb30">
                Other ways to Contact Us
                </h3>
            <ul>
                {
                    contacts.map(contact => <li
                        style={{ gridTemplateColumns: "90px auto" }}
                        className=" f18 mb30 align-center grid">
                        <div className="bold">
                            <img src={`/images/${contact.img}`} alt="" />
                        </div>
                        <div>
                            <div className="f24 bold mb20 tb">
                                {contact.caption}
                            </div>

                            <div className="f20">
                                {contact.text}
                            </div>
                        </div>
                    </li>)

                }

            </ul>


        </div>

    )
}

export default OtherContacts;