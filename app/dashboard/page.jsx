import Tabla from "../components/tabla"
import { Navbar } from "../components/nav";
import { DataCard } from "../components/projectDataCard";
import { Breadcrumbs } from "../components/breadcrumbs";
export default function dashboard(){
  const data= [
    {"Client": "Name of the Client C", "Account Manager":"JonDoe@mail.com","# Active Employees":0 , "# Roll-Off Ack Pending":5 , "# Segregation of Duties":5 , "# Revoke Past Due":5, "actionID":5  },
    {"Client": "Name of the Client B", "Account Manager":"JonDoe@mail.com","# Active Employees":0 , "# Roll-Off Ack Pending":5 , "# Segregation of Duties":5 , "# Revoke Past Due":5 ,"actionID":5 },
    {"Client": "Name of the Client A", "Account Manager":"JonDoe@mail.com","# Active Employees":0 , "# Roll-Off Ack Pending":5, "# Segregation of Duties":5 , "# Revoke Past Due":5 ,"actionID":5  }
  ]
  const segregationOfDutiesCases =[{"ClientName" :"Name of the Client A","SoDCount": 10}, {"ClientName" :"Name of the Client B","SoDCount": 25},{"ClientName" :"Name of the Client A","SoDCount": 10}]
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