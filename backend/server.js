// create HTTP Server
import exp from 'express'
const app=exp()
import {userApp} from "./API/userapi.js";
import { productApp } from './API/productapi.js';
//use body body parser middleware
app.use(exp.json());
// forward req to userApi if path starts with /


// create custom middleware
function middleware1(req,res,next){
    // send response from middleware 
    // res.json({message:"this res from middleware1"})
    // forward req to res
    console.log("middleware1 executed");
    next();

}
function middleware2(req,res,next)
{
    //send res from middleware
    // res.json({message:"this res from middleware2"})
    // forward req to next
    console.log(" middleware2 executed");
    next()
    

}
// use middleware
app.use(middleware1)
app.use(middleware2)
app.use('/user-api',userApp)
app.use('/product-api',productApp)
// set a port number
const port=3000
// Assign port number to HTTP Server
app.listen(port ,()=> console.log(`server listening to port ${port}...`))
// web server is a computer that installed with HTTP Server
// create API(REST API- Representational state Transfer)
// Api contains Route
// Route to handle GET req of client(http://localhost:3000/users)
// app.get('/users',(req,res)=>{
//     // send response to a client
//     res.json({message:"This response for get users"})
// })

// // })
// // Route to handle POST req of client
// app.post('/users',(req,res)=>{
//     res.json({message:"This response for create user "})
// })
// // })
// // Route to handle PUT req of client
// app.put('/users',(req,res)=>{
//     res.json({message:"This response for update user"})
// })
// // Route to handle DELETE req of client
// app.delete('/users',(req,res)=>{
//     res.json({message:"This response for delete user"})
// })
// // Route to handle GET req of client(http://localhost:3000/users)
// // Test data(Replace this test data with DB)

// // Route to handle GET request of the product
// app.get('/products',(req,res)=>{
//     // send response to a client
//     res.json({message:"This response for get products req"})
// })

// // Route to handle POST req of product 
// app.post('/products',(req,res)=>{
//     res.json({message:"This response for create product "})
// })

// // Route to handle PUT req of product 
// app.put('/products',(req,res)=>{
//     res.json({message:"This response for update product"})
// })

// // Route to handle DELETE req of product
// app.delete('/products',(req,res)=>{
//     res.json({message:"This response for delete product"})
// })


