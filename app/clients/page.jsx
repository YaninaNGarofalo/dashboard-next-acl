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