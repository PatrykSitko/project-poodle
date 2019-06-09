import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
// @ts-ignore
import router from "./router";

const Express = express();

Express.use(bodyParser.json());
Express.use(bodyParser.urlencoded({ extended: true }));
Express.use("/", router);

export const port = 4000;
export default Express;
