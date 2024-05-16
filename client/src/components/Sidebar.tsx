import { IoMdClose } from "react-icons/io";


const Sidebar = () => {

    return(
        <div className=" lg:w-[30vw] sm:w-[100%] md:w-[100%]  h-[100vh] bg-slate-900 absolute left-0">
            <ul className=" list-none flex justify-center items-center flex-col">
                <li> <IoMdClose className="size-7 cursor-pointer"/> </li>
                <li>Home</li>
                <li>Watchlist</li>
            </ul>
        </div>
    )
}
export default Sidebar;