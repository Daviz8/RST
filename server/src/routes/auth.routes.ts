import { validator } from "../routes/auth.validator";
import { Router } from "express";
import authController from "../controllers/auth.controller";
import useValidation from "../middlewares/validate";

const authRouter = Router()

authRouter.post("/login",useValidation(validator.loginSchema),authController.login)
authRouter.post("/register",useValidation(validator.registerSchema),authController.register)


export default {
    routeGroup: "/auth",
    routeHandler: authRouter,
}
    