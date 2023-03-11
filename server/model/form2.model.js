import mongoose from "mongoose";

export const form2Schema = new mongoose.Schema({
    pid : {
        type:Number,
        required: [true, "Please provide unique Patient UID"],
        unique: [true, "Patient already exists"]
    },
    //needs a 3rd party client orthanc
    xRay : {},
    xRayjpg : { data: Buffer,
                contentType: String,},
    expertComment : { type : String },
    dateOfTest : { type: Date, required: [true]}
})