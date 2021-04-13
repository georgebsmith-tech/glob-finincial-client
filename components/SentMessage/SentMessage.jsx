const SentMessage = () => {
    return (
        <div className="" style={{ padding: '0 10px' }}>
            <div style={{ backgroundColor: '#8BBD4380', marginBottom: '10px' }} className="flex p10 align-center bd5">
                <div className="mb10 mr20" style={{ width: 70 }}>
                    <img
                        style={{ width: "100%" }}
                        src="./images/home-client.png" alt="" />
                </div>
                <div style={{ alignItems: 'top' }}>
                    <h3 className="tb f18 mb5" style={{ padding: '0 10px' }}>Account Manager</h3>
                    <p className="f16 bolder">New messages</p>
                </div>
            </div>
        </div>
    )
}
export default SentMessage