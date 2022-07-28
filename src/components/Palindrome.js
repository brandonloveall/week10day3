import React, { useState } from "react"

function Palindrome(){
    const [userInput, changeUserInput] = useState("")
    const [palindrome, changePalindrome] = useState("")

    function solvePuzzle(input){
        let test = input.split("").reverse().join("")
        if(test === input){
            changePalindrome("true")
        }else{
            changePalindrome("false")
        }
    }

    return(
        <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input className="inputLine" onChange={(e) => changeUserInput(e.target.value)}></input>
            <button className="confirmationButton" onClick={() => solvePuzzle(userInput)}></button>
            <span className="resultsBox">{JSON.stringify(palindrome)}</span>
        </div>
    )
}

export default Palindrome