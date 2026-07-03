function AddEmployee() {
  return (
    <div className="container py-5">

      {/* Page Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">Add New Employee</h1>
        <p className="text-muted">
          Fill in the employee details below to add a new record.
        </p>
      </div>

      {/* Card */}
      <div className="card shadow-lg border-0 rounded-4">

        <div className="card-header bg-primary text-white py-3 rounded-top-4">
          <h4 className="mb-0">
            <i className="bi bi-person-plus-fill me-2"></i>
            Employee Information
          </h4>
        </div>

        <div className="card-body p-4">

          <form>

            <div className="row">

              {/* First Name */}
              <div className="col-md-6 mb-4">
                <label className="form-label fw-semibold">
                  First Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter First Name"
                />
              </div>

              {/* Last Name */}
              <div className="col-md-6 mb-4">
                <label className="form-label fw-semibold">
                  Last Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Last Name"
                />
              </div>

              {/* Email */}
              <div className="col-md-6 mb-4">
                <label className="form-label fw-semibold">
                  Email Address
                </label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                />
              </div>

              {/* Phone */}
              <div className="col-md-6 mb-4">
                <label className="form-label fw-semibold">
                  Phone Number
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Phone Number"
                />
              </div>

              {/* Department */}
              <div className="col-md-6 mb-4">
                <label className="form-label fw-semibold">
                  Department
                </label>

                <select className="form-select">
                  <option>Select Department</option>
                  <option>IT</option>
                  <option>HR</option>
                  <option>Finance</option>
                  <option>Marketing</option>
                  <option>Sales</option>
                </select>
              </div>

              {/* Designation */}
              <div className="col-md-6 mb-4">
                <label className="form-label fw-semibold">
                  Designation
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Software Engineer"
                />
              </div>

              {/* Salary */}
              <div className="col-md-6 mb-4">
                <label className="form-label fw-semibold">
                  Salary
                </label>

                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Salary"
                />
              </div>

              {/* Joining Date */}
              <div className="col-md-6 mb-4">
                <label className="form-label fw-semibold">
                  Joining Date
                </label>

                <input
                  type="date"
                  className="form-control"
                />
              </div>

              {/* Address */}
              <div className="col-12 mb-4">
                <label className="form-label fw-semibold">
                  Address
                </label>

                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Enter Complete Address"
                ></textarea>
              </div>

            </div>

            {/* Buttons */}
            <div className="d-flex justify-content-end gap-3">

              <button
                type="reset"
                className="btn btn-outline-secondary px-4"
              >
                Reset
              </button>

              <button
                type="submit"
                className="btn btn-primary px-4"
              >
                <i className="bi bi-save me-2"></i>
                Save Employee
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
}

export default AddEmployee;