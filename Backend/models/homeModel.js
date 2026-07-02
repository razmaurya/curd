import conn from '../config.js'

export default function getHomeData(callback) {
    return conn.query('SELECT count(employee_code) as employee,sum(status="Active") as active, sum(status="Inactive") as inactive, count(distinct department) as department,count(distinct designation) as designation from employees', callback);
}