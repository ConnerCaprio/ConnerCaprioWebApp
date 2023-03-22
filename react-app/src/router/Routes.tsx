import path from "path";
import { RouteObject } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ComponentsDemo from "../components/ComponentsDashboard/componentsDemo";
import ResumePage from "../components/ResumeDashboard/resumePage";
import AddWine from "../components/wineDashboard/AddWine/AddWine";
import WineDashboard from "../components/wineDashboard/wineDashboard";
import WineDetails from "../components/wineDashboard/WineDetails/WineDetails";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <ResumePage />},
            {path: 'wines', element: <WineDashboard />},
            {path: 'componentsDemo', element: <ComponentsDemo />},
            {path: 'wines/add/', element: <AddWine />},
            {path: 'wines/details/:id', element: <WineDetails />}
            
        ]
    }
]

export const router = createBrowserRouter(routes);