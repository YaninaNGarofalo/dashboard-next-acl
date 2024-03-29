import { Navbar } from "@/app/components/nav"
import { Breadcrumbs } from "@/app/components/breadcrumbs"
import Input from "@/app/components/input"
import Form from "@/app/components/form"
export default function AddProject(){
    return<>
    <div className="flex">  
    <Navbar></Navbar>  
    <div className="p-4 w-full h-screen">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 ">
         <Breadcrumbs></Breadcrumbs>
         {/* tabla de proyectos */}
         <div className="flex-col items-center justify-center mb-4 rounded bg-gray-50 dark:bg-gray-800 p-4">        
            <h4 className="p-4 text-2xl font-bold dark:text-white" ><span>Add a Project</span></h4>
            <div className="mt-4 flex-col ">
                  <Form formClass="w-full flex-col self-center">
                     <Input withLabel={true} type="text" placeholder="Client Name" name="clientName" id="clientName"  />
                     <Input withLabel={true}  type="text" placeholder="Project Name" name="projectName" id="projectName"  />
                     <Input withLabel={true}  type="text" placeholder="Project POC" name="projectPOC" id="projectPOC"  />
                     <Input withLabel={true}  type="text" placeholder="Project End Date" name="projectEndDt" id="projectEndDt"  />
                     <button type="button" className="d-btn d-btn-primary-2 mt-2 "> Add Project</button>
                  </Form>
            </div>
         </div>
      </div>
   </div>
  </div>
    </>
}