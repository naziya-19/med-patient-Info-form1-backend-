//mongoose is a tool in nodejs a\that allows you to connect to mongodb
import mongoose, { connect } from 'mongoose';

connect('mongodb://127.0.0.1:27017/med',{ useNewUrlParser: true, useUnifiedTopology: true });


const connection = mongoose.connection;

connection.once('open',() => {
    console.log("MongoDB database connection established successfully")
});

