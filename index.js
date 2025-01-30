const express=require('express')
const app=express()

app.use(express.json())

let users=[]
//get all users
app.get('/users',(req,res)=>{
  res.json(users)
})

//POST-ADD A NEW USER
app.post('/users',(req,res)=>{
  const newUser={id:users.length+1, ...req.body}
  users.push(newUser)
  res.status(201).json(newUser)
});

//UPDATE--PUT()
app.put('/users/:id',(req,res)=>{
  const user=users.find(u=>u.id===parseInt(req.params.id))
  if(!users) return res.status(404).json({message:"user not found"})
  user.name=req.body.name||req.name
  user.email =req.body.email||req.email
  res.json(user)
})

//DELETE
app.delete('/user/:id',(req,res)=>{
users=users.filter(user=>user.id !==parseInt(req.params.id))
res.json({message:'user Deleted'})
})

app.listen(3000,()=>console.log("server is running in port in 8000"))