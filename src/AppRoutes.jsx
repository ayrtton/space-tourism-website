import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";
import Footer from "./components/Footer";
import data from "./data/data.json";


function AppRoutes() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/destination" element={<Destination destinations={data.destinations}/>}></Route>
                <Route path="/technology" element={<Technology technology={data.technology}/>}></Route>
            </Routes>
            <Footer />
        </Router>
    );
}

export default AppRoutes;