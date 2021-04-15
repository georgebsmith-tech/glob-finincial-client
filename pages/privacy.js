import Link from 'next/link'
import Subscribe from '../components/Subscribe'
import styles from '../styles/Story.module.css'
// import SentMessage from '../../components/SentMessage/SentMessage'


const Privacy = () => {
    return (
        <main className="mt30">

            <h3 className="fw bg-brand-orange center-text nun" style={{ fontWeight: '800', fontSize: '48px', padding: '30px' }}>PRIVACY</h3>
            <div className="p15 mb50" style={{ paddingTop: '10px' }}>
                <div>
                    <h3 className="mb10" style={{ fontSize: '24px' }} className="nun">Glob Financial Privacy Policy</h3>
                    <p>This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information by our website.</p>
                </div>
                <div>
                    <div>
                        <p className="nop">What personal information do we collect from the people that visit our website?</p>
                        <p>When registering on our site, you may be asked to enter your name, email address, country, preferred withdrawal channels, phone number, or other details to help you with your experience.</p>
                    </div>
                    <div>
                        <p className="nop">When do we collect information?</p>
                        <p>We collect information from you when you register on our site, enter information, or request a withdrawal on our site.</p>
                    </div>
                    <div>
                        <p className="nop">How do we use your information?</p>
                        <p>We may use the information we collect from you when you register, sign up for our newsletter, respond to a survey or marketing communication, surf the website and our community platforms, or use certain other site features in the following ways:</p>
                        <p>1.  To quickly process your transactions.</p>
                        <p>2.  Give you a personalized service.</p>
                    </div>
                    <div>
                        <p className="nop">How do we protect your information?</p>
                        <p>Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. We implement a variety of security measures when a user places an order enters, submits, or accesses their information to maintain the safety of your personal information.</p>
                    </div>
                    <div>
                        <p className="nop">Do we use 'cookies'?</p>
                        <p>Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. For instance, we use it to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</p>
                    </div>
                    <div>
                        <p className="nop">We use cookies to:</p>
                        <ul>
                            <li>
                                <p> Help remember and check if the user is still logged in.</p>
                            </li>
                        </ul>

                        <p>You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since the browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.</p>
                        <p>If you turn cookies off, Some of the features that make your site experience more efficient may not function properly. It won't affect the user's experience that makes your site experience more efficient and may not function properly.</p>
                    </div>
                    <div>
                        <p className="nop">Third-party disclosure</p>
                        <p>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.</p>
                    </div>
                    <div>
                        <p className="nop">Third-party links</p>
                        <p>Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We, therefore, have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</p>
                    </div>
                    <div>
                        <p className="nop">Fair Information Practices</p>
                        <p>The Fair Information Practices Principles form the backbone of privacy law and the concepts included have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.</p>
                        <p>To be in line with Fair Information Practices we will take the following responsive action, should a data breach occur:</p>
                        <p>We will notify you via email within 7 business days</p>
                        <p>We will notify the users via in-site notification within 7 business days and through our community platforms. </p>
                        <p>We also agree to the Individual Redress Principle which requires that individuals have the right to legally pursue enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or government agencies to investigate and/or prosecute non-compliance by data processors.</p>
                    </div>
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


export default Privacy