export function MetricCard({data, title}){
    let counter = 0
    if(data.length){
        const properties = Object.getOwnPropertyNames(data[0]) // Expecting two properties 0 - string , 1 - number
        for (let index = 0; index < data.length; index++) {
            counter  += data[index][properties[1]]   
        }
    return <>       
<div className="relativepx-4 p-4 bg-white shadow-lg dark:bg-gray-800 border-solid border-2 m-2 ">
    <div className="flex items-end  space-x-2 ">
        <p className="text-5xl font-bold text-black dark:text-white ">{counter}</p>
        
    </div>
    <div className="flex w-full text-center items-center justify-between pb-2 mb-2 space-x-12 text-sm md:space-x-24" >
        <p className="font-bold  text-center dark:text-white flex items-end text-xs">{title}</p>
    </div>
</div>

    </>
    }else{ return }    
}