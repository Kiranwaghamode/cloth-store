import axios from "axios"
import { useEffect, useState } from "react"

const useFetch =  (url) =>{

    const [data, setdata] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        ;(async()=>{
            try {
                const res = await axios.get(`http://localhost:1337/api${url}`);
                setdata(res.data.data);
            } catch (error) {
                setError(true);
            }
        })()
    }, [url])
    
    return { data, error}

}


export default useFetch;