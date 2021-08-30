import React, {useState, useEffect, Fragment} from "react";
import axios from "axios";
import { MyInterface } from "./interfaces";

function Clothes() {
    const [data, setData] = useState([])
    const [query, setQuery] = useState("1")
    const [url, setUrl] = useState('http://127.0.0.1:8001/order/')

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(url)
            setData(result.data)
        }
        fetchData()
    }, [url])

    return (
        <Fragment>
            <form onSubmit={event => {
                setUrl(`http://127.0.0.1:8001/order/${query}`);
                event.preventDefault();
            }}>
            
                <input type="text" value={query} onChange={event => setQuery(event.target.value)} />
                <button type="submit">Search</button>
            </form>
            <div className="clothes">
                <ul>
                    {data.map((item:MyInterface) => (
                        <li key={item.order_number}>
                            <p>{item.user_id} {item.delivary_date}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    )
}

export default Clothes