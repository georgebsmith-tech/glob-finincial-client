import CreditCard from '../components/CreditCard/CreditCard'
import CashBalance from '../components/CashBalance/CashBalance'
import ConvertPoint from '../components/ConvertPoint/ConvertPoint'

export default function Card() {

    return (
        <div>
            <div
                className="v-shadow p10 mt20" style={{}}>
                <h3 className="f23 mb10">
                    Cards
                </h3>
            </div>
            <div className="center-text v-shadow mt20" style={{ padding: '20px' }}>
                <div className="mb20">
                    <p className="mb5 f14 normal">Wealth Point(WP)</p>
                    <h3 className="f20 tb">1000</h3>
                </div>

                <div style={{ padding: 15 }}>
                    <h3 className="f18 normal tb">
                        <u className="text-brand-orange">Converts</u> Points to cash and use it on your card for spending.
                    </h3>
                </div>
            </div>
            <ConvertPoint />
            <CreditCard />
            <CashBalance />
        </div>


    )
}

Card.layout = "user"

