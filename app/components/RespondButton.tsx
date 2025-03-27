"use client"

import { useState } from "react"


function handleRespond(id:string){
    console.log("Hello Button: ", id)
    const responseField = document.getElementById(`responseField+${id}`);
    responseField?.toggleAttribute("hidden")
    
}

export default function RespondButton(id:string) {
    return(
        <button onClick={() => handleRespond(id)} className="bg-blue-500 m-2 rounded-md hover:bg-blue-400 px-6 py-2">Respond</button>
        
    )
}