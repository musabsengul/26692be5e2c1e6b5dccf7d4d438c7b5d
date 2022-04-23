import './assets/styles/index.css';
import "./plugins/fontawesome"
import {Routes, Route} from "react-router-dom";
import Dashboard from "./views/Dashboard";
import ProductDetail from "./views/ProductDetail";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route exact path="/product-detail/:id" element={<ProductDetail/>}/>
        </Routes>
    );
}

export default App;
