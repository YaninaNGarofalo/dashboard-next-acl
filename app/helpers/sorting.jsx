export const sorting = (data, key) => {
    let type = typeof data[0][key]
    if (type == "number") {
        return data.sort((a, b) => a[key] - b[key]);
    }else if(type == "string"){
        return data.sort((a, b) =>{
            if (a[key] > b[key]) { return 1;}
            if (a[key]< b[key]) { return -1;}
            return 0;
        })
    }
}