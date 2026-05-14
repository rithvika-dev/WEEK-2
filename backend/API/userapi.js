// create mini-express app(separate Route)
import exp from'express'
export const userApp=exp.Router()



let users=[]
// create user 
userApp.get('/users',(req,res)=>{
    // read all users and send response
    res.json({message:"all users",payload:users})

    
})

// Route to handle POST req of client
userApp.post('/users',(req,res)=>{
    // get newuser from client
    const newUser=req.body
    // push user into users
    users.push(newUser)
    // send res
    res.json({message: "User created"})
})
// Route to handle PUT req of client
userApp.put('/users',(req,res)=>{
    // get modifiedusers from client
    let modifieduser=req.body;
    // get index of existing user in users array
    let index=users.findIndex(userobj=>userobj.id===modifieduser.id)
    // if user not found
    if(index===-1) {
        return res.json({message:"user not found"})
    }
    // update user with index
    users.splice(index,1,modifieduser)
    // send res
    res.json({message:"user updated"})

})
    
// Route to handle DELETE req of client
userApp.delete('/users/:id',(req,res)=>{
    // get id of user from url parameter
    let idOfUrl=Number(req.params.id )// {id:5}
    //find index of user
    let index=users.findIndex(userobj=>userobj.id===idOfUrl)
    // if user not found
    if(index===-1) {
        return res.json({message:"User not found to delete"})
    }
    // delete user by index
    users.splice(index,1)
    // send res
    res.json({message:"user removed "})
})
// app.get('/users/:id',(req,res)=>{
//     // get user if from url param
//     let idOfUrl=Number(req.params.id)
//     // find user
//     let user=users.find(userObj=>userObj.id===idOfUrl)
//     // if user not found
//     if(user===undefined) {
//         return res.json({message:"user not found"})
//     }
//     // send res
//     res.json({message:"a user",payload:user})


// })
// Create product API with below operations
// create new product({productId,name,brand,price})
// Read all products
// Read all product by brand
// update a product
// Delete a product by id
// let users1=[]
// app.get('/users',(req,res)=>({
    
// }))
