"use client"
import { useState } from "react"
import Link from "next/link"
import { sorting } from "../helpers/sorting"
export default function Tabla({data,actionName, actionPath}) {
    const [newData, setData] = useState(()=>data)
    function handleTableSorting(header) {
        let tempData = sorting(newData, header)
        setData([...tempData])
    }
    if(newData.length){
        const headers = Object.getOwnPropertyNames(newData[0])
    return (<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-xs  text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs uppercase dark:bg-gray-700 dark:text-gray-400">
            <tr>
                {headers.map((header,i)=>{ 
                     if(header !='actionID'&& header !='id'){
                        return <th scope="col" className="px-3 py-3 text-xs"  key={`${header}`} onClick={() => handleTableSorting(header)}> <span className="flex">  {header.toLocaleUpperCase()} <svg className="w-3 h- ms-1.5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                        </svg> </span> </th>
                  }else if(header ==='actionID'){
                      return  <th key={i}>Actions</th>
                  }
                })}
                  
            </tr>
        </thead>
        <tbody>            
                {newData.map((row,i ) => {            
                return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={`tr-${i}`}>    
                    {headers.map((header, j) => {
                        if(header !='actionID'&& header !='id'){
                            return <td  className="px-3 py-3" key={`td-${j}`}> { row[header] }</td>
                        }else if(header ==='actionID'){
                            return <td  key={i}><Link className="text-xs d-btn d-btn-primary-2 d-btn-sm hover:bg-purple-700 hover:text-white focus:ring-purple-500 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " href={actionPath +row[header].toString()  } > {actionName}</Link></td>
                        }                      
                         
                        })}
                    
                </tr>
                })} 
        </tbody>
    </table>
</div>
    )    
    }else{ return }    
}