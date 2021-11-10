
import express, { request, response } from 'express'
import Data from './Dataa.js'
import bodyParser from 'body-parser';
import { data } from 'dom7';
import cors from 'cors'





const app= express()
app.use(cors())
app.use(express.json());
 app.use(bodyParser.urlencoded({extended:true}));
 app.use(bodyParser.json());


app.get('/' , (req,res)=>{

    res.send('Server is ready')
})
app.get('/api/products',(req,res)=>{
    res.send(Data.products)
})
app.post('/api/products',(request,response)=>{
  
    console.log(request.body)
    response.send(request.body)
 
})
app.get('/api/products',(request,response=>{
    console.log(request.body)
    response.send(request.body)
  
}))

const port= process.env.port || 8000
app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`)
})