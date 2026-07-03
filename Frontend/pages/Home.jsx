import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Employees from "./Employees";

function Home() {
    const [Department, setDepartment] = useState(0);
    const [employee, setemployee] = useState(0);
    const [active_staff, setActive_staff] = useState(0);
    const [Roles, setRoles] = useState(0);
    async function gethomedata() {
        try {
            const response = await fetch('http://localhost:3000/api/home');
            if (response.status != 200) {
                return console.log(response.text);
            }
            const data = await response.json();
            if (data.success) {
                console.log(data);
                
                setDepartment(data.data[0].department)
                setActive_staff(data.data[0].active)
                setRoles(data.data[0].designation)
                setemployee(data.data[0].employee)
            } else {
                console.log(data);

            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        gethomedata();
    }, [])




    return (
        <div>

            {/* Hero Section */}
            <section className="bg-primary text-white py-5">
                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-lg-6">
                            <h1 className="display-4 fw-bold">
                                Employee Management System
                            </h1>

                            <p className="lead mt-3">
                                A modern CRUD application built using React, Express,
                                Node.js and MySQL to manage employee records efficiently.
                            </p>

                            <div className="mt-4">
                                <Link to="/employees" className="btn btn-light btn-lg me-3">
                                    View Employees
                                </Link>

                                <Link to="/add" className="btn btn-outline-light btn-lg">
                                    Add Employee
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 text-center mt-5 mt-lg-0">
                            <img
                                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700"
                                alt="Employees"
                                className="img-fluid rounded shadow"
                            />
                        </div>

                    </div>

                </div>
            </section>

            {/* Statistics */}
            <section className="py-5 bg-light">
                <div className="container">

                    <div className="row g-4">

                        <div className="col-md-3">
                            <div className="card border-0 shadow text-center p-4">
                                <i className="bi bi-people-fill text-primary display-4"></i>
                                <h2 className="fw-bold mt-3">{employee}+</h2>
                                <p className="text-muted mb-0">Employees</p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card border-0 shadow text-center p-4">
                                <i className="bi bi-building text-success display-4"></i>
                                <h2 className="fw-bold mt-3">{Department}</h2>
                                <p className="text-muted mb-0">Departments</p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card border-0 shadow text-center p-4">
                                <i className="bi bi-person-check-fill text-warning display-4"></i>
                                <h2 className="fw-bold mt-3">{active_staff}</h2>
                                <p className="text-muted mb-0">Active Staff</p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card border-0 shadow text-center p-4">
                                <i className="bi bi-award-fill text-danger display-4"></i>
                                <h2 className="fw-bold mt-3">{Roles}</h2>
                                <p className="text-muted mb-0">Roles</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* Features */}
            <section className="py-5">
                <div className="container">

                    <div className="text-center mb-5">
                        <h2 className="fw-bold">
                            Features
                        </h2>

                        <p className="text-muted">
                            Everything you need to manage employees efficiently.
                        </p>
                    </div>

                    <div className="row g-4">

                        <div className="col-md-4">
                            <div className="card border-0 shadow h-100 text-center p-4">
                                <i className="bi bi-person-plus-fill display-4 text-primary"></i>

                                <h4 className="mt-3">
                                    Add Employee
                                </h4>

                                <p className="text-muted">
                                    Easily add new employees with a simple and user-friendly form.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card border-0 shadow h-100 text-center p-4">
                                <i className="bi bi-pencil-square display-4 text-warning"></i>

                                <h4 className="mt-3">
                                    Update Details
                                </h4>

                                <p className="text-muted">
                                    Modify employee information anytime with ease.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card border-0 shadow h-100 text-center p-4">
                                <i className="bi bi-trash-fill display-4 text-danger"></i>

                                <h4 className="mt-3">
                                    Delete Records
                                </h4>

                                <p className="text-muted">
                                    Remove employee records securely whenever required.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="bg-dark text-white py-5">
                <div className="container text-center">

                    <h2 className="fw-bold">
                        Ready to Manage Your Employees?
                    </h2>

                    <p className="lead my-3">
                        Start organizing employee records with our modern CRUD application.
                    </p>

                    <Link to="/employees" className="btn btn-primary btn-lg">
                        Get Started
                    </Link>

                </div>
            </section>

        </div>
    );
}

export default Home;