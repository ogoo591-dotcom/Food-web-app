import express from "express";
import { createLogin } from "../resolvers/auth/create-loginAuth.js";
import { createLogout } from "../resolvers/auth/create-logoutAuth.js";

export const authentication = express.Router();

authentication.post("/", createLogin);
authentication.post("/", createLogout);
