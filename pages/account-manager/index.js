import Link from 'next/link'
import SentMessage from '../../components/SentMessage/SentMessage'

const AccountManager = () => {
    return (
        <div>
            <h1 className="bolder f20 tb v-shadow p10 mt20 bw">
                Bonus
            </h1>
            <div className="mt30" style={{ padding: '0 10px' }}>
                <Link href="/account-manager/new-message">
                    <a className="tw br5 bg-brand-orange bd-o f16 inline-block mb20"
                        style={{ padding: "11px 70px", }}>
                        New Message
                    </a>
                </Link>
            </div>
            <SentMessage />
            <SentMessage />

        </div>
    )
}

AccountManager.layout = "user"
export default AccountManager;

