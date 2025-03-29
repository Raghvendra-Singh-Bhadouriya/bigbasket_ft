import { Routes, Route } from "react-router-dom";

import Home from "../Body/Home";
import LoginSignup from "../Body/LoginSignup";

import FruitsAndVeggies from "../Body/NavPages/FruitsAndVeggies";
import BeveragesTea from "../Body/NavPages/BeveragesTea";
import GheeVanaspati from "../Body/NavPages/GheeVanaspati";
import ProductDetail from "../Body/Pages/ProductDetail";

function AllRoutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login&signup" element={<LoginSignup/>}/>
            <Route path="/fruits-veggies/fruits-vegetables" element={<FruitsAndVeggies/>}/>
            <Route path="/beverages/tea" element={<BeveragesTea/>}/>
            <Route path="/foodgrains-oil-masala/edible-oils-ghee/ghee-vanaspati/" element={<GheeVanaspati/>}/>
            <Route path="/product-detail/:category/:id" element={<ProductDetail/>}/>
        </Routes>
        </>
    )
}

export default AllRoutes;