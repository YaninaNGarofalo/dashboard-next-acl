"use client"
import { useRouter } from "next/navigation";
import { Navbar } from "./components/nav";
import { Breadcrumbs } from "./components/breadcrumbs";
export default function NotFound(){
    const router = useRouter()
    return <>
  <div className="flex">
    <Navbar></Navbar>
    
    <div className="p-4 w-full h-screen">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 ">
            <Breadcrumbs></Breadcrumbs>
            <div className="flex-col items-center w-100  text-center h-screen p-6">
                <h4 className=" p-4 text-2xl font-bold dark:text-white">Page Not Found</h4>
                <p className="mt-2 p-4  text-8xl d-text-primary-2">404</p>
                <p className="mt-2 p-4">The page you are trying to reach was not found, please go to the previous page.</p>
                <button className="d-btn d-btn-primary-2" onClick={()=>router.back()} >Go Back</button>
            </div>
        </div> 
     </div>
</div>
    </>
}