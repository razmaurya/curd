import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";

import Home from "../pages/Home";
import Employees from "../pages/Employees";
import AddEmployee from "../pages/AddEmployee";
import EditEmployee from "../pages/EditEmployee";
import ViewEmployee from "../pages/ViewEmployee";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/employees" element={<Employees />} />

        <Route path="/employees/add" element={<AddEmployee />} />

        <Route path="/employees/edit/:id" element={<EditEmployee />} />

        <Route path="/employees/view/:id" element={<ViewEmployee />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;