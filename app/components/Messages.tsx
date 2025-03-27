import { client } from "@/sanity/lib/client";
import { MESSAGE_QUERY } from "@/sanity/lib/queries";

type Message = {
    _id: string;
    name: string;
    email: string;
    message: string;
};

async function getMessages():Promise<Message[]> {
    const messages = client.fetch(MESSAGE_QUERY);
    return messages;
}


export default async function Messages() {
    const messages: Message[] = await getMessages();
    
    
    return (
        <div className="p-6 bg-gray-800 text-white rounded-lg mt-8">
            <h2 className="text-xl mb-4">Messages</h2>
            {messages.length === 0 && <p>No Messages yet.</p>}
            {messages.filter((msg) => {
                return msg.email.length > 0 && msg.name.length > 0 && msg.message.length > 0}).map(msg => (
                
                <div key={msg._id} className="p-3 border-b border-gray-600">
                    <p><strong>{msg.name}</strong> ({msg.email})</p>
                    <p>{msg.message}</p>
                </div>
            ))}
        </div>
    );
}