import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap"



function getEndpoint(path) {
    // return ...; // finish implementing this
}


const Alerts = () => {

    const [alerts, setAlerts] = useState([])


    
    useEffect(() => {
        function getAlerts() {
            fetch(getEndpoint('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR'),
                {
                    method: "GET",
                    headers: { 'Content-Type': 'application/json' },

                })

                .then(result => result.json())
                .then(result => setAlerts(result))
        }
        getAlerts()
        const interval = setInterval(() => getAlerts(), 10000)
        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <>
 <Table>
             {alerts?
                        <thead style={{ color: "cornflowerblue" }}>
                            <tr>
                                <th>JPY:{alerts.JPY}</th>
                                <th>USD:{alerts.USD}</th>
                                <th>EUR:{alerts.EUR}</th>


                            </tr>
                        </thead>:null
}

                    
            </Table>



            {/* <ListAlerts alerts={alerts} /> */}
        </>
    )
}

export default Alerts;