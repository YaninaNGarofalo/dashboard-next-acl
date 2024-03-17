import { Navbar } from "@/app/components/nav";
import { Breadcrumbs } from "@/app/components/breadcrumbs";
import Tabla from "@/app/components/tabla";
import Summary from "@/app/components/summarydetails";
import { headers } from "next/headers";
const getProjects = async ()=>{
  const res = await fetch('http://localhost:3000/api/project', {
     method: "GET",
     headers: headers(),
     next: { tags: ["projects"] },
   }).then(response => response.json())
   return  res;
}

const getClients = async ()=>{
  const res = await fetch('http://localhost:3000/api/client', {
     method: "GET",
     headers: headers(),
     next: { tags: ["clients"] },
   }).then(response => response.json())
   return  res;
}

export default async function client({ params }) {
// const data = (params.ClientID)? (await getProjects()).find(x=>x['Client_ID'] == params.ClientID) : undefined
const mockdata = await getProjects()
const clientData =(params.ClientID)? (await getClients()).find(x=>x.id == params.ClientID) : undefined
const clientMockData = {
  "Client Name":" Nombre de Cliente", 
  "Client ID":123,
  "Account Manager": "John Doe",
  "Created":"20 de enero de 2024, 6:21:28 p.m. UTC-3",
  "Created By": "Admin", 
  "Modified":"20 de enero de 2024, 6:21:28 p.m. UTC-3",
  "Modified By": "John Doe"

}
return (
    <div className="flex">
      <Navbar></Navbar>
      <div className="p-4 w-full h-screen">        
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 ">
          <Breadcrumbs></Breadcrumbs>
          <div className="flex-col mb-4">
            <div className="flex-col items-center justify-center mb-4 rounded bg-gray-50 dark:bg-gray-800 p-4">
              <Summary title={clientData?.Name ? clientData.Name : clientMockData["Client Name"]} summaryObj={clientData ? clientData: clientMockData} />
            </div>
            <div className="col-span-3  flex-col items-center justify-center mb-4 rounded bg-gray-50 dark:bg-gray-800 p-4">
                <h4 className="p-4 text-2xl font-bold dark:text-white">
                    <span>Client Projects</span>
                    <i className="bi bi-arrows-fullscreen"></i>
                </h4>
                <Tabla  data={mockdata} actionName='Project Info' actionPath='../projects/'  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
