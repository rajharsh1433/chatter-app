import express from "express";
import { connectToDB } from "./db.config.js";
import {server} from './server.js';

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
    //calling the connect to data base server
    connectToDB();
});
