import { Navbar } from "@/app/components/nav";
import { Breadcrumbs } from "@/app/components/breadcrumbs";
import { MetricCard } from "@/app/components/metricsCard";
import Tabla from "@/app/components/tabla";
import Summary from "@/app/components/summarydetails";
import Tabs from "@/app/components/tabs";

export default function project(){
const testDate= new Date().toDateString();
const segregationOfDutiesCases =[{"text" :"High Risk","SoDCount": 10,"risk":3}]
const rollOnAckPendingCases =[{"text" :"Low Risk","rollOnAckPending": 2}]
const rollOffAckPendingCases =[{"text" :" High Risk","rollOnAckPending": 15,"risk":3}]
const revocationCases =[{"text" :"Medium Risk","Revocation Past Due": 40,"risk":2}]
const rollOnRollOffData = [
    {"Employee_ID":123, "Name":"John", "Last Name": "Doe", "Roll-On Date":testDate ,"Roll-Off Date": testDate ,
   "Roll-On Ack Date": testDate,"Roll-Off Ack Date": testDate ,"Initial Training Date":testDate  },
   {"Employee_ID":123, "Name":"John", "Last Name": "Doe", "Roll-On Date": testDate ,"Roll-Off Date": testDate ,
   "Roll-On Ack Date": testDate ,"Roll-Off Ack Date": testDate ,"Initial Training Date":testDate  },
   {"Employee_ID":123, "Name":"John", "Last Name": "Doe", "Roll-On Date": testDate ,"Roll-Off Date": testDate ,
   "Roll-On Ack Date": testDate ,"Roll-Off Ack Date": testDate ,"Initial Training Date":testDate  }
  ]
  const aclData = [
    {"Employee_ID":123, "Name":"John", "Last Name": "Doe", "Roll-Off Date": testDate ,"Roll-Off Ack Date": testDate , "Prod Access":"Yes", "Non-Prod Access":"No", "SoD":"No","Access Revoke Dt":"No" },
    {"Employee_ID":123, "Name":"John", "Last Name": "Doe", "Roll-Off Date": testDate ,"Roll-Off Ack Date": testDate , "Prod Access":"Yes", "Non-Prod Access":"No", "SoD":"No","Access Revoke Dt":"No" },
    {"Employee_ID":123, "Name":"John", "Last Name": "Doe", "Roll-Off Date": testDate ,"Roll-Off Ack Date": testDate , "Prod Access":"Yes", "Non-Prod Access":"No", "SoD":"No","Access Revoke Dt":"No" },
    {"Employee_ID":123, "Name":"John", "Last Name": "Doe", "Roll-Off Date":testDate  ,"Roll-Off Ack Date": testDate , "Prod Access":"Yes", "Non-Prod Access":"No", "SoD":"No","Access Revoke Dt":"No" } ]
const projectData = {
    "Project ID":123,
    "Project Name":"Nombre de Proyecto",
    "Client Name":"Nombre de Cliente",     
    "Project POC": "John Doe",
    "Project End Date":"20 de enero de 2026, 6:21:28 p.m. UTC-3",
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
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="col-span-4  flex-col items-center justify-center mb-4 rounded bg-gray-50 dark:bg-gray-800 p-4">
              <Summary title={projectData["Project Name"]} summaryObj={projectData} />
            </div>
            <div className="col-span-4  flex-col items-center justify-center mb-4 rounded bg-gray-50 dark:bg-gray-800 p-4">
                <h4 className="p-4 text-2xl font-bold dark:text-white">
                    <span>Metrics</span>
                    <i className="bi bi-arrows-fullscreen"></i>
                </h4>
              <div className="flex w-full justify-center pb-4">
                <MetricCard title="Segregation Of Duties" data={segregationOfDutiesCases}></MetricCard>
                <MetricCard title="Revocation Past Due"  data={revocationCases}></MetricCard>
                <MetricCard title="Pending Roll-On Ack" data={rollOnAckPendingCases}></MetricCard>
                <MetricCard title="Pending Roll-Off Ack" data={rollOffAckPendingCases}></MetricCard>
              </div>
                <Tabs tabs={[{name:'Roll-On / Roll-Off', show:true},{name:'Access Control Log', show:false}]} >
                  <Tabla  data={rollOnRollOffData}  />
                  <Tabla  data={aclData} />
                </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
