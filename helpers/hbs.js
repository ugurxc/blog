const moment = require("moment")


module.exports={

    generateDate: (date,format)=>{
        return moment(date).format(format)
    },
    limit: (arr,limit)=>{
        if(!Array.isArray(arr)) {return[]}
        return arr.slice(0,limit)
    } ,
    truncate: (str,len)=>{
        if(str.length > len) str= str.substring(0,len) +"..."
        return str

    } ,
    paginate: (options)=>{
        let outputHTML= ``

        if(options.hash.current===1){
            outputHTML+=`<li class="page-item disabled"><a class="page-link">First</a></li>`
        }else {
            outputHTML+=`<li class="page-item "><a class="page-link" href="?page=1">First</a></li>`
        }
        
        let i = (Number(options.hash.current) >5 ? Number(options.hash.current)-3:1 )
        
        if(i !==1){
            outputHTML+=`<li class="page-item disabled"><a class="page-link">...</a></li>`
        }
        
       
            

        return outputHTML
    }

}
