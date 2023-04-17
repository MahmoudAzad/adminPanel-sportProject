import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./layout/mainLayout";
import ShowDetailProductLayout from "./layout/showDetailProductLayout";
import ShowProductsLayout from "./layout/showProductsLayout";
import HomePanel from "./pages/homePanel";
import Test from "./pages/test";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />} >
                    <Route path="" element={<HomePanel />} />
                    <Route path="/show-products/:endPath" element={<ShowProductsLayout />} />
                    {/* <Route path="/show-detail-product" element={<ShowDetailProductLayout />} /> */}
                    <Route path="/show-detail-product" element={<Test />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;