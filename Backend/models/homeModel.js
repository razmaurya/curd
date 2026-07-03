import conn from '../config.js'

export function getHomeData(callback) {
    return conn.query('SELECT count(employee_code) as employee,sum(status="Active") as active, sum(status="Inactive") as inactive, count(distinct department) as department,count(distinct designation) as designation from employees', callback);
}


export function getEmployeeData(callback) {
    return conn.query('SELECT * from employees', callback);
}
export function getEmployeeById(empid, callback) {
    return conn.query('SELECT * from employees where id = ?', [empid], callback);
}