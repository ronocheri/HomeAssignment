const fs = require('fs')

fs.readFile('users.json',(err,data)=>{

    if(err)
    {
        console.log(err)
        return
    }
    console.log(data.toString())

})

var user='{'+
    '"firstName":"Amy",'+
    '"lastName":"Santiago ",'+
    '"email":"Jake@gmail.com",'+
    '"image":"https://static.wikia.nocookie.net/brooklynnine-nine/images/a/aa/S8_Jake_Peralta_-_Andy_Samberg.jpg/revision/latest?cb=20210805002811"}'
fs.writeFile('users.json',user,err=>{
    if(err)
    {
        console.log(err)
        return
    }
    else
    {
        console.log("wrote to file")
          
    }
})
