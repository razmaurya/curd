import conn from '../config.js'

export function getHomeData(callback) {
    return conn.query('SELECT count(employee_code) as employee,sum(status="Active") as active, sum(status="Inactive") as inactive, count(distinct department) as department,count(distinct designation) as designation from employees', callback);
}


export function getEmployeeData(data, callback) {
    console.log(data.query);

    const page = Number(data.query.page) || 1;
    const limit = Number(data.query.limit) || 10;
    const empID = data.query.empID;

    const offset = (page - 1) * limit;
    const whereValues = [];
    let whereClause = " where 1=1 "
    if (empID) {
        whereClause += " and id=? "
        whereValues.push(empID);
    }

    conn.query(`SELECT count(*) as total_employee FROM employees ${whereClause}`, whereValues, (err, result) => {
        if (err) {
            return callback(err, result);
        }

        const totalEmp = result[0].total_employee;
        return conn.query(`SELECT * from employees ${whereClause}  limit  ? offset ? `, [...whereValues, limit, offset], (err, result) => {
            if (err) {
                return callback(err, result);
            }
            return callback(err, {
                total: totalEmp,
                pages: Math.ceil(totalEmp / limit),
                limit: limit,
                cpage: page,
                data: result,
            })

        })
    });
}
export function getEmployeeById(empi, cadllback) {
    return conn.query('SELECT * from employees where id = ?', [empid], callback);
}