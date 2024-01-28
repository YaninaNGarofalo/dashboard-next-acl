import { Navbar } from "@/app/components/nav";
import { Breadcrumbs } from "@/app/components/breadcrumbs";
import Tabla from "@/app/components/tabla";
export default function client({ params }) {
const data = [
    {"Project #":123, "Project Name" :"C", "Project POC":"JonDoe@mail.com","Project Status":"Completed","# Active Employees":0 , "# Roll-Off Ack Pending":5 , "# Segregation of Duties":5 , "# Revoke Past Due":5,"actionID":123  },
    {"Project #":456, "Project Name" :"B", "Project POC":"JonDoe@mail.com","Project Status":"Completed", "# Active Employees":0 , "# Roll-Off Ack Pending":5 , "# Segregation of Duties":5 , "# Revoke Past Due":5, "actionID":456  },
    {"Project #":789, "Project Name" :"A", "Project POC":"JonDoe@mail.com","Project Status":"Completed","# Active Employees":0 , "# Roll-Off Ack Pending":5 , "# Segregation of Duties":5 , "# Revoke Past Due":5,"actionID":789   }
  ]
const clientData = {
  "ClientName":" Nombre de Cliente", 
  "ClientID":123,
  "AccountManager": "John Doe",
  "Created":"20 de enero de 2024, 6:21:28 p.m. UTC-3",
  "CreatedBy": "Admin", 
  "Modified":"20 de enero de 2024, 6:21:28 p.m. UTC-3",
  "ModifiedBy": "John Doe"

}
return (
    <>
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <Navbar></Navbar>

      <div style={{ height: 100 + "vh" }} className="p-4 sm:ml-64">        
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 ">
          <Breadcrumbs></Breadcrumbs>
          <div className="flex-col mb-4">
            <div className="flex-col items-center justify-center mb-4 rounded bg-gray-50 dark:bg-gray-800 p-4">
              
              <h4 className="flex justify-between items-center p-4 d-border-bottom-primary-3 text-2xl font-bold dark:text-white">
               <span className="w-4/5">Client Name </span> <button className="d-btn d-btn-primary">Edit Client</button>
              </h4>
              <div className="p-4">
                <div className=" border-t border-gray-100">
                  <dl className="divide-y divide-gray-100">
                    <div className="px-4 sm:px-0 ">
                      <dt className="summary text-sm font-medium leading-6 text-gray-900 dark:text-white">
                        Client Name
                      </dt>
                      <dd className="summary  mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
                        {clientData.ClientName}
                      </dd>
                    </div>
                    <div className=" px-4 sm:px-0">
                      <dt className="summary  text-sm font-medium leading-6 text-gray-900 dark:text-white">
                      Account Manager
                      </dt>
                      <dd className="summary  mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
                        {clientData.AccountManager} 
                      </dd>
                    </div>
                    <div className="px-4 sm:px-0">
                      <dt className="summary text-sm font-medium leading-6 text-gray-900 dark:text-white">
                        Created
                      </dt>
                      <dd className="summary mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
                      {clientData.Created} 
                      </dd>
                    </div>
                    <div className="px-4 sm:px-0">
                      <dt className="summary text-sm font-medium leading-6 text-gray-900 dark:text-white">
                      Created By
                      </dt>
                      <dd className="summary mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
                      {clientData.CreatedBy} 
                      </dd>
                    </div>
                    <div className="px-4 sm:px-0">
                      <dt className="summary text-sm font-medium leading-6 text-gray-900 dark:text-white">
                      Modified
                      </dt>
                      <dd className="summary mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
                      {clientData.Modified} 
                      </dd>
                    </div>
                    <div className="px-4 sm:px-0">
                      <dt className="summary text-sm font-medium leading-6 text-gray-900 dark:text-white">
                      Modified By
                      </dt>
                      <dd className="summary mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
                      {clientData.ModifiedBy} 
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <div className="col-span-3  flex-col items-center justify-center mb-4 rounded bg-gray-50 dark:bg-gray-800 p-4">
                <h4 className="p-4 text-2xl font-bold dark:text-white">
                    <span>Project Metrics</span>
                    <i className="bi bi-arrows-fullscreen"></i>
                </h4>
                <Tabla  data={data} actionName='Project Info' actionPath='../projects/'  />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
