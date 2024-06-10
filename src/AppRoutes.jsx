import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function AppRoutes() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
            <Footer />
        </Router>
    );

}

export default AppRoutes;