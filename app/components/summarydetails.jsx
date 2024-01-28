"use client"
import { useState } from "react"
export default function Summary({title,summaryObj}){
    const objProp = Object.getOwnPropertyNames(summaryObj)
    const [edit, setEdit] = useState(false)
    return<>
        <h4 className="flex justify-between items-center p-4 d-border-bottom-primary-3 text-2xl font-bold dark:text-white">
               <span className="w-4/5">{title} </span> <button className="d-btn d-btn-primary-2" onClick={()=>{setEdit((prev)=>!prev)}} >{edit?'Save':'Edit' }</button>
              </h4>
              <div className="">
                <div className="">
                  <dl >
                    { objProp.map((prop, i)=>{
                        if(edit){
                            return <div key={prop+i} className="px-4 sm:px-0 d-grid">
                                        <dt className="summary text-xs font-medium leading-6 col-1">
                                            {prop}
                                        </dt>
                                        <dd className="summary text-xs leading-6 col-2">
                                          <input type="text" value={summaryObj[prop]} />
                                        </dd>
                                    </div>     
                        }else{
                            return  <div key={prop+i}  className="px-4 sm:px-0 d-grid">
                                        <dt className="summary text-xs font-medium leading-6 col-1">
                                            {prop}
                                        </dt>
                                        <dd className="summary text-xs leading-6 col-2">
                                            {summaryObj[prop]}
                                        </dd>
                                    </div>                        
                        }
                     })                        
                    }                    
                  </dl>
                </div>
              </div>
    </>
}