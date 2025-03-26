"use client"
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

type Message = {
    _id: string;
    name: string;
    email: string;
    message: string;
};

export default function Messages() {
    const [messages, setMessages] = useState<Message[]>([])

    useEffect(() => {
        client.fetch(`*[_type == message] | order(_createdAt desc)`).then(setMessages), []});
    
    return (
        <div className="p-6 bg-gray-800 text-white rounded-lg">
            <h2 className="text-xl mb-4">Messages</h2>
            {messages.length === 0 && <p>No Messages yet.</p>}
            {messages.map(msg => (
                <div key={msg._id} className="p-3 border-b border-gray-600">
                    <p><strong>{msg.name}</strong> ({msg.email})</p>
                    <p>{msg.message}</p>
                </div>
            ))}
        </div>
    );
}