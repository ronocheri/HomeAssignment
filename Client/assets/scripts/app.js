
var contactsJsonList

function sortList()
{

  //getting the data

const contactsObj = JSON.parse(contactsJsonList);
var contactsArray=[]

contactsArray=contactsObj.contacts

//sort by name
const sortedContacts = contactsArray.sort((a, b) => {
  if (a.firstName > b.firstName) {
    return 1;
  } else if (a.firstName === b.firstName) {
    return 0;
  } else {
    return -1;
  }
});


for (var i=0; i<sortedContacts.length; i++) {
  createListElement(sortedContacts[i])
  }
}


  //create the list of li+data
function createListElement(contant)
{
  var newLi = document.createElement("li");
  /*var contactValue = document.createTextNode(contant.firstName+" "+contant.lastName);
  newLi.appendChild(contactValue);
*/
  //add pic

  var a = document.createElement("a");
  a.setAttribute('href', "#contactChoosen");
  newLi.appendChild(a);


  var newImage = document.createElement('img')
  newImage.setAttribute('class', 'img')
  newImage.setAttribute('alt', contant.firstName)
  newImage.src = contant.image
  a.appendChild(newImage)

  
  newLi.addEventListener("click", function()
  {
    displayContact(contant)
  })
  document.getElementById("contactsList").appendChild(newLi);
}

//display a contact
function displayContact(contant) {
  //contact details
  document.getElementById("contactName").innerHTML =contant.firstName+" "+contant.lastName
  document.getElementById("contactImage").src=contant.image
  document.getElementById("contactMail").innerHTML = "Mail: "+contant.email     
  document.getElementById("contactDesc").innerHTML = contant.desc         
}

 // get request - users
  const getUsersData=()=>{
    sendHttpRequest("GET", "http://localhost:3000/users")
  }
  
  // get request - contacts
  const getContactsData=()=>{
    sendHttpRequest("GET", "http://localhost:3000/contacts").then(responseData=>{
      contactsJsonList=responseData
      sortList()
    }).catch(err=>{
      console.log(err)
      hideLoading();
    })
  }