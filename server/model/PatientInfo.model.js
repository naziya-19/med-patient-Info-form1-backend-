import mongoose from 'mongoose';
// is there a patinet register page ?
//where are we registering the patient if that is doctors login
export const patientSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please provide patient name"],
        unique: false
    },
    age : {
        type: Number,
        required: true
    },
    gender : {
        type: String
    },
    pid : {
        type: Number,
        required: [true, "Please provide unique Patient UID"],
        unique: [true, "Patient already exists"]
    },
    address : {
        type: String
    }
},
{
    timestamps:true,
});

export default mongoose.model.PatientInfo || mongoose.model('PatientInfo', patientSchema);