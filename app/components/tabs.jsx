"use client"
import React ,{useState} from "react";
export default function Tabs({children, tabs}){
    const childrenArr = React.Children.toArray(children);
    const [tempTabs, setTabs] = useState(()=>tabs)
    function handleTabs(tabName) {
        setTabs((prev) => prev.map(tabObj => 
            (tabObj.name==tabName)? {...tabObj, show: true} : {...tabObj, show: false}            
        ))
    }
    if(tempTabs.length>0){
       return <>
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            {tempTabs.map((obj,i)=>{
                if(obj.show){
                    return <li key={obj.name+i} className="me-2">
                                <button className="d-btn-primary-2 inline-block p-4 rounded-t-lg " type="button" onClick={() => handleTabs(obj.name)}>{obj.name}</button>   
                            </li>
                    
                }else{
                    return <li key={obj.name+i} className="me-2">
                                <button className="inline-block p-4  bg-gray-200 rounded-t-lg dark:bg-gray-800" type="button" onClick={() => handleTabs(obj.name)}>{obj.name}</button>   
                            </li>
                }
                
            })}
        </ul>        
        {tempTabs.map((obj, i)=>{
            if(obj.show){
                return <div className="p-4 d-border-primary-3 " key={obj.name+i} >{childrenArr[i]}</div>
            }
        })}
        </>
    } 
    return<></>
}