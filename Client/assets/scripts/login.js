
//submit was clicked
$(document).on('vclick', '#submit', function () {

  pageIsLoading();
  if($("#uname").val()=="" )
  {
    hideLoading();
    setTimeout(function(){  alert("Please fill in the user-name field"); },50);

  }
  else {
    if($("#pass").val()=="")
    {
      hideLoading();
        setTimeout(function(){    alert("Please fill in the password field"); },50);
    }

    else {
      sendData($("#uname").val(),$("#pass").val())
    }
  }
});

//showing animation of loading page
function pageIsLoading()
{
  //loading animation

  $.mobile.loading( "show", {
    text: "Loading...",
    textVisible: true,
    theme: "b",
    html: ""
  });
}

//hide animation of loading page
function hideLoading() {
  $.mobile.loading( "hide" );

}

//hide animation of loading page
function goToMenu() {
  //go to main menu
  getContactsData()
  $.mobile.changePage("#main-page", {
    transition: "slide", changeHase: false
  });
}


//A general function for handle all types of requests
const sendHttpRequest=(method,urlAddres,data)=>{
  const promise = new Promise((resolve, reject)=>{
  const xhr=new XMLHttpRequest();
  xhr.open(method, urlAddres)

  xhr.responseType='text'

    if(data)
    {
      xhr.setRequestHeader('Content-Type','application/json')
    }
      xhr.onload=()=>{

        if(xhr.status>=400)
        {
          reject(xhr.response)
          console.log("rejected")
          hideLoading();
        }
        else{
        resolve(xhr.response)
        console.log("resolved")
        }
      }
      xhr.onerror=()=>{
        reject('Something went wrong')
        hideLoading();
      }

      xhr.send(JSON.stringify(data))
    })
    return promise
  }

const sendData=(uname,pass)=>{
  sendHttpRequest("POST", "http://localhost:3000/users/login",{
    "userName": uname,
    "password": pass
  }).then(responseData=>{
    setTimeout(goToMenu, 700);
  }).catch(err=>{
    console.log(err)
    hideLoading();
  })
}
