import { Router } from "express";
import { patientList, searchPatient, addPatient, updatePatient, deletePatient} from "../controller/patientInfo.js";

const router = Router();

/*GET functions for patient*/
router.route("/").get(patientList);
router.route("/:pid").get(searchPatient);

/*POST function for patient */
router.route("/add").post(addPatient);

/*PUT to update patient info */
router.route("/update/:pid").put(updatePatient);

/* DELETE a patient*/
router.route("/delete/:pid").delete(deletePatient);

export default router;