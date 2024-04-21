import { Router } from "express";
import { users } from "../controllers/index.js";

const usersRouter = Router();

usersRouter.get("/", users.getUsers);
usersRouter.post("/add_user", users.addUser);

export default usersRouter;
