"use client"
import { useState } from "react";
import { Navbar } from "@/app/components/nav";
import { Breadcrumbs } from "@/app/components/breadcrumbs";
import { MetricCard } from "@/app/components/metricsCard";
import Tabla from "@/app/components/tabla";
import Summary from "@/app/components/summarydetails";
export default function project({ params }) {
const segregationOfDutiesCases =[{"ClientName" :"Name of the Client A","SoDCount": 10}, {"ClientName" :"Name of the Client B","SoDCount": 25},{"ClientName" :"Name of the Client A","SoDCount": 10}]
const data = [
    {"Client": "Name of the Client C","Project #":123, "Project Name" :"C", "Project POC":"JonDoe@mail.com","Project Status":"Completed", "# Active Employees":0 , "# Inactive Employees":5 ,"actionID":5  },
    {"Client": "Name of the Client B","Project #":456, "Project Name" :"B", "Project POC":"JonDoe@mail.com","Project Status":"Completed", "# Active Employees":0 , "# Inactive Employees":5, "actionID":5  },
    {"Client": "Name of the Client A","Project #":789, "Project Name" :"A", "Project POC":"JonDoe@mail.com","Project Status":"Completed", "# Active Employees":0 , "# Inactive Employees":5,"actionID":5   }
  ]
  const projectData = {
    "Project ID":123,
    "Project Name":" Nombre de Cliente",
    "Client Name":" Nombre de Cliente",     
    "Project POC": "John Doe",
    "Project End Date":"20 de enero de 2026, 6:21:28 p.m. UTC-3",
    "Created":"20 de enero de 2024, 6:21:28 p.m. UTC-3",
    "Created By": "Admin", 
    "Modified":"20 de enero de 2024, 6:21:28 p.m. UTC-3",
    "Modified By": "John Doe"
  
  }
const [showTab01,setShowTab01 ]= useState(true)
const [showTab02,setShowTab02 ]= useState(false)
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
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="col-span-4  flex-col items-center justify-center mb-4 rounded bg-gray-50 dark:bg-gray-800 p-4">
              <Summary title={projectData["Project Name"]} summaryObj={projectData} />
            </div>
            <div className="col-span-4  flex-col items-center justify-center mb-4 rounded bg-gray-50 dark:bg-gray-800 p-4">
                <h4 className="p-4 text-2xl font-bold dark:text-white">
                    <span>Metrics</span>
                    <i className="bi bi-arrows-fullscreen"></i>
                </h4>
              <div className="flex">
                <MetricCard title="Segregation Of Duties" data={segregationOfDutiesCases}></MetricCard>
                <MetricCard title="Revocation Past Due"  data={segregationOfDutiesCases}></MetricCard>
                <MetricCard title="Pending Roll-On" data={segregationOfDutiesCases}></MetricCard>
                <MetricCard title="Pending Roll-Off" data={segregationOfDutiesCases}></MetricCard>
                <MetricCard title="Pending Roll-On" data={segregationOfDutiesCases}></MetricCard>
                <MetricCard title="Pending Roll-Off" data={segregationOfDutiesCases}></MetricCard>
                <MetricCard title="Pending Roll-On" data={segregationOfDutiesCases}></MetricCard>
                <MetricCard title="Pending Roll-Off" data={segregationOfDutiesCases}></MetricCard>
              </div>
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                    <li className="me-2">
                        <button href="#" aria-current="page" className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500" type="button" onClick={()=>{setShowTab01(true);setShowTab02(false)}}>Roll-On / Roll-Off</button>
                    </li>
                    <li className="me-2">
                        <button href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300" type="button" onClick={()=>{setShowTab01(false);setShowTab02(true)}}>Access Control Log</button>
                    </li>
                </ul>
                {showTab01 && <Tabla  data={data} actionName='Projects' actionPath='projects/'  />}
                {showTab02 && <Tabla  data={data} actionName='Projects' actionPath='projects/'  />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
