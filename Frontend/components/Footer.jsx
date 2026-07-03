function Footer() {
  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container py-4">

        <div className="row">

          {/* Project Info */}
          <div className="col-md-6 mb-3 mb-md-0">
            <h5 className="fw-bold">Employee CRUD</h5>
            <p className="text-secondary mb-0">
              A modern Employee Management System built with React,
              Express, Node.js & MySQL.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-3 mb-md-0">
            <h6 className="fw-semibold">Quick Links</h6>

            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-decoration-none text-light">
                  Home
                </a>
              </li>

              <li>
                <a href="/employees" className="text-decoration-none text-light">
                  Employees
                </a>
              </li>

              <li>
                <a href="/employees/add" className="text-decoration-none text-light">
                  Add Employee
                </a>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="col-md-3">
            <h6 className="fw-semibold">Follow Us</h6>

            <a href="#" className="text-light fs-4 me-3">
              <i className="bi bi-github"></i>
            </a>

            <a href="#" className="text-light fs-4 me-3">
              <i className="bi bi-linkedin"></i>
            </a>

            <a href="#" className="text-light fs-4">
              <i className="bi bi-twitter-x"></i>
            </a>
          </div>

        </div>

        <hr className="border-secondary my-4" />

        <div className="text-center text-secondary">
          © {new Date().getFullYear()} Employee CRUD. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;