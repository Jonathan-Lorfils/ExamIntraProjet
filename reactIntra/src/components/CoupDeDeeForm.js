import { render } from '@testing-library/react'
import React from 'react'
import { useState, useEffect } from 'react'
import Score from '../components/Score'
import CoupDeDeeTab from './CoupDeDeeTab'

const CoupDeDeeForm = () => {
    const [coupDeDee, setcoupDeDee] = useState({ nom: "", guessUser: "", guessRandom: "" })
    const [coupDeDeeScore, setcoupDeDeeScore] = useState({ nom: "", guessUser: "", guessRandom: "" })
    const [showScore, setshowScore] = useState()
    const [showTab, setshowTab] = useState()
    const min = 1
    const max = 5

    useEffect(() => {
        randomNumberGenerator()
    }, [])
  
    const addCoupDeDee = async (coupDeDee) => {
        const result = await fetch('http://localhost:2021/coupDeDee/add',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(coupDeDee)
            })
        return await result.json()
    }

    const randomNumberGenerator = () => {
        const rand = Math.floor(Math.random() * max) + min
        setcoupDeDee({ ...coupDeDee, guessRandom: '' + rand })
        return coupDeDee
    }

    const submit = () => {
        if (coupDeDee.guessNumber !== "" && coupDeDee.nom !== "") {
            addCoupDeDee(randomNumberGenerator())
            setcoupDeDeeScore(coupDeDee)
            setshowScore(true)
            setshowTab(true)
        } else {
            alert("Veuillez remplir le formulaire en entier")
        }
    }

    return (
        <div>
            <form>
                <div class="form-group">
                    <label for="InputNom">Nom :</label>
                    <input type="text" class="form-control" id="InputNom" placeholder="Entrer votre nom" onChange={(e) => setcoupDeDee({ ...coupDeDee, nom: e.target.value })} required />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Guess :</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Entrer votre guess" onChange={(e) => setcoupDeDee({ ...coupDeDee, guessUser: e.target.value })} required />
                </div>
                <button type="submit" class="btn btn-primary" onClick={e => { e.preventDefault(); submit(coupDeDee) }}>Envoyer</button>
            </form>
            {showScore ? <Score data={coupDeDeeScore} /> : ''}
        </div>
    )
}

export default CoupDeDeeForm
