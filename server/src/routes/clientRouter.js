import express from "express";
import getClientIndexPath from "../config/getClientIndexPath.js";


const router = new express.Router();

const clientRoutes = [ 
  "/",
  "/categories",
  "/animes/:id",
  "/user-sessions/new", 
  "/users/new",
];
router.get(clientRoutes, (req, res) => {
  res.sendFile(getClientIndexPath());
});

export default router;
