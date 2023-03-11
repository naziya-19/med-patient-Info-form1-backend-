import mongoose from "mongoose";

export const form1Schema = new mongoose.Schema({
    pid : {
        type:Number,
        required: [true, "Please provide unique Patient UID"],
        unique: [true, "Patient already exists"]
    },
    MCH : {type : Number, required: [true] },
    LDL : {type : Number, required: [true] },
    HDL : {type : Number, required: [true] },
    cholesterol : {type : Number, required: [true] },
    bloodSugar : {type : Number, required: [true] },
    hemoglobin : {type : Number, required: [true] },
    RBC : {type : Number, required: [true] },
    WBC : {type : Number, required: [true] },
    plateleteCount : {type : Number, required: [true] },
    MCV : {type : Number, required: [true] },
    dateOfTest : { type: Date, required: [true]}
    
},
{
    timestamps:true,
});

export default mongoose.model.form1 || mongoose.model('form1', form1Schema);