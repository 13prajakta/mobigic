export const validate=(data)=>{
    let error={}
    // var namereg = /^[a-zA-Z_ ]*$/;
    if(data.m && data.n){
    if(!data.m.value){
        error.m="*Row Count Is Required"
    }
    if(!data.n.value){
        error.n="*Colmun Count is required"
    }
    return error;
}
else if(data.search){
    if(!data.search.value){
        error.search="*Search Should Not Blank"
    } 
    return error;
}
}