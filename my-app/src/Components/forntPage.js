import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap"

const GetCoins = () => {
    const [totalReactPackages, setTotalReactPackages] = useState()
    useEffect(() => {
        debugger
        // GET request using fetch inside useEffect React hook
        fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR',
            {
                method: "GET",
                headers: { 'Content-Type': 'application/json' },

            })
            .then(response =>(response.json())).then((data)=>
            setTotalReactPackages(data))

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    // Simple GET request using fetch
    // fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR')

console.log(totalReactPackages)
    return (
        
        <>
        
            <Table>
             {totalReactPackages?
                        <thead style={{ color: "cornflowerblue" }}>
                            <tr>
                                <th>JPY:{totalReactPackages.JPY}</th>
                                <th>USD:{totalReactPackages.USD}</th>
                                <th>EUR:{totalReactPackages.EUR}</th>


                            </tr>
                        </thead>:null
}

                    
            </Table>

        </>
    )

}

export default GetCoins;