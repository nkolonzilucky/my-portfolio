"use client"
import React, { useState } from "react";




export default function ResponseForm(){
    const [formData, setFormData] = useState({
        response: '',
        message: '',
        customer_email: '',
        
    })
    
    function handleSubmit() {
    }
    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>){
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    return (
        <form onSubmit={handleSubmit} className=" mt-4 flex justify-between items-center gap-4">
            <textarea className="w-2xl p-2 bg-gray-700" value={formData.response} name="response" placeholder="Enter a response" onChange={handleChange} /> 
            <button className="border px-11 py-2 rounded-md hover:bg-blue-400" type="submit" >Post</button>
        </form>
    );
}