import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";
import { dblink } from "@/backend/dbCon/connect";

export async function GET(request) {
    try {
        console.log("Request Headers:", Object.fromEntries(request.headers.entries()));

        const authHeader = request.headers.get('Authorization');

        console.log(authHeader,"this is authHEader");
        

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return NextResponse.json({ error: "Token not found or invalid format" }, { status: 401 });
        }
        const token = authHeader.replace('Bearer ', '');

        // Verify the token
        const secretKey = process.env.NEXT_APP_SECRET_TOKEN;
        const decoded = verify(token, secretKey);

        // Fetch user data from database
        const userId = decoded.userId; // Adjust based on your token structure
        const user = await dblink.collection("users").findOne({ _id: userId });
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Return user data
        return NextResponse.json({ data: user }, { status: 200 });
    } catch (error) {
        console.error("Error:", error.message);
        return NextResponse.json({ error: "Invalid or expired token" }, { status: 403 });
    }
}
