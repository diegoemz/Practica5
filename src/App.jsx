import { Route } from "react-router";
import { Routes } from "react-router";
import { BrowserRouter } from "react-router";
import IndexPage from "./pages/IndexPage";
import FavoritesPage from "./pages/FavoritesPage";
import Layout from "./layout/Layout";
import { Notification } from "./components/Notification"; 

export const App = () => {
    return (
        <BrowserRouter>
            <Notification />
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<IndexPage />} />
                    <Route path="/favoritos" element={<FavoritesPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
