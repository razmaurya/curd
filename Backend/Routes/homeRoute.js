import fetchHomeData from "../controlleres/HomeController.js";
import express from 'express'
const router = express.Router();

router.get('/home', fetchHomeData);


export default router;