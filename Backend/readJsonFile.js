// include file system module
var fs = require('fs');
fs.readFile('contacts.json',

    // callback function that is called when reading file is done
    function(err, data) {       
        // json data
        var jsonData = data;
 
        // parse json
        var jsonParsed = JSON.parse(jsonData);
        var contactsArray=[]
        contactsArray=jsonParsed.contacts

        // access elements
        for (var i=0; i<contactsArray.length; i++) {
            console.log(contactsArray[i]);
          }
          
        // access elements
        //console.log(jsonParsed.contacts[0].firstName + " " + jsonParsed.contacts[0].lastName);
        //console.log(jsonParsed.contacts[1].firstName + " " + jsonParsed.contacts[1].lastName);
});