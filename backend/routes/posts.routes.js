import {Router} from "express";
import { runningchack } from "../controller/posts.controller.js";
const router=Router();


router.route("/").get(runningchack);
export default router;