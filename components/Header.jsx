import React from "react";
// import { PiBagBold } from "react-icons/pi";
import { FiMessageSquare } from "react-icons/fi";
import job from "../public/jobs.png"
import Image from "next/image";
import pay from "../public/payment.png"
import { PiBellSimpleLight } from "react-icons/pi";
import logo from "../public/circleIcon.png"
import { IoIosArrowDown } from "react-icons/io";
function Header() {
    return (
        <>
            <header className="text-gray-600 body-font w-screen md:w-auto z-20 sticky top-0 md:sticky md:top-0 bg-white shadow-lg shadow-gray-400/10">
                <div className="md:container md:mx-auto flex md:flex-wrap p-3 flex-row items-center justify-between">
                    <a className="flex title-font font-medium items-center w-14 md:w-20 text-red-500 bg-gray-200 md:ml-6 text-sm justify-center p-2 ">
                        Logo
                    </a>
                    <nav className=" ml-1 md:ml-auto md:mr-auto flex md:flex-wrap w-[800px] md:w-auto items-center md:text-base md:justify-center md:gap-1 border-[1px] border-gray-300 rounded-full md:rounded-full md:p-2 p-1">
                        {/* <PiBagBold className="text-xl "/> */}
                        <button className="items-center bg-red-500 rounded-full border-2 border-red-300 focus:outline-none text-base md:mt-0 md:p-2 p-1 text-white gap-[2px] flex"><Image src={job} width={18} height={18} alt="" />Jobs</button>
                        <a className="md:mr-5 items-center hover:text-orange-500 flex gap-1 text-gray-400 ml-1 md:text-[16px] text-[10px] md:ml-12 cursor-pointer"><FiMessageSquare className="text-xl flex items-center justify-center mt-1"/>Messages</a>
                        <a className="md:mr-5 items-center  hover:text-orange-500 flex gap-1 text-gray-400 ml-4 md:ml-4 md:text-[16px] text-[10px] cursor-pointer"><Image src={pay} alt="" height={28} width={28} />Payments</a>
                        {/* <span className="text-red-600 text-4xl">.</span> */}

                    </nav>
                    <div className="flex  justify-between md:gap-2 items-center">
                        <PiBellSimpleLight className="md:text-3xl text-[25px] md:relative absolute right-1" />
                        <Image src={logo} width={35} height={35} alt="" className="invisible md:visible" />
                        <IoIosArrowDown className="invisible md:visible"/>
                    </div>
                    
                </div>
            </header>
        </>
    )
}

export default Header;
