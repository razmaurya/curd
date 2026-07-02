import getHomeData from "../models/HomeModel.js";

export default function fetchHomeData(req, res) {
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