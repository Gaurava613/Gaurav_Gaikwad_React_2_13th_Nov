
import { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


export function TableData() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
            .then(response => {
                console.log(response.data);
                setUsers(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <tbody>
            {
                users.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td><img src={item.image} alt="Item" style={{ maxWidth: '40px' }} /></td>
                            <td>{item.name}</td>
                            <td>{item.id}</td>
                            <td>{item.symbol.toUpperCase()}</td>
                            <td>{item.current_price}</td>
                            <td>{item.total_volume}</td>
                            <td>{item.market_cap_change_percentage_24h}</td>
                            <td>{item.high_24h}</td>
                            <td>{item.low_24h}</td>
                        

                        </tr>
                    )
                })
            }
        </tbody>
    )
}

export default TableData;