import React, { useState } from "react"

function FilterObject(){
    const [unfilteredArray, changeUnfilteredArray] = useState([{color: "brown", shape:"circle"}, {betterColor: "white", shape:"square"}])
    const [userInput, changeInput] = useState("")
    const [filteredArray, changeFilteredArray] = useState([])

    function solveArray(){
        let answer = unfilteredArray.filter((e) => {
            if (e.hasOwnProperty(userInput)){
                return true
            }else{
                return false
            }
        })
        changeFilteredArray(answer)
    }

    return(
        <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzleText">{JSON.stringify(unfilteredArray)}</span>
            <input className="inputLine" onChange={(e) => changeInput(e.target.value)}></input>
            <button className="confirmationButton" onClick={solveArray}>Filter</button>
            <span className="resultsBox filterObjectRB">{JSON.stringify(filteredArray)}</span>
        </div>
    )
}

export default FilterObject