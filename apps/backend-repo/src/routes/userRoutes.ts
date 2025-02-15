import { Router } from "express";
import controller from "../controllers";

const router: Router = Router();

router.get("/fetch-user-data", controller.getUsers);
router.post("/create-user-data", controller.createUser);
router.put("/update-user-data/:id", controller.updateUser);

export default router;
