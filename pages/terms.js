import Link from 'next/link'
import Subscribe from '../components/Subscribe'
import styles from '../styles/Story.module.css'
// import SentMessage from '../../components/SentMessage/SentMessage'


const Terms = () => {
    return (
        <main className="mt30">

            <h3 className="fw bg-brand-orange center-text nun" style={{ fontWeight: '800', fontSize: '48px', padding: '30px' }}>TERMS</h3>
            <div className="p15 mb50" style={{ paddingTop: '10px' }}>
                <div>
                    <h3 className="mb10" style={{ fontSize: '24px' }} className="nun">Legal</h3>
                    <p className="mt20">This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information by our website.</p>
                </div>
                <div>
                    <div>
                        <h3 className="nop f16">1. Introduction</h3>
                        <p className="mt20">hese Terms And Conditions (these “Terms” or these “Terms And Conditions”) contained herein on this webpage, shall govern your use of this website, including all pages within this website (collectively referred to herein below as this “Website”). These Terms apply in full force and effect to your use of this Website and by using this Website, you expressly accept all Terms And Conditions contained herein in full. You must not use this Website if you have any objection to any of these Terms And Conditions.

                   <div className="mt20">
                                This Website is not for use by any minors (defined as those who are not at least 18 years of age), and you must not use this Website if you a minor.
                   </div>
                        </p>
                    </div>
                    <div className="mt20">
                        <h3 className="nop f16 mb20">2. Intellectual Property Right</h3>
                        <p>Other than the content you own, which you may have opted to include on this Website, under these Terms, Globfinancial and/or its licensors own all rights to the intellectual property and material contained in this Website, and all such rights are reserved. You are granted a limited license only, subject to the restrictions provided in these Terms, for purposes of viewing the material contained on this Website.
</p>
                    </div>
                    <div className="mt20">
                        <h3 className="nop f16 mb20">3.Restrictions</h3>
                        <p className="mb10">
                            You are expressly and emphatically restricted from all of the following:
</p>

                        <p className="mb10">

                            selling, sublicensing, and/or otherwise commercializing any Website material;
</p>

                        <p className="mb10">

                            using this Website in any way that is, or maybe, damaging to this Website;
</p>

                        <p className="mb10">

                            using this Website in any way that impacts user access to this Website;
</p>


                        <p className="mb10">
                            using this Website contrary to applicable laws and regulations, or in a way that causes;
                            may cause, harm to the Website, or any person or business entity;
                        </p>


                        <p className="mb10">

                            engaging in any data mining, data harvesting, data extracting, or any other similar activity about this Website, or while using this Website;

</p>

                        <p className="mb10">

                            Certain areas of this Website are restricted from access by you and Globfinancial may further restrict access by you to any areas of this Website, at any time, at its sole and absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain the confidentiality of such information.


</p>
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


export default Terms;