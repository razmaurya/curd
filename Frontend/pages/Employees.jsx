import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Employees() {
  const [employee, setEmployee] = useState([]);
  const [limit, setLimit] = useState(50);
  const [Page, setPage] = useState(1);
  const [isloading, setisloading] = useState(true)
  const [prebtn, setprebtn] = useState("disabled");
  const [errorTablemessage, seterrorTablemessage] = useState("Loading Employee Data...")
  async function fetchEmployee() {

    try {
      const response = await fetch(`http://localhost:3000/api/employee?empID=5&page=${Page}&limit=${limit}`);
      if (response.status != 200) {
        return console.log("Internal Server error...");
      }
      const value = await response.json();
      if (value.success) {
        console.log(value);
        
        setEmployee(value.data.data);
        setisloading(false);
        if (value.data.length === 0) {
          setisloading(true)
          seterrorTablemessage('No Record Found')
        }
      } else {

        console.log(value);
      }
    } catch (err) {
      console.log(err);
    }


  }

  useEffect(() => {
    fetchEmployee();
  }, [Page])


  return (
    <div className="container py-5">

      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>
          <h2 className="fw-bold text-primary">
            Employee Management
          </h2>
          <p className="text-muted mb-0">
            Manage all employees from one place.
          </p>
        </div>

        <Link to="add" className="btn btn-primary">
          <i className="bi bi-person-plus-fill me-2"></i>
          Add Employee
        </Link>

      </div>

      {/* Search & Filter */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">

          <div className="row g-3">

            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Search Employee..."
              />
            </div>

            <div className="col-md-3">
              <select className="form-select">
                <option>All Departments</option>
                <option>IT</option>
                <option>HR</option>
                <option>Finance</option>
                <option>Marketing</option>
              </select>
            </div>

            <div className="col-md-3">
              <button className="btn btn-outline-primary w-100">
                <i className="bi bi-search me-2"></i>
                Search
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Employee Table */}
      <div className="card shadow border-0">

        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">
            Employee List
          </h5>
        </div>

        <div className="card-body p-0">

          <div className="table-responsive">

            <table className="table table-hover table-striped align-middle mb-0">

              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Designation</th>
                  <th>Salary</th>
                  <th>Status</th>
                  <th className="text-center">Action</th>
                </tr>

              </thead>

              <tbody>
                {isloading ? <tr><td colSpan="9" className="text-center">{errorTablemessage}</td></tr> : employee.map((emp) => {
                  return (
                    <tr key={emp.id}>
                      <td>{emp.employee_code}</td>
                      <td>
                        <img
                          src="https://i.pravatar.cc/45?img=1"
                          alt=""
                          className="rounded-circle"
                        />
                      </td>
                      <td>{emp.first_name}</td>
                      <td>{emp.email}</td>
                      <td>{emp.department}</td>
                      <td>{emp.designation}</td>
                      <td>{emp.salary}</td>
                      <td>

                        <span className={`badge
                           ${emp.status === "Active" ? "bg-success" : emp.status === "Inactive" ? "bg-danger" : "bg-warning"} 
                           `}
                        >
                          {emp.status}
                        </span>

                      </td>
                      <td className="text-center">

                        <Link
                          to={"view/" + emp.id}
                          className="btn btn-info btn-sm me-2"
                        >
                          <i className="bi bi-eye-fill"></i>
                        </Link>

                        <Link
                          to={"edit/" + emp.id}
                          className="btn btn-warning btn-sm me-2"
                        >
                          <i className="bi bi-pencil-square"></i>
                        </Link>

                        <Link to={"delete/" + emp.id} className="btn btn-danger btn-sm">
                          <i className="bi bi-trash-fill"></i>
                        </Link>

                      </td>
                    </tr>
                  )
                })}

              </tbody>

            </table>

          </div>

        </div>

        {/* Footer */}
        <div className="card-footer d-flex justify-content-between align-items-center">

          <small className="text-muted">
           {`Showing ${Page*limit} to ${6} of ${Page*limit} Employees`}
          </small>

          <nav>

            <ul className="pagination pagination-sm mb-0">

              <li onClick={() => Page > 1 ? setPage(Page - 1) : ""} className={`page-item ${Page === 1 ? "disabled" : ""} `}>
                <button className="page-link">
                  Previous
                </button>
              </li>

              <li className="page-item active">
                <button className="page-link">
                  {Page}
                </button>
              </li>

              <li onClick={() => setPage(Page + 1)} className="page-item">
                <button className="page-link">
                  Next
                </button>
              </li>

            </ul>

          </nav>

        </div>

      </div>

    </div >
  );
}

export default Employees;