import express from "express";
import patientInfo from "../model/PatientInfo.model.js";

//patientList, searchPatient, addPatient, updatePatient, deletePatient

export function patientList( req , res) {
    patientInfo.find()
    .then(items => {res.json(items);})
    .catch(err => {
        res.status(400).json(`Error: ${err}`);
    });
};

export async function searchPatient (req,res) {
    const id = parseInt(req.params.pid);
    try{
        const patient = await patientInfo.findOne({pid : id});
        if (patient){
            res.status(200).json(patient);
        } else {
            res.status(404).json({message:"Patient not found"});
        }
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
};

export const addPatient = async (req,res) => {
    const { name, age, gender, pid, address } = req.body;

    try {
        const checkpid = await patientInfo.findOne({ pid });
        if(checkpid){
            return res.status(400).json({ message: "Patient already exists" });
        }

        const newPatient = new patientInfo(req.body);
        await newPatient.save();

        return res.status(201).json({message: "Patient added successfully"});
    }
    catch (err){
        return res.status(500).json({ message: err.message });
    }
};

export const updatePatient = async (req, res) => {
    const pid = parseInt(req.params.pid);
    const updates = req.body;
  
    try {
      // Find patient by pid and update
      const updatedPatient = await patientInfo.findOneAndUpdate({ pid }, updates, { new: true });
  
      // Check if patient exists and return updated patient
      if (updatedPatient) {
        return res.status(200).json(updatedPatient);
      } else {
        return res.status(404).json({ message: "Patient not found" });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };

  export const deletePatient = async (req, res) => {
    const pid = req.params.pid;
    try {
      // Find patient by pid and delete
      const deletedPatient = await patientInfo.findOneAndDelete({ pid });
      // Check if patient exists and return deleted patient
      if (deletedPatient) {
        return res.status(200).json(deletedPatient);
      } else {
        return res.status(404).json({ message: "Patient not found" });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };
  

