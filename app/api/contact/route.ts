import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function POST(req: Request){
    try {
        const {name, email, message} = await req.json();

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