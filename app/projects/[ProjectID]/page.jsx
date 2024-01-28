"use client"
import { useState } from "react";
import { Navbar } from "@/app/components/nav";
import { Breadcrumbs } from "@/app/components/breadcrumbs";
import { MetricCard } from "@/app/components/metricsCard";
import Tabla from "@/app/components/tabla";
export default function project({ params }) {
const segregationOfDutiesCases =[{"ClientName" :"Name of the Client A","SoDCount": 10}, {"ClientName" :"Name of the Client B","SoDCount": 25},{"ClientName" :"Name of the Client A","SoDCount": 10}]
const data = [
    {"Client": "Name of the Client C","Project #":123, "Project Name" :"C", "Project POC":"JonDoe@mail.com","Project Status":"Completed", "# Active Employees":0 , "# Inactive Employees":5 ,"actionID":5  },
    {"Client": "Name of the Client B","Project #":456, "Project Name" :"B", "Project POC":"JonDoe@mail.com","Project Status":"Completed", "# Active Employees":0 , "# Inactive Employees":5, "actionID":5  },
    {"Client": "Name of the Client A","Project #":789, "Project Name" :"A", "Project POC":"JonDoe@mail.com","Project Status":"Completed", "# Active Employees":0 , "# Inactive Employees":5,"actionID":5   }
  ]
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
            <div className="row-span-2 col-span-1 flex-col items-center justify-center mb-4 rounded bg-gray-50 dark:bg-gray-800 p-4">
              <h4 className="p-4 text-2xl font-bold dark:text-white">
                <span>Project Name</span>
                <i className="bi bi-arrows-fullscreen"></i>
              </h4>
              <div className="p-4">
                <div className=" border-t border-gray-100">
                  <dl className="divide-y divide-gray-100">
                    <div className="px-4  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">
                        Client Name
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
                        Client ABC
                      </dd>
                    </div>
                    <div className="px-4  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">
                        Project ID
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
                      {params.ProjectID}
                      </dd>
                    </div>
                    <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">
                        Account Manager
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
                        John Doe
                      </dd>
                    </div>
                    <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">
                        Administrator
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
                        John Doe
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>              
              <div className="flex justify-center items-center ">              
  <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
      <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
          Add a new Employee
      </div>
      <hr />
      <div className="mt-4">
          <form action="#" autoComplete="off">
              <div className="flex flex-col mb-2">
                  <div className="flex relative ">
                      {/* <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                          <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                              </path>
                          </svg>
                      </span> */}
                      <input type="text" id="sign-in-email" className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your email"/>
                      </div>
                  </div>
                  <div className="flex flex-col mb-6">
                      <div className="flex relative ">
                      <input type="text" id="sign-in-email" className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your email"/> 
                     </div>
                      </div>
                      <div className="flex w-full">
                          <button type="submit" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                              Add Employee
                          </button>
                      </div>
                  </form>
              </div>
          </div></div>
            </div>
            <div className="col-span-3  flex-col items-center justify-center mb-4 rounded bg-gray-50 dark:bg-gray-800 p-4">
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
