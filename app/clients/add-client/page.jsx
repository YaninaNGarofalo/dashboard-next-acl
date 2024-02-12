import { Navbar } from "@/app/components/nav"
import { Breadcrumbs } from "@/app/components/breadcrumbs"
import Input from "@/app/components/input"
import Form from "@/app/components/form"
import { getClients, getUsers } from "@/firebase/firebase.config"

const addNewClient = async (data) => {
   "use server";
   const today = new Date() //).toUTCString()
   const newClient = {
      Name : data?.clientName? data.clientName : '', 
      'Account Manager' : data?.accountManager? data?.accountManager : '',
      'Created': today?today:'',
      'Created By':'',
      'Modified': today?today:'',
      'Modified By':'',
      'Revoke Past Due Count':0,
      'RollOff Ack Pending Count':0,
      'SoD Count':0
   }
   // const existingClient = clients.find(c=>c.Name==newClient.Name)   

   // if(existingClient || newClient.Name =='' || newClient == undefined){
   //    return console.log('not new client')
   // }else{
      const res = await fetch('http://localhost:3000/api/client', {
         method: "POST",
         body: JSON.stringify(newClient),
      });
      console.log(res)
      if (!res.ok) throw new Error("Error adding client");
   // }
};


//  const submitClient = async (data) => {
//    "use server";
//    console.log('submit client data',data)
//    const today = (new Date()).getDate()
//    console.log('submit client tody',today)
//    const newClient = {
//       Name : data?.clientName? data.clientName : '', 
//       'Account Manager' : data?.accountManager? data.accountManager: '',
//       'Created': today?today:'',
//       'Created By':'',
//       'Modified': today?today:'',
//       'Modified By':'',
//       'Revoke Past Due Count':0,
//       'RollOff Ack Pending Count':0,
//       'SoD Count':0
//    }
//    console.log('submit client new client',newClient)
//    await addClient(newClient); 
   
//     return newClient;
//  };
 
export default function  AddClient(){
    return <div className="flex">  
      <Navbar></Navbar>  
      <div className="p-4 w-full h-screen">
         <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 ">
            <Breadcrumbs></Breadcrumbs>
            {/* tabla de proyectos */}
            <div className="flex-col items-center justify-center mb-4 rounded bg-gray-50 dark:bg-gray-800 p-4">        
               <h4 className="p-4 text-2xl font-bold dark:text-white" ><span>Add a Client</span></h4>
               <div className="mt-4 flex-col ">
                     <Form formClass="w-full flex-col self-center" submitAction={addNewClient}  val={"Add Client"}>
                        <Input withLabel={true}  type="text" placeholder="Client Name" name="clientName" id="clientName"  />
                        <Input withLabel={true}  type="text" placeholder="Account Manager" name="accountManager" id="accountManager"  />
                     </Form>
               </div>
            </div>
         </div>
      </div>
  </div>
}