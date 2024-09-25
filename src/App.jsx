import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import { ThemeProvider } from "@/contexts/theme-context";

import Layout from "@/routes/layout";
import DashboardPage from "@/routes/dashboard/page";
import HeroSection from "./routes/Hero/HeroSection";
import Acc from "./routes/Account/Acc";
import CopyTrading from "./routes/CopyTrading/CopyTrading";
import Signup from "./routes/Signup/Signup";
import Login from "./routes/Login/Login";

function App() {
    // const router = createBrowserRouter([
    //     {
    //         path: "/",
    //         element: <Layout />,
    //         children: [
    //             {
    //                 index: true,
    //                 element: <DashboardPage />,
    //             },
    //             {
    //                 path: "analytics",
    //                 element: <h1 className="title">Analytics</h1>,
    //             },
    //             {
    //                 path: "reports",
    //                 element: <h1 className="title">Reports</h1>,
    //             },
    //             {
    //                 path: "customers",
    //                 element: <h1 className="title">Customers</h1>,
    //             },
    //             {
    //                 path: "new-customer",
    //                 element: <h1 className="title">New Customer</h1>,
    //             },
    //             {
    //                 path: "verified-customers",
    //                 element: <h1 className="title">Verified Customers</h1>,
    //             },
    //             {
    //                 path: "products",
    //                 element: <h1 className="title">Products</h1>,
    //             },
    //             {
    //                 path: "new-product",
    //                 element: <h1 className="title">New Product</h1>,
    //             },
    //             {
    //                 path: "inventory",
    //                 element: <h1 className="title">Inventory</h1>,
    //             },
    //             {
    //                 path: "settings",
    //                 element: <h1 className="title">Settings</h1>,
    //             },
    //         ],
    //     },
    // ]);

    return (
        <ThemeProvider storageKey="theme">
            <Router>
                <Routes>
                    <Route path="/" element={<HeroSection />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    
                    {/* Dashboard with nested routes */}
                    <Route path="/dashboard" element={<Layout />}>
                        <Route path="summary" index element={<DashboardPage />} />
                        <Route path="account" element={<Acc />} />
                        <Route path="copytrading" element={<CopyTrading />} />
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;