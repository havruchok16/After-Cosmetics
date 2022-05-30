/* eslint-disable import/no-cycle */
import { Route, Routes } from "react-router-dom";
import Composition from "./Composition/Composition";
import World from "./World/World";
import SkinTest from "./SkinTest/SkinTest";
import Contact from "./Contact/Contact";

export const assistantRoutes = [
    "/", //
    "/composition",
    "/test",
    "/contact",
];

export const assistantComponents = [
    {
        route: assistantRoutes[0],
        component: World,
    },
    {
        route: assistantRoutes[1],
        component: Composition,
    },
    {
        route: assistantRoutes[2],
        component: SkinTest,
    },
    {
        route: assistantRoutes[3],
        component: Contact,
    },
];

export default function AssistantRoutes(props) {
    return (
        <Routes>
            {assistantComponents.map((r, index) => {
                const RenderComponent = r.component;
                return (
                    <Route //
                        key={index.toString()}
                        path={r.route}
                        element={<RenderComponent {...props} />}
                        exact
                        strict
                    />
                );
            })}
        </Routes>
    );
}
