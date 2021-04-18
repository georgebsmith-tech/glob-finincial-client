export default (req, res) => {
    if (req.method === "POST") {
        return res.status(200).json({ message: "Subscribed" })
    }
    return res.status(401).json({ error: 'unauthorized!!' })
}
