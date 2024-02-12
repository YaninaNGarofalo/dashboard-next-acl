import { getClients, addClient, updateClient, deleteClient } from "@/firebase/firebase.config";
import { NextResponse } from "next/server";

export async function GET() {
    const clients = await getClients();
    return NextResponse.json(clients);
}
export async function POST(request) {
    const body = await request.json();  
    console.log(body, 'POST body')

    addClient(body)
    // revalidateTag("clients");  
    return NextResponse.json("Added");
}
export async function PUT(request) {
    const body = await request.json();  
    console.log(body)
    // revalidateTag("clients");  
    return NextResponse.json("Added");
}
export async function DELETE(request) {
    const body = await request.json();  
    // await deleteClient(body.id);  
    // revalidateTag("clients");  
    return NextResponse.json("Deleted");
}