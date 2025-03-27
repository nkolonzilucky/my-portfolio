"use client"

import { useState } from "react"


function handleRespond(){
    console.log("Hello Button: ")
    
}

export default function RespondButton() {
    return(
        <button onClick={() => handleRespond()} className="bg-blue-500 m-2 rounded-md hover:bg-blue-400 px-6 py-2">Respond</button>
        
    )
}