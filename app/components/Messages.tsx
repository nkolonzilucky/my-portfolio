import { client } from "@/sanity/lib/client";
import { MESSAGE_QUERY } from "@/sanity/lib/queries";

export type Message = {
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
        <div className="p-6 bg-gray-800 text-white rounded-lg mt-8 w-4xl">
            <h2 className="text-xl mb-4 font-bold text-center">Messages</h2>
            {messages.length === 0 && <p>No Messages yet.</p>}
            {messages.filter((msg) => {
                return msg.email.length > 0 && msg.name.length > 0 && msg.message.length > 0}).map(msg => (
                <div className="flex justify-between items-center border-b border-gray-400">

                <div key={msg._id} className="p-3  border-gray-600">
                    <p className="text-gray-300 text-2xl">{msg.message}</p>
                    <p>
                        <span className="text-gray-500">from: </span>
                        <span className="text-sm">{msg.name}</span>
                        <span className="text-gray-400 ml-1 text-sm">({msg.email})</span>
                    </p>
                </div>
                <button className="bg-blue-500 m-2 rounded-md hover:bg-blue-400 px-6 py-2">Respond</button>
                </div>
            ))}
        </div>
    );
}