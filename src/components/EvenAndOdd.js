import React, {useState} from "react"

function EvenAndOdd(){
const [evenArray, setEvenArray] = useState([])
const [oddArray, setOddArray] = useState([])
const [userInput, setInput] = useState("")

function solveArray(array){
    let even = []
    let odd = []
    let string = userInput.split(",")
    for (let num of string){
        if(num % 2 === 0){
            even.push(num)
        }else{
            odd.push(num)
        }
    }
    setEvenArray(even)
    setOddArray(odd)
}

    return(
        <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input className="inputLine" onChange={(event) => setInput(event.target.value)}></input>
            <button className="confirmationButton" onClick={solveArray}>Run</button>
            <span className="resultsBox">Evens: {JSON.stringify(evenArray)}</span>
            <span className="resultsBox"> Odds: {JSON.stringify(oddArray)}</span>
        </div>
    )
}

export default EvenAndOdd