const { MongoClient } = require('mongodb');
const bodyParser = require("body-parser")
const cors = require("cors");
require("dotenv").config()

const express = require("express")
const app = express()
app.use(cors())

app.use(bodyParser.json())

app.get("/", (req,res)=>{
    res.status(200)
    res.setHeader("Content-Type", "text/html")
    res.end("<h1>Welcome to my page</h1>")
})

app.post("/addData", (req,res)=>{
    res.status(200)
    const {email, password} = req.body
    console.log("Data received:", email, password)

    async function addToDatabase(email, password) {

    const uri = process.env.MONGODB_URI;  

    if(!uri){
      throw new Error("Environment variable MONGODB_URI is not configured")
    }

   const client = new MongoClient(uri);
      
      try {
        await client.connect();
        console.log('Connected to the database');
    
        const database = client.db('database1'); 
        const collection = database.collection('users');
    
        const result = await collection.insertOne({
          "email": email,
          "password": password
        });
    
        console.log(`Document inserted with ID: ${result.insertedId}`); 
      } catch (err) {
        console.error('Error connecting to the database:', err);
      } finally {
        await client.close();
        console.log('Connection closed');
      }
    }
    
    addToDatabase(email,password)
    res.end("<h1>Welcome to AddData</h1>")
})

app.listen(3000, ()=>{
    console.log("listening on port 3000")
})
