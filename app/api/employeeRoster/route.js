import { getEmployeesRoster } from "@/firebase/firebase.config";
import { NextResponse } from "next/server";
export async function GET() {
    const employees = await getEmployeesRoster();
    return NextResponse.json(employees);
}