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
                                        <Link href={links.about}>
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
                    Glob Financial is a Trusted investment platform.
                </div>

                <div className="f16 center-text mt20">
                    support@globfinanial.com
                </div>
                <div className="f16 center-text mt10">
                    +234567890983
                </div>
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
