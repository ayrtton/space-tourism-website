import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Footer from "./components/Footer";
import data from "./data/data.json";


function AppRoutes() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/destination" element={<Destination destinations={data.destinations}/>}></Route>
                <Route path="/crew" element={<Crew crew={data.crew}/>}></Route>
            </Routes>
            <Footer />
        </Router>
    );
}

export default AppRoutes;