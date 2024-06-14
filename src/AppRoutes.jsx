import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function AppRoutes() {

    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
            <Footer />
        </Router>
    );

}

export default AppRoutes;