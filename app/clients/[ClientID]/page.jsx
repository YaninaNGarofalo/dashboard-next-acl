import { Navbar } from "@/app/components/nav";
import { Breadcrumbs } from "@/app/components/breadcrumbs";
import Tabla from "@/app/components/tabla";
import Summary from "@/app/components/summarydetails";
export default function client({ params }) {
const data = [
    {"Project #":123, "Project Name" :"C", "Project POC":"JonDoe@mail.com","Project Status":"Completed","# Active Employees":0 , "# Roll-Off Ack Pending":5 , "# Segregation of Duties":5 , "# Revoke Past Due":5,"actionID":123  },
    {"Project #":456, "Project Name" :"B", "Project POC":"JonDoe@mail.com","Project Status":"Completed", "# Active Employees":0 , "# Roll-Off Ack Pending":5 , "# Segregation of Duties":5 , "# Revoke Past Due":5, "actionID":456  },
    {"Project #":789, "Project Name" :"A", "Project POC":"JonDoe@mail.com","Project Status":"Completed","# Active Employees":0 , "# Roll-Off Ack Pending":5 , "# Segregation of Duties":5 , "# Revoke Past Due":5,"actionID":789   }
  ]
const clientData = {
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
              <Summary title={clientData["Client Name"]} summaryObj={clientData} />
            </div>
            <div className="col-span-3  flex-col items-center justify-center mb-4 rounded bg-gray-50 dark:bg-gray-800 p-4">
                <h4 className="p-4 text-2xl font-bold dark:text-white">
                    <span>Client Projects</span>
                    <i className="bi bi-arrows-fullscreen"></i>
                </h4>
                <Tabla  data={data} actionName='Project Info' actionPath='../projects/'  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
