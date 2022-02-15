const express = require('express')
var cors = require('cors')

const app = express()


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.json())

app.use(cors())



var contactsArray=[]
var users = []

var fs = require('fs');
fs.readFile('contacts.json',

//contacts
function(err, data) {       
        var jsonData = data;
        var jsonParsed = JSON.parse(jsonData);
        contactsArray=jsonParsed
 });

app.get('/contacts', (req, res) => {
  res.json(contactsArray)
})
/*
app.post('/contacts', async (req, res) => {
  try {
    const contact = { name: req.body.name, password: password }
    contacts.push(contact)
    res.status(201).send()
  } catch {
    res.status(500).send()
  }
})

app.post('/contacts/login', async (req, res) => {
  const contact = contacts.find(user => user.name === req.body.name)
  if (contact == null) {
    return res.status(400).send('Cannot find contact')
  }
  try {
    if(await compare(req.body.password, contact.password)) {
      res.send('Success')
    } else {
      res.send('Not Allowed')
    }
  } catch {
    res.status(500).send()
  }
})*/


//users

fs.readFile('users.json',

function(err, data) {       
        var jsonData = data;
        var jsonParsed = JSON.parse(jsonData);
        users=jsonParsed
 });

app.get('/users', (req, res) => {
  res.json(users)
})

//create user
app.post('/users', async (req, res) => {
  try {
    const user = { userName: req.body.userName, password: req.body.password }
    users.push(user)
    res.status(201).send()
  } catch {
    res.status(500).send()
  }
})

//check user
app.post('/users/login', async (req, res) => {
  const user = users.find(user => user.userName === req.body.userName)
  if (user == null) {
    return res.status(400).send('Cannot find user')
  }
  try {
    if(req.body.password==user.password) {
      res.send('Success')
    } else {
      res.send('Not Allowed')
    }
  } catch {
    res.status(500).send()
  }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));


/*console.log("name:"+ req.body.userName)
    console.log("pass:"+ req.body.password)

    console.log("user name:"+ user.userName)
    console.log("user pass:"+ user.password)*/