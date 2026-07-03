import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ViewEmployee() {
  const [employee, setEmployee] = useState([]);
  const [isloading, setisloading] = useState(true)
  const empId = useParams().id;
  async function fetchEnployee() {
    try {
      const response = await fetch(`http://localhost:3000/api/employee/view/${empId}`);
      if (response.status != 200) {
        return console.log("Internal Server error...");
      }
      const value = await response.json();
      if (value.success) {
        console.log(value.data);
        setEmployee(value.data);
        setisloading(false);
      } else {
        console.log(value);

      }
    } catch (err) {
      console.log(err);
    }


  }

  useEffect(() => {
    fetchEnployee();
  }, [])



  return (
    <div className="container py-5">

      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>
          <h2 className="fw-bold text-primary">
            Employee Profile
          </h2>
          <p className="text-muted mb-0">
            View complete employee information.
          </p>
        </div>

        <Link to="/employees" className="btn btn-outline-primary">
          <i className="bi bi-arrow-left me-2"></i>
          Back
        </Link>

      </div>

      <div className="card border-0 shadow-lg rounded-4">

        {/* Header */}
        <div className="card-header bg-primary text-white text-center py-5 rounded-top-4">

          <img
            src="https://i.pravatar.cc/150?img=1"
            alt="Employee"
            className="rounded-circle border border-4 border-white shadow mb-3"
            width="130"
            height="130"
          />

          <h3 className="fw-bold mb-1">
            Anand Srivastava
          </h3>

          <p className="mb-0">
            Frontend Developer
          </p>

        </div>

        {/* Details */}
        <div className="card-body p-5">

          <div className="row">

            <div className="col-md-6 mb-4">
              <h6 className="text-muted">Employee ID</h6>
              <p className="fw-semibold fs-5">EMP001</p>
            </div>

            <div className="col-md-6 mb-4">
              <h6 className="text-muted">Department</h6>
              <p className="fw-semibold fs-5">IT Department</p>
            </div>

            <div className="col-md-6 mb-4">
              <h6 className="text-muted">Email Address</h6>
              <p className="fw-semibold fs-5">
                anand@gmail.com
              </p>
            </div>

            <div className="col-md-6 mb-4">
              <h6 className="text-muted">Phone Number</h6>
              <p className="fw-semibold fs-5">
                +91 9876543210
              </p>
            </div>

            <div className="col-md-6 mb-4">
              <h6 className="text-muted">Salary</h6>
              <p className="fw-semibold fs-5 text-success">
                ₹50,000 / Month
              </p>
            </div>

            <div className="col-md-6 mb-4">
              <h6 className="text-muted">Joining Date</h6>
              <p className="fw-semibold fs-5">
                15 Jan 2024
              </p>
            </div>

            <div className="col-md-6 mb-4">
              <h6 className="text-muted">Status</h6>

              <span className="badge bg-success fs-6 px-3 py-2">
                Active
              </span>
            </div>

            <div className="col-md-6 mb-4">
              <h6 className="text-muted">Experience</h6>
              <p className="fw-semibold fs-5">
                3 Years
              </p>
            </div>

            <div className="col-12">
              <h6 className="text-muted">Address</h6>

              <p className="fw-semibold fs-5">
                Alambagh, Lucknow,
                Uttar Pradesh - 226005
              </p>
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="card-footer bg-light d-flex justify-content-end gap-3 py-3">

          <Link
            to={"/employees/edit/" + useParams().id}
            className="btn btn-warning"
          >
            <i className="bi bi-pencil-square me-2"></i>
            Edit
          </Link>

          <Link
            to="/employees"
            className="btn btn-secondary"
          >
            <i className="bi bi-arrow-left me-2"></i>
            Back to List
          </Link>

        </div>

      </div>

    </div>
  );
}

export default ViewEmployee;