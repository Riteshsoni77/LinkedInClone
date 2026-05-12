import {Router} from "express";
import { runningchack } from "../controller/post.controller.js";
const router=Router();


router.route("/").get(runningchack);
export default router;