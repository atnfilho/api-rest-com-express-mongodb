import mongoose from "mongoose";

mongoose.connect('mongodb+srv://atnfilho:france2@cluster0.g955fhe.mongodb.net/alura-node');

let db = mongoose.connection;

export default db;