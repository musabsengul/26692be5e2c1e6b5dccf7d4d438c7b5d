import {useEffect, useState} from 'react'
import $axios from "../plugins/axios";


export default ({url = "", responseSrc = null}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (url) {
            getData()
        }
    }, [url])
    const getData = () => {
        setLoading(true)
        $axios.get(url)
            .then(response => {
                responseSrc ? setData(response[responseSrc]) : setData(response)
            })
            .catch(error => console.error(error))
            .finally(() => {
                setLoading(false)
            })
    }
    const refresh = () => {
        getData()
    }
    return {data, loading, refresh}
}
