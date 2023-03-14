import path from "path";
import { RouteObject } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ComponentsDemo from "../components/ComponentsDashboard/componentsDemo";
import ResumePage from "../components/ResumeDashboard/resumePage";
import WineDashboard from "../components/wineDashboard/wineDashboard";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <ResumePage />},
            {path: 'wines', element: <WineDashboard />},
            {path: 'componentsDemo', element: <ComponentsDemo />}
            
        ]
    }
]

export const router = createBrowserRouter(routes);