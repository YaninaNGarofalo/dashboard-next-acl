export function MetricCard({data, title}){
    let counter = 0
    if(data.length){
        const properties = Object.getOwnPropertyNames(data[0]) // Expecting two properties 0 - string , 1 - number
        for (let index = 0; index < data.length; index++) {
            counter  += data[index][properties[1]]   
        }
    if(data[0][properties[2]]){
        if(data[0][properties[2]]==3){
            return <div className="metrics-card-container metrics-card-danger mr-2">
                        <div className="metrics-card-number-container">
                            <p className="text-5xl font-bold metrics-card-number">{counter}</p>                    
                        </div>
                        <div className="metrics-card-text-container" >
                            <p className="metrics-card-text">{title}</p>
                            <p className="metrics-card-text-desc">{data[0][properties[0]]}</p>
                        </div>
                    </div>
        }else if(data[0][properties[2]]==2){
            return <div className="metrics-card-container metrics-card-warning mr-2">
                        <div className="metrics-card-number-container">
                            <p className="text-5xl font-bold metrics-card-number">{counter}</p>                    
                        </div>
                        <div className="metrics-card-text-container" >
                            <p className="metrics-card-text">{title}</p>
                            <p className="metrics-card-text-desc">{data[0][properties[0]]}</p>
                        </div>
                    </div>
        }
        else{
            return  <div className="metrics-card-container mr-2">
                <div className="metrics-card-number-container">
                    <p className="text-5xl font-bold metrics-card-number">{counter}</p>                    
                </div>
                <div className="metrics-card-text-container" >
                    <p className="metrics-card-text">{title}</p>
                    <p className="metrics-card-text-desc">{data[0][properties[0]]}</p>
                </div>
            </div>
        }
    }else{
        return  <div className="metrics-card-container mr-2">
                <div className="metrics-card-number-container">
                    <p className="text-5xl font-bold metrics-card-number">{counter}</p>                    
                </div>
                <div className="metrics-card-text-container" >
                    <p className="metrics-card-text">{title}</p>
                    <p className="metrics-card-text-desc">{data[0][properties[0]]}</p>
                </div>
            </div>
    }
    }else{ return }    
}