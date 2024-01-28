import { Navbar } from "../components/nav";
import { Breadcrumbs } from "../components/breadcrumbs";
import Tabla from "../components/tabla";
export default function clients(){
    const data= [
      {"Client": "Name of the Client C","Account Manager":"JonDoe@mail.com", "# Active Employees":0 , "# Roll-Off Ack Pending":5 , "# Segregation of Duties":5 , "# Revoke Past Due":5,"actionID":5 },
      {"Client": "Name of the Client B","Account Manager":"JonDoe@mail.com", "# Active Employees":0 , "# Roll-Off Ack Pending":5 , "# Segregation of Duties":5 , "# Revoke Past Due":5,"actionID":5},
      {"Client": "Name of the Client A","Account Manager":"JonDoe@mail.com", "# Active Employees":0 , "# Roll-Off Ack Pending":5 , "# Segregation of Duties":5 , "# Revoke Past Due":5,"actionID":5}
    ]
      return <>
          
  <button data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar" aria-controls="separator-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
     <span className="sr-only">Open sidebar</span>
     <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
     <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
     </svg>
  </button>
  
  <Navbar></Navbar>
  
  <div style={{height : 100 +"vh"}} className="p-4 sm:ml-64">
     <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 ">
        <Breadcrumbs></Breadcrumbs>
        {/* tabla de proyectos */}
        <div className="flex-col items-center justify-center mb-4 rounded bg-gray-50 dark:bg-gray-800 p-4">        
           <h4 className="p-4 text-2xl font-bold dark:text-white" ><span>Clients</span> <i className="bi bi-arrows-fullscreen" ></i></h4>
            <Tabla data={data} actionName='Client Projects' actionPath='clients/'  />
            <button className="d-btn d-btn-primary-2 mt-4">Add Client</button>
        </div>
     </div>
  </div>
  
      </>
}