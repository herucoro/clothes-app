import axios from "axios";
import { useState, useEffect, Fragment } from "react";

function Test() {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("https://jsonplaceholder.typicode.com/users/?id=1")
            setData(result.data)
        }
        fetchData()
    }, [])

    return (
        <Fragment>
            <div className="test">
                <ul>
                    {data.map((item:any) => (
                        <li key={item.id}>
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    )
}

export default Test