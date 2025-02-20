import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import categoriesRouter from './api/v1/categoriesRouter.js'
import animesRouter from './api/v1/animesRouter.js'

const rootRouter = new express.Router();

rootRouter.use("/", clientRouter);
rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter); //place your server-side routes here
rootRouter.use('/api/v1/categories', categoriesRouter)
rootRouter.use('/api/v1/animes', animesRouter)

export default rootRouter;
