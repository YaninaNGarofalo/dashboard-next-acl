import { getEmployeesACL, getEmployeesRoster } from "@/firebase/firebase.config";
import { NextResponse } from "next/server";
export async function GET() {
    const employees = await getEmployeesACL();
    return NextResponse.json(employees);
}