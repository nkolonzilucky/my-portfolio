import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import { VERIFY_DUPLICATE_USER_SUBMISSIONS } from "@/sanity/lib/queries";
import { Message } from "@/app/components/Messages";

type User = {
    name: string,
    email: string
}

async function getAlreadySubmittedUsers(name: string, email: string) {
    const users:User[] = await client.fetch(VERIFY_DUPLICATE_USER_SUBMISSIONS);
     if(users.includes({name, email})) {
        return false;
     }
    return true;
}

export async function POST(req: Request){
    try {
        const {name, email, message} = await req.json();
        
        // Step 2: Check if a message from this email already exists
        const existingMessages:Message[] = await client.fetch(
            `*[_type == "message" && email == $email]`,{ email });
            
        
            if(existingMessages.length > 0 ) {
            return NextResponse.json({error: "You have already sent Lucky a message., Please wait for a response before you can send another message."}, {status: 400})
        }
    
        await client.create({
            _type: "message",
            name,
            email, 
            message,
            createdAt: new Date().toISOString(),
        });

        return NextResponse.json({success: true});

    } catch (error) {
        console.log("Error saving message: ", error);
        return NextResponse.json({error: "Could not save message"}, {status: 500});
    }
}