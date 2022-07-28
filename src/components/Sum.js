import React, {useState} from "react"

function Sum(){
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)
    const [sum, setSum] = useState(null)

    function getSum(){
        setSum(+number1 + +number2)
    }

    return(
        <div className="puzzleBox sumPB">
            <h4>Sum</h4>
            <input className="inputLine" type="number" onChange={(e) => {setNumber1(e.target.value)}}></input>
            <input className="inputLine" type="number" onChange={(e) => {setNumber2(e.target.value)}}></input>
            <button className="confirmationButton" onClick={getSum}></button>
            <span className="resultsBox">{JSON.stringify(sum)}</span>
        </div>
    )
}

export default Sum