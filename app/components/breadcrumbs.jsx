"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from "next/link";

export function Breadcrumbs(){    
const paths = usePathname()
const pathNames = paths.split('/').filter( path => path )
//Change later to calculate previous path 
return (
<nav className="flex pb-4" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
      <li className="inline-flex items-center">
        <div className='inline-flex items-center'>
          <svg className="rtl:rotate-180 w-4 h-4 text-gray-400 mx-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          <Link href="/" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">HOME</Link>
        </div>
      </li>
    {pathNames.map((path, i)=>{
      return <li key={path+i} className="inline-flex items-center">
                {i===0 && 
                  <div className='inline-flex items-center'>
                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <Link href={"/"+path} className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"> {path.toUpperCase()}</Link>
                  </div>
                }
                { 
                  i>0 && 
                  <div className='inline-flex items-center'>
                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                  <Link href={paths} className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"> {path.toUpperCase()}</Link>
                  </div>
                }
              </li>
    })}
  </ol>
</nav>)

}