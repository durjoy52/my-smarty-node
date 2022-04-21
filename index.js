const express = require('express');
const app =express()
const cors =require('cors')
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('Hello from my smarty smarty smooth pant !!!')
})

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '0178888888' },
    { id: 2, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '0178888888' },
    { id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '0178888888' },
    { id: 4, name: 'suchonda', email: 'suchonda@gmail.com', phone: '0178888888' },
    { id: 5, name: 'srabonti', email: 'srabonti@gmail.com', phone: '0178888888' },
    { id: 6, name: 'sabila', email: 'sabila@gmail.com', phone: '0178888888' },
    { id: 7, name: 'sohana', email: 'sohana@gmail.com', phone: '0178888888' },
]

 app.get('/users',(req,res)=>{
     console.log('query',req.query)
     if(req.query.name){
         const search = req.query.name
         const matched = users.filter(user =>user.name.toLowerCase().includes(search))
         res.send(matched)
        }else{
        res.send(users)}
 })

app.get('/user/:id',(req,res)=>{
    const id =parseInt(req.params.id)
    const user = users.find(user =>user.id === id)
    res.send(user)
})

app.post('/user',(req,res)=>{
    console.log('request',req.body);
    const user =req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.listen(port,()=>{
    console.log('Listening to port',port)
})