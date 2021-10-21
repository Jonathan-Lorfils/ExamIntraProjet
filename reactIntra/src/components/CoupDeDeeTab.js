import React from 'react'
import { useState, useEffect } from 'react'

const CoupDeDeeTab = () => {
    const [coupDeDees, setcoupDeDees] = useState([])


    useEffect(() => {
        const getCoupDeDees = async () => {
            const coupDeDeesFromServer = await fetchCoupDeDees()
            setcoupDeDees(coupDeDeesFromServer)
        }
        getCoupDeDees()
    }, [])

    const fetchCoupDeDees = async () => {
        const res = await fetch(`http://localhost:2021/coupDeDee/get-all-coupDeDee`)
        return await res.json()
    }

    return (
        <div>
            <tbody>
                    <table >
                    <tr>
                        <th>Nom</th>
                        <th>Guess User</th>
                        <th>Guess Ordi</th>
                    </tr>
                    {coupDeDees.map((coupDeDee) => (
                    <tr  key={coupDeDee.id}>
                        <th>{coupDeDee.nom}</th>
                        <th>{coupDeDee.guessUser}</th>
                        <th>{coupDeDee.guessRandom}</th>
                    </tr>
                    ))}
                </table>
            </tbody>
           
        </div>
    )
}

export default CoupDeDeeTab
