const mongoose = require("mongoose")

const mongoURI = "mongodb://localhost:27017/inotebook" 

const connectToMongo = () =>{
    mongoose.connect(mongoURI)
    .then(()=>console.log("Connected to MongoDB successfully"))   
    .catch((err) => console.error(err))

}
module.exports  = connectToMongo