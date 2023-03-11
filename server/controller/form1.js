import form1Model from "../model/form1.model.js";
import PatientInfoModel from "../model/PatientInfo.model.js";

export function form1List(req,res) {
    form1Model.find()
    .then(items => {res.json(items);})
    .catch(err => {
        res.status(400).json(`Error: ${err}`);
    });    
};

export async function searchPid (req,res) {
    const id = parseInt(req.params.pid);
    try{
        const patient = await form1Model.findOne({pid : id});
        if (patient){
            res.status(200).json(patient);
        } else {
            res.status(404).json({message:"Patient UID not found"});
        }
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
};

export const addForm1 = async (req,res) => {
    const form = form1Model(req.body);

    try {
        const checkpid = await form1Model.findOne({ pid: form.pid });
        if(checkpid){
            return res.status(400).json({ message: "Patient already exists" });
        }
        //checks if the patient has filled Personal info form
        const existence = await PatientInfoModel.findOne({ pid: form.pid });
        if(existence){
            await form.save();
            return res.status(201).json({message: `Blood report Form for Patient UID ${form.pid} added successfully`});
        } else {
            return res.status(404).json({message: `Patient Personal Information not filled for ${form.pid}`});
        }
    }
    catch (err){
        return res.status(500).json({ message: err.message });
    }
};

export const updateForm1 = async (req, res) => {
    const pid = parseInt(req.params.pid);
    const updates = req.body;
    try {
      // Find patient by pid and update
      const updatedForm = await form1Model.findOneAndUpdate({ pid }, updates, { new: true });
  
      // Check if patient exists and return updated patient
      if (updatedForm) {
        return res.status(200).json(updatedForm);
      } else {
        return res.status(404).json({ message: `Patient UID ${pid} not found` });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };

  export const deleteForm1 = async (req, res) => {
    const pid = parseInt(req.params.pid);
    try {
      // Find patient by pid and delete
      const deletedForm = await form1Model.findOneAndDelete({ pid });
      // Check if patient exists and return deleted patient
      if (deletedForm) {
        return res.status(200).json(deletedForm);
      } else {
        return res.status(404).json({ message: `Patient UID : ${ pid } not found` });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };