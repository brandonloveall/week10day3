import React, { useState } from "react"

function FilterString(){
    const [unfilteredArray, changeUnfilteredArray] = useState(["hi", "hello", "morning"])
    const [userInput, changeUserInput] = useState("")
    const [filteredArray, changeFilteredArray] = useState([])

    function filterArray(){
        let results = unfilteredArray.filter((e => {
            if (e === userInput){
                return true
            }else{
                return false
            }
        }))
        changeFilteredArray(results)
    }

    return(

        <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzleText">Names: {JSON.stringify(unfilteredArray)}</span>
            <input className="inputLine" onChange={(e) => changeUserInput(e.target.value)}></input>
            <button className="confirmationButton" onClick={filterArray}></button>
            <span className="resultsBox filterStringRB">{JSON.stringify(filteredArray)}</span>
        </div>
    )
}

export default FilterString