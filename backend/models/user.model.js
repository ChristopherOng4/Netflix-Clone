import mongoose from "mongoose";

//Schema is used to define the structure/format of records within the MongoDB 
const userSchemma = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true
    },
    image:{
        type: String,
        default: ""
    },
    searchHistory: {
        type: Array,
        default: []
    }
})

// Create User schema based off the userScehma structure
// Creates an User account that allows the account holder to access the MongoDB and perform CRUD operations (Create, Read, Update, Delete)
export const User = mongoose.model('User', userSchemma);