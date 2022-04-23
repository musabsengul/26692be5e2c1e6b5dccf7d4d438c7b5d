import './assets/styles/index.css';
import "./plugins/fontawesome"
import {Routes, Route} from "react-router-dom";
import Dashboard from "./views/Dashboard";
import ProductDetail from "./views/ProductDetail";
import {AppContext} from "./plugins/contexts";
import useGet from "./hook/useGet";
import {constant} from "./config/constant";

function App() {
    const {data: products, loading} = useGet({url: constant.API_URL, responseSrc: "products"})
    return (
        <AppContext.Provider value={{
            products, loading
        }}>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route exact path="/product-detail/:id" element={<ProductDetail/>}/>
            </Routes>
        </AppContext.Provider>
    );
}

export default App;
