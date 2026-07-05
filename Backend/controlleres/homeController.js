import { getHomeData, getEmployeeData, getEmployeeById, getDepartment } from "../models/HomeModel.js";

export function fetchHomeData(req, res) {
    getHomeData((err, result) => {
        if (err) {
            return res.json({
                success: false,
                message: err
            });
        }
        if (result.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Record Not Found..."
            });
        }
        res.status(200).json({
            success: true,
            message: "OK",
            data: result
        });
    })

}
export function fetchEmployeeData(req, res) {
    getEmployeeData(req, (err, result) => {
        if (err) {
            return res.json({
                success: false,
                message: err
            });
        }

        res.status(200).json({
            success: true,
            message: "OK",
            data: result
        });
    })

} 

export function fetchDepartment(req, res) {
    getDepartment((err, result) => {
        if (err) {
            return res.json({
                success: false,
                message: err
            });
        }

        res.status(200).json({
            success: true,
            message: "OK",
            data: result
        });
    })

}

export function fetchEmployeeById(req, res) {

    const empId = req.params.id;
    if (empId === '') {
        return res.json({
            success: false,
            message: "Employee Id Is Missing.."
        });
    }
    getEmployeeById(empId, (err, result) => {

        if (err) {
            return res.json({
                success: false,
                message: err
            });
        }
        if (result.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Record Not Found..."
            });
        }
        res.status(200).json({
            success: true,
            message: "OK",
            data: result
        });
    })

}