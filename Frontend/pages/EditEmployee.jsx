function EditEmployee() {
  return (
    <div className="container py-5">

      {/* Page Title */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-warning">
          Edit Employee
        </h1>
        <p className="text-muted">
          Update employee information below.
        </p>
      </div>

      {/* Card */}
      <div className="card shadow-lg border-0 rounded-4">

        <div className="card-header bg-warning text-dark py-3 rounded-top-4">
          <h4 className="mb-0">
            <i className="bi bi-pencil-square me-2"></i>
            Update Employee Details
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
                  defaultValue="Anand"
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
                  defaultValue="Srivastava"
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
                  defaultValue="anand@gmail.com"
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
                  defaultValue="9876543210"
                />
              </div>

              {/* Department */}
              <div className="col-md-6 mb-4">
                <label className="form-label fw-semibold">
                  Department
                </label>

                <select className="form-select" defaultValue="IT">
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
                  defaultValue="Software Developer"
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
                  defaultValue="50000"
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
                  defaultValue="2024-01-15"
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
                  defaultValue="Lucknow, Uttar Pradesh, India"
                ></textarea>
              </div>

            </div>

            {/* Buttons */}
            <div className="d-flex justify-content-end gap-3">

              <button
                type="button"
                className="btn btn-outline-secondary px-4"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn btn-warning text-dark px-4 fw-semibold"
              >
                <i className="bi bi-check-circle me-2"></i>
                Update Employee
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
}

export default EditEmployee;