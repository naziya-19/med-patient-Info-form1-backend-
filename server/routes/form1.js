import { Router } from "express";
import { form1List, searchPid, addForm1, updateForm1, deleteForm1 } from "../controller/form1.js";

const router = Router();

/*GET methods for form1 */
router.route("/").get(form1List);
router.route("/:pid").get(searchPid);

/*POST methods for form1 */
router.route("/add").post(addForm1);

/*PUT methods for form1 */
router.route("/update/:pid").put(updateForm1);

/*DELETE methods for form1 */
router.route("/delete/:pid").delete(deleteForm1);

export default router;
