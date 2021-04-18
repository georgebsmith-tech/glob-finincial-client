import { useState } from 'react'
import baseURL from '../../configs/baseURL'
// import axios from 'axios'
import axios from 'axios'

const log = console.log
const Subscribe = () => {
    const [credientials, setCredientials] = useState({ email: "" })
    const [isSubmit, setIsSubmit] = useState(false)
    const [buttonText, setButtonText] = useState('Subscribe Now')
    // const [submitMsg, setSubmitMsg]=useState('')

    const sub = async (credientials) => {
        try {
            const response = await axios.post(`${baseURL}/newsletter`, credientials)
            // console.log({response})
            const data = response.data
            // log(data)
            setButtonText('Subscribed')
        } catch (error) {
            // console.log('error j2jb2u2u2rjfnrwjfrnfwnfnwfjfnfff')
            console.log(error.response.data)
            if (error.response.data == "Already Subscribed") {
                setCredientials({ ...credientials, email: '' })
            }
            setTimeout(() => {
                setButtonText(error.response.data)
                setTimeout(() => {
                    setIsSubmit(false)
                    setButtonText('Subscribe Now')
                }, 4000);
            }, 3000);
        }
        // log({setSubmitMsg})
    }
    const handleSub = () => {
        // console.log('rghhe')
        setIsSubmit(true)
        // setSubmitMsg('')
        setButtonText('Subscribing..')
        // console.log({credientials})
        // log(credientials)
        sub(credientials)
    }
    return (
        <div className="center-text container mb70" style={{ position: 'relative' }}>
            <h2 className="f23 bolder tb">
                Subscribe now to get our weekly financial newsletters. !

            </h2>
            <div className="f14 mt20">
                You get the best financial content every week.
            </div>
            <div className="mt20">
                {!isSubmit ? (
                    <div>

                        <input
                            onChange={(e) => setCredientials({ ...credientials, email: e.target.value })}
                            value={credientials.email}
                            style={{ padding: "18px 25px", width: '100%' }}
                            className="f16"
                            type="email" placeholder="Enter Email Address" />

                    </div>) : (
                    null
                )
                }


                <div className="mt20">
                    <button
                        disabled={isSubmit}
                        onClick={handleSub}
                        style={{
                            padding: "17.5px 70px",
                            borderRadius: "0px 10px 10px 0",
                            boxShadow: "1px 10px 30px rgba(245, 56, 56, 0.35)"

                        }}
                        className="f16 tw bold bg-brand-orange bd-o">
                        {buttonText}
                    </button>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}


export default Subscribe;