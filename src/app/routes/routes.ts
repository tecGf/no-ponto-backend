import { Router } from "express";
import { permissionCtrl } from "../controller/PermissionController";
import { userCtrl } from "../controller/UserController";

const router: Router = Router()

router.get("/permission", permissionCtrl.permissions);
router.get("/user", userCtrl.user);

export { router };