import React from 'react'
import Link from 'next/link'
import links from '../../configs/links'
import { useMediaQuery } from 'react-responsive';
import footerCategories from '../../configs/footerCategory'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const GuestFooter = ({ children }) => {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })

    if (isTabletOrMobile) {
        return (
            <footer
                style={{ backgroundColor: "rgba(248,248,248,1)", padding: "49px 15px 10px 15px" }}
                className="pt25 container">

                <ul className="grid grid3 gap10 mb50">
                    {
                        footerCategories.map(cat => <li>
                            <h3
                                className="f18 bold tb mb30">{cat.name}
                            </h3>
                            <ul>
                                {
                                    cat.subs.map(item => <li
                                        className="mb10">
                                        <Link href={item.url || "#"}>
                                            <a className="f16 hover-b">
                                                {item.name}
                                            </a>
                                        </Link>
                                    </li>)
                                }


                            </ul>
                        </li>)
                    }


                </ul>
                <div className="f16 center-text lh2">
                   <p className="mb20">
                        This Website is for information purposes only, the products and services could be modified without previous notice.

                

                         
                   </p>
                    <p className="mb20">
                        The value of your portfolio can go down or up as returns are not guaranteed and any historical returns expected returns or probability projections referenced on our website may not reflect actual future performances in the market. We seek to give you the best possible returns the market can provide, and request you seek financial advice if you are unsure about investing.
                   </p>
                   <p>

                        Contents of this website and site pages (“Website) are not directed at any person in any jurisdiction where (because of that person’s nationality, residence, or otherwise) the publication or availability of the Website is prohibited. Persons accessing the Website need to be aware that they are responsible themselves for compliance with all local rules and regulations.
                   </p>
                </div>

                <div className="f16 center-text mt20">
                    support@globfinanial.com
                </div>
                {/* <div className="f16 center-text mt10">
                    +234567890983
                </div> */}
                <div>
                    <ul className="f20  flex justify-center mt20">
                        <li className="mr20">
                            <Link href="#">
                                <a>
                                    <FaFacebook />
                                </a>

                            </Link>
                        </li>
                        <li className="mr20">
                            <Link href="#">
                                <a>
                                    <FaTwitter />
                                </a>

                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    <FaInstagram />
                                </a>

                            </Link>
                        </li>
                    </ul>

                </div>

                <div className="f16 center-text mt20" style={{ color: "rgba(175,181,192,1)" }}>
                    ©2020GlobFinancial
                </div>
            </footer>

        )
    } else {
        return (
            <footer>

            </footer>
        )
    }
}

export default GuestFooter
