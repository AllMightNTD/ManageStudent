import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../screens/Dashboard/Dashboard";
import { Login } from "../screens/Auth/Login";
import { RequireAuth } from "./RequireAuth";
import { Layout } from "../components/Layout";
import { Student } from "../screens/StudentClasses";
import { Billing } from "../screens/Billing";
import { Setting } from "../screens/Settings";
import { Exam } from "../screens/Exams";
import { Teacher } from "../screens/Teachers";
import React from "react"
import { NotFound } from "../screens/NotFound/NotFound";

interface RouterItem {
    path:string,
    element:JSX.Element
}
const router:RouterItem[] = [
    {
        path:'/dashboard',
        element:<Dashboard/>
    },
    {
        path:'/teacher',
        element:<Teacher/>
    },
    {
        path:'/student-classes',
        element:<Student/>
    },
    {
        path:'/billing',
        element:<Billing/>
    },
    {
        path:'/setting',
        element:<Setting/>
    },
    {
        path:'/exam',
        element:<Exam/>
    }
]

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route
                path="/"
                element={
                    <RequireAuth>
                        <Layout/>
                    </RequireAuth>
                }
            >
            {
                router.map((item,index)=>{
                    return <Route key={index} path={item.path} element={item.element}/>
                })
            }
          
           </Route>
           <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
export { Router };
