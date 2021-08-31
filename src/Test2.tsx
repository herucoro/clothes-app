import axios from "axios";
import { url } from "inspector";
import { useState, useEffect, Fragment } from "react";

function Test2() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            const result = await axios.get('http://127.0.0.1:8000/order/?order_id=2')
            // .catch(error => {console.log(error);setData(error.data)})
            
            setData(result.data)
            console.log(result.data)
        }
        fetchData()
    }, [url])

    return (
        <Fragment>
            <div className="test2">
                <ul>
                    {data.map((item:any) => (
                        <li key={item.order_number}>
                            <p>{item.user_id}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    )
}

export default Test2