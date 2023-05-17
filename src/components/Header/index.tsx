import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="flex text-xl font-bold my-5 items-center justify-between">
            <div>
                logo
            </div>
            <div className="flex items-center justify-between w-[400px]">
                <Link to={"/"}>
                    admin
                </Link>
                <Link to={"/menu"}>
                    menu
                </Link>
                <Link to={"/order"}>
                    order
                </Link>
            </div>
        </div>
    );
};

export default Header;