import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="text-center">

        {/* Error Icon */}
        <div className="mb-4">
          <i
            className="bi bi-exclamation-triangle-fill text-warning"
            style={{ fontSize: "5rem" }}
          ></i>
        </div>

        {/* 404 */}
        <h1
          className="display-1 fw-bold text-primary"
          style={{ fontSize: "7rem" }}
        >
          404
        </h1>

        {/* Title */}
        <h2 className="fw-bold mb-3">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-muted mb-4 mx-auto" style={{ maxWidth: "500px" }}>
          The page you're looking for doesn't exist or may have been moved.
          Please check the URL or return to the homepage.
        </p>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-3 flex-wrap">

          <Link to="/" className="btn btn-primary btn-lg">
            <i className="bi bi-house-door-fill me-2"></i>
            Go Home
          </Link>

          <Link to="/employees" className="btn btn-outline-primary btn-lg">
            <i className="bi bi-people-fill me-2"></i>
            Employee List
          </Link>

        </div>

      </div>
    </div>
  );
}

export default NotFound;