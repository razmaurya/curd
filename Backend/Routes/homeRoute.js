import { fetchHomeData ,fetchEmployeeData, fetchEmployeeById, fetchDepartment } from "../controlleres/HomeController.js";
import express from 'express'
const router = express.Router();

router.get('/home', fetchHomeData);
router.get('/employee', fetchEmployeeData);
router.get('/employee/view/:id', fetchEmployeeById);
router.get('/department', fetchDepartment);
export default router;