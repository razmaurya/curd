import conn from '../config.js'

export function getHomeData(callback) {
    return conn.query('SELECT count(employee_code) as employee,sum(status="Active") as active, sum(status="Inactive") as inactive, count(distinct department) as department,count(distinct designation) as designation from employees', callback);
}


export function getEmployeeData(data, callback) {
    console.log(data.query);
    
    const page =Number(data.query.page) || 1;
    const limit =Number(data.query.limit) || 10;

    const offset = (page - 1) * limit;

    
    return conn.query('SELECT * from employees  limit ? offset ? ', [limit,offset], callback);
}
export function getEmployeeById(empid, callback) {
    return conn.query('SELECT * from employees where id = ?', [empid], callback);
}