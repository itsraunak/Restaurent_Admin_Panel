import { Fragment } from "react";
import Sidebar from "./sidebar";
import Header from "./Header";

const Layout = ({ children }) =>
{
    return (
        <Fragment>
            <div className="flex w-screen max-w-full h-screen" > 
                <Sidebar />
            <div className="w-screen">
                <Header />
                {children}
            </div>
        </div>
        </Fragment>
    )
}

export default Layout