import React from 'react'
import { useState, useEffect } from 'react'

const Score = (data) => {
    const [reussi, setReussi] = useState()
    const coupDeDee = data.data

    useEffect(() => {
        verifierScore()
    }, [coupDeDee.guessRandom])

    const verifierScore = () => {
        if(coupDeDee.guessRandom === coupDeDee.guessUser){
            setReussi(true)
        } else {
            setReussi(false)
        }
    }
    
    return (
        <div>
            <h1>{coupDeDee.guessRandom}</h1>
            {reussi ? <h1>Reussi</h1> : <h1>Manque</h1>}
            
        </div>
    )
}

export default Score
