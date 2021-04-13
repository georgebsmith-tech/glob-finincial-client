import Link from 'next/link'
export default function ConvertPoint() {
    return (
        <div className="v-shadow mt20" style={{ padding: '30px 15px' }}>
            <div className="mb20 center-text">
                <h3 className="mb15 f20">Convert Point</h3>
                <h3 className="f20 mb5 normal" style={{ color: '#8BBD43' }}>I want to convert</h3>
                <input
                    placeholder="Input Point"
                    className="br5 f16 bold fw"
                    style={{
                        padding: "17px",
                        border: '1px solid #707070'
                    }}
                />
            </div>
            <div className="mb20 center-text">
                <p className="f18 bold mb10">Cash equivalent</p>
                <h3 className="f28">$_ _</h3>

            </div>
            <Link href="/account-manager">
                <a className="tw br5 bg-brand-orange bd-o block f16 center-text"
                    style={{ padding: "11px", margin: '0 15% ', width: '70%' }}>
                    Convert Point
                </a>
            </Link>
        </div>
    )
}