import { db } from "@/db";
import { contact } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, website, description } = body
        await db.insert(contact).values({
            id: uuidv4(),
            name,
            email,
            website,
            description,
            createdAt: new Date()
        })
        return NextResponse.json({ message: "Contact Submiitted Sucessfully" }, { status: 201 })
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
    }
}