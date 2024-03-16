import Tabla from "../components/tabla"
import { Navbar } from "../components/nav";
import { DataCard } from "../components/projectDataCard";
import { headers } from "next/headers";
import { Breadcrumbs } from "../components/breadcrumbs";
const getClients = async ()=>{
   const res = await fetch('http://localhost:3000/api/client', {
      method: "GET",
      headers: headers(),
      next: { tags: ["clients"] },
    }).then(response => response.json())
    return  res;
}
const getClientsMetrics = async ()=>{
   const res = await fetch('http://localhost:3000/api/metrics', {
      method: "GET",
      headers: headers()
    }).then(response => response.json())
    return  res;
}
export default async function dashboard(){
   const clients = await getClients();
  const data= clients
  const clientsMetrics = await getClientsMetrics()
  const segregationOfDutiesCases = clientsMetrics
    return <div className="flex">
      <Navbar></Navbar>
      <div className="p-4 w-full h-screen">
         <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 ">
            <Breadcrumbs></Breadcrumbs>
            <div className="grid grid-cols-3 gap-4 mb-4">
               <div className="flex-col items-center justify-center rounded bg-white dark:bg-gray-800 p-4">
               <h4 className="p-4 text-2xl font-bold dark:text-white" >Segregation of Duties Cases</h4>
                  <DataCard data={segregationOfDutiesCases}></DataCard>
               </div>
               <div className="flex-col items-center justify-center rounded bg-white dark:bg-gray-800 p-4">
               <h4 className="p-4 text-2xl font-bold dark:text-white" >Revocation Past Due Cases</h4>
                  <DataCard data={segregationOfDutiesCases}></DataCard>
               </div>
               <div className="flex-col items-center justify-center rounded bg-white dark:bg-gray-800 p-4">
               <h4 className="p-4 text-2xl font-bold dark:text-white" >Roll-Off Acknowledgment Pending</h4>
                  <DataCard data={segregationOfDutiesCases}></DataCard>
               </div>
            </div>
            {/* tabla de proyectos */}
            <div className="flex-col items-center justify-center mb-4 rounded bg-gray-50 dark:bg-gray-800 p-4">        
               <h4 className="p-4 text-2xl font-bold dark:text-white" ><span>High Risk Projects</span> <i className="bi bi-arrows-fullscreen" ></i></h4>
               <Tabla data={data} actionName='Client Projects' actionPath='clients/' />
            </div>
         </div>
      </div>
    </div>
}