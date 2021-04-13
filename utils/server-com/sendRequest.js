import axios from 'axios'
import baseURL from '../../configs/baseURL'
const log = console.log


export default async function sendData(body = "", method, url = "") {
    const path = `${baseURL}/${url}`
    let resp;
    if (method === "get") {
        resp = await axios.get(path)
    } else {
        resp = await axios.post(path, body)
    }

    const data = resp.data
    log(data)
    return data

}