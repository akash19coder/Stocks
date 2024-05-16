import { Avatar } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { FaListUl } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router-dom";
import WatchList from "../pages/WatchList";

const Header = () => {
    const [showSideBar, setShowSideBar] = useState<boolean>(false);

    const handleMenuClick = () => {
        setShowSideBar(!showSideBar);
    }
    return (
        <>
            <div className="bg-[#0000A0] text-white flex flex-row justify-between">
                <h3 className="font-sans font-medium flex items-center gap-6">
                    <RxHamburgerMenu className=" text-white size-7 cursor-pointer hover:bg-gray-500 rounded-full box-content p-2 ml-6" onClick={handleMenuClick} />
                    BlendNet.ai Finance
                </h3>
                <h3 className="mr-10 flex items-center">
                    <Avatar className="size-3" />
                </h3>
            </div>
            {showSideBar ? <div className="sm:w-[100vw] md:w-[100vw] lg:w-[30vw] h-[100vh] bg-slate-600 absolute left-0 top-0 transition delay-1000">
                <div className="mt-3 list-none flex justify-center  items-center flex-col">
                    <div className="mb-4 text-center text-white flex flex-row gap-10 justify-between items-center">
                        <div> BlendNet.ai Finance </div>
                        <div> <IoMdClose className="size-7 cursor-pointer text-white hover:bg-gray-500 rounded-full box-content p-1" onClick={handleMenuClick} /> </div>
                    </div>
                    <Link to="/home" className="cursor-pointer float-right w-full text-white hover:bg-white hover:text-black box-content p-2 hover:w-full font-semibold flex flex-row items-center justify-center gap-x-4">
                        <GoHome className="size-5 block float-left" />
                        <h3 className="text-center">Home</h3>
                    </Link>
                    <Link to="/watchlist" className="cursor-pointer float-left w-full text-white hover:bg-white hover:text-black box-content p-2  font-semibold flex flex-row items-center justify-center gap-x-4">
                        
                            <FaListUl className="size-4 mr-1 float-left" />
                            <h3 className="text-center">Watchlist</h3>
                       
                    </Link>
                </div>
            </div> : ' '}
        </>
    )
}
export default Header;