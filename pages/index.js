import Head from 'next/head'
import Link from 'next/link'
import HowItWorks from '../components/Home/HowItWorks'

import OurFeatures from '../components/Home/OurFeatures'
import { useState, useEffect } from 'react'
import Secured from '../components/Home/Secured'
import axios from 'axios'

import Subscribe from '../components/Subscribe'
import PassiveIncome from '../components/Home/PassiveIncome';
import ProtectYield from '../components/Home/ProtectYield';
import CalculateReturns from '../components/Home/CalculateReturns'

const log = console.log
export default function Home() {


  // useEffect(() => {


  //   (async function () {
  //     try {


  //       const response = await axios.post("http://localhost:5000/auth/google", {
  //         tokenId: "value"
  //       })

  //     } catch (err) {
  //       console.log(err.responser)
  //     }

  //   })()
  //   // return () => {
  //   //   cleanup
  //   // };
  // });

  const responseFacebook = (response) => {
    console.log(response)
    const body = {
      email: response.name,
      email: response.email,
      id: response.id,
      avatar: response.picture.data.url
    }
    console.log(body)
  }

  const responseGoogleSuccess = async (resp) => {
    console.log(resp)
    try {


      const response = await axios.post("http://localhost:5000/auth/google", {
        tokenId: resp.tokenId
      })
      // const response = await fetch("http://localhost:6000/auth/google", {
      //   method: "post",
      //   body: JSON.stringify({ tokenId: resp.tokenId }),
      //   headers: {
      //     "Content-Type": "application/json"
      //   }
      // })

      console.log(response.data)
    } catch (err) {
      console.log(err)
    }



  }

  const responseGoogleFailure = (resp) => {
    console.log(resp)
  }

  return (
    <div>
      <div className="container">
        <h2 className="f18 text-brand-green mt30 center-text bolder"
        >
          Grow your money up to 10% monthly.
        </h2>
        <h3 className="tb bolder f36 mb10 center-text mt20">
          Start your journey to Financial happiness.
        </h3>
        <p className="f16 center-text" style={{ fontStyle: "Regular" }}>
          Have an account that helps you grow wealth as well as meet your everyday needs.
        </p>
      </div>

      {/* <GoogleLogin
        clientId="680308519636-8u2rp8tbqqb8f14787746e7fmgoplns6.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogleSuccess}
        onFailure={responseGoogleFailure}
        cookiePolicy={'single_host_origin'}
      />
 */}
      {/* <FacebookLogin
        appId="541744713479837"
        autoLoad={true}
        fields="name,email,picture"
        // onClick={componentClicked}
        callback={responseFacebook} />

 */}

      <ActionLink />

      <div className="mt20 relative flex justify-center">
        <img
          className="absolute"
          style={{ width: "57%", top: 30 }}
          src="./images/layer1.svg"
          alt="" />
        <img
          className="relative"
          style={{ width: "100%" }}
          src="./images/layer2.svg"
          alt="" />
        <img
          className="absolute"
          style={{ width: "50%", bottom: 0 }}
          src="./images/layer3.svg"
          alt="" />
      </div>

      <HowItWorks />

      <CalculateReturns />
      <div>
        <ActionLink />
        <div className="p20">
          <img
            className="fw"
            src="./images/home-oval.png" alt="" />
        </div>
      </div>
      <PassiveIncome />
      <ActionLink classes="left" />

      <ProtectYield />
      <ActionLink
        text="See how we use your funds."
        cta="Learn more about us"
        url="/our-story"
        classes="left" />



      <OurFeatures />
      <Secured />

      <RiskNotice />

      <Subscribe />


    </div>
  )
}



const RiskNotice = () => {
  return (
    <div className="mobile-container mt50 center-text mb50">
      <h2 className="f36 tb bolder mb20">
        Risk disclosure
      </h2>
      <div className="mb10">

        <img src="./images/Glob Financial/risk.svg" alt="" />
      </div>
      <p
        style={{ lineHeight: 1.5, color: "rgba(130,130,130,1)" }}
        className="f24">
        All investments involve risks, including the possible loss of capital, before deciding to invest, carefully and diligently consider your investment objectives.
      </p>
    </div>
  )
}

const ActionLink = ({ classes, cta, text, url }) => {
  return (
    <div className="container">
      <div className={classes} style={{ padding: "20px 0" }}>

        <Link href={url} >
          <a className="f16 br5 bg-brand-orange tw wrap" style={{ padding: "10px 25px" }}>
            {cta}
          </a>
        </Link>

      </div>

      <div className={`bolder tb ${classes} mt5 f18`}>
        {text}
      </div>
    </div>
  )
}

ActionLink.defaultProps = {
  classes: "center-text",
  cta: " Open An Account now",
  text: "Earn 10% more ROI",
  url: "/sign-up"
}

