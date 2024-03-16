import { NextResponse } from "next/server";
import {getClientMetrics} from "@/firebase/firebase.config";
export async function GET(request) {
    const clientMetrics = await getClientMetrics();   
    const metricsSOD = clientMetrics.filter(obj=>obj['Account Manager'] == 'Admin').map(
       (data)=>{
            let tempObj ={      
                    Name : data.Name,
                    'SoD Count':data['SoD Count'], 
            }          
            return tempObj
        }        
    )
    console.log(metricsSOD)
    return NextResponse.json(metricsSOD);
}