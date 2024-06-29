import Header from "@/components/Header";
import Image from "next/image";
import { SlLocationPin } from "react-icons/sl";
import { LiaCoinsSolid } from "react-icons/lia";
import figma from "../public/figma.png";
import ai from "../public/adobe ai.png";
import xd from "../public/adobe-xd-logo.png";
import squrelogo from "../public/SqureIcon.png";
import { RiDeleteBin5Line, RiUserFollowLine } from "react-icons/ri";
import { GoPencil } from "react-icons/go";
import { TbUsers } from "react-icons/tb";
import { FiMessageSquare, FiEye } from "react-icons/fi";
<FiEye />
export default function Home() {
  return (
    <>
      <main>
        <Header />
        <section className="container border-t-[1px] border-gray-200">
          <div className="flex p-2 md:gap-20 gap-4 items-center text-gray-500 font-[500] md:p-4 md:ml-16 ml-4">
            <li className="md:text-xl text-red-500 font-bold list-none flex flex-col justify-center items-center">
              <span className="text-sm md:text-xl">job preview</span>
              <span className="w-16 bg-red-500 h-[2px] md:relative top-4 z-10"></span>
            </li>
            <li className="list-none text-sm">Applicants</li>
            <li className="list-none text-sm">Match</li>
            <li className="list-none text-sm">Messages</li>
          </div>
        </section>
        <section className="container md:flex-row flex-col border-t-[1px] border-gray-200 flex">
          <div className="flex flex-col gap-3 w-5/6 p-4">
            <div className="md:ml-16">
              <span className="flex justify-between w-screen md:w-auto md:justify-start items-center md:gap-3 gap-1 text-gray-400">
                <h1 className="md:text-4xl font-bold text-gray-800">
                  Senior Product Designer
                </h1>
                <p className="md:text-[12px] text-[9px]">posted 2 days ago</p>
                <span className="w-12 text-green-600 flex justify-center items-center font-bold text-[10px] gap-1 border-[1px] border-green-400 bg-green-200/40 rounded-2xl mr-8 px-1">
                  <span className="font-[900] w-[4px] rounded-full h-[4px] bg-green-500 "></span>
                  Open
                </span>
              </span>
              <div className="flex gap-4 md:text-lg text-sm mt-6 font-[600] text-gray-500">
                <span className="flex items-center justify-between gap-1">
                  <SlLocationPin />
                  Delaware, USA
                </span>
                <span className="flex items-center justify-between gap-1">
                  <LiaCoinsSolid className="md:text-2xl text-xl" />
                  $300k-$400k
                </span>
              </div>
            </div>
            <hr className="w-screen md:w-auto md:mt-6 mt-4" />
            <div className="md:ml-16 md:mt-6 mt-4 md:w-2/3 w-screen pb-3">
              <div className="grid grid-cols-4 gap-4 text-[12px]">
                <li className="text-gray-500 font-[500] list-none">
                  Skills Required
                </li>
                <li className="text-gray-500 font-[500] list-none">
                  Preferred Language
                </li>
                <li className="text-gray-500 font-[500] list-none">Type</li>
                <li className="text-gray-500 font-[500] list-none">
                  Years of Experience
                </li>
              </div>
              <div className="grid grid-cols-4 gap-4 text-[14px] mt-3">
                <li className="text-balck list-none flex">
                  <span className="border-gray-300 border-2 h-6 px-1 rounded-lg flex md:p-1 items-center gap-1">
                    <Image
                      src={figma}
                      height={6}
                      width={6}
                      alt=""
                      className="w-3 md:h-3"
                    />
                    figma
                  </span>
                </li>
                <li className="text-black text-[12px] md:text-sm font-bold list-none ">English</li>
                <li className="text-black text-[12px] md:text-sm font-bold list-none ">Full Time</li>
                <li className="text-black text-[12px] md:text-sm font-bold list-none ">
                  3+ Year of Experience
                </li>
              </div>
              <li className="text-balck text-[12px] list-none flex mt-2">
                <span className="border-gray-300 border-2 rounded-lg flex p-1 items-center gap-1">
                  <Image
                    src={ai}
                    height={6}
                    width={6}
                    alt=""
                    className="w-3 h-3"
                  />
                  Adobe Illustrator
                </span>
              </li>
              <li className="text-balck text-[12px] list-none flex mt-2">
                <span className="border-gray-300 border-2 rounded-lg flex p-1 items-center gap-1">
                  <Image
                    src={xd}
                    height={6}
                    width={6}
                    alt=""
                    className="w-3 h-3"
                  />
                  Adobe XD
                </span>
              </li>
            </div>
            <hr />
            <div className="md:ml-16 mt-6 pb-3 text-[14px] font-[400]">
              <span className="text-gray-500 font-[500]">About the job</span>
              <li>1. Handle the UI/UX research design</li>
              <li>
                2. Work on researching on latest web applications designs &
                trends
              </li>
              <li>3. Work on conceptualizing and visualizing</li>
              <li>
                4. Work on creating graphics content and other graphic related
                works
              </li>
              <span>Benefits:</span>
              <li>Health insurance</li>
              <li>Provident Fund</li>
              <span>Schedule: </span>
              <li>Day shift</li>
              <span>Supplemental pay types:</span>
              <li>Performance bonus </li>
              <li>Yearly bonus </li>
              <span>Work Location:</span> In person
            </div>
            <hr />
            <div className="md:ml-16 mt-6 pb-3 text-[14px] font-[400]">
              <div className="flex gap-1 flex-col w-screen md:w-2/3">
                <div className="flex gap-1 text-[17px] items-center text-gray-600 font-[500]">
                  <Image src={squrelogo} height={37} width={37} alt="" />
                  <p>Atlassian</p>
                </div>
                <span className="grid grid-cols-2 gap-1 text-gray-500 text-[12px] font-[500] mt-4">
                  <p>Company size</p>
                  <p>Type</p>
                </span>
                <span className="grid grid-cols-2 gap-1 font-[500]">
                  <p>1k - 2k Employees</p>
                  <p>Private</p>
                </span>
                <span className="grid grid-cols-2 mt-4 gap-1 text-gray-500 text-[12px] font-[500]">
                  <p>Sector</p>
                  <p>Funding</p>
                </span>
                <span className="grid grid-cols-2 gap-1 font-[500]">
                  <p>Information technology, Infrastructure</p>
                  <p>Bootstrapped</p>
                </span>

                <span className="grid grid-cols-2 mt-4 gap-1 text-gray-500 text-[12px] font-[500]">
                  <p>Founded In</p>
                  <p>Founded By</p>
                </span>
                <span className="grid grid-cols-2 gap-1 font-[500]">
                  <p>2019</p>
                  <p>Scott farquhar, mike cannon-Brooks</p>
                </span>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-3 w-1/3 p-4 border-l-2 border-gray-200 ">
            <div className="flex flex-row justify-around md:w-full w-screen h-auto">
              <button className="flex justify-between h-10 text-red-500 border-2 items-center gap-1 bg-red-500/20 border-red-300 hover:bg-red-500 hover:text-white duration-300 md:px-14 px-8 focus:outline-none rounded-[8px] text-[14px]">
                <RiDeleteBin5Line />
                <span>Delete job</span>
              </button>
              <button className="flex mx-auto  h-10 text-white border-2 items-center gap-1 bg-red-500 border-red-300 hover:bg-red-500 px-14 focus:outline-none rounded-[8px] text-[14px]">
                <GoPencil />
                <span>Edit job</span>
              </button>
            </div>
            <div className="flex flex-col">
              <div className="flex md:justify-between justify-between p-4 md:w-auto w-screen md:p-4">
                <span className="flex gap-2 items-center text-gray-700 text-[14px]">
                  <TbUsers />
                  Applicants
                </span>
                <span className="font-bold">400</span>
              </div>
              <hr className="w-screen md:w-auto" />
              <div className="flex md:justify-between justify-between p-4 md:w-auto w-screen md:p-4">
                <span className="flex gap-2 items-center text-gray-700 text-[14px]"><RiUserFollowLine />Matches</span>
                <span className="font-bold">100</span>
              </div>
              <hr className="w-screen md:w-auto" />
              <div className="flex md:justify-between justify-between p-4 md:w-auto w-screen md:p-4">
                <span className="flex gap-2 items-center text-gray-700 text-[14px]"><FiMessageSquare />Applicants</span>
                <span className="font-bold">147</span>
              </div>
              <hr className="w-screen md:w-auto" />
              <div className="flex md:justify-between justify-between p-4 md:w-auto w-screen md:p-4">
                <span className="flex gap-2 items-center text-gray-700 text-[14px]"><FiEye />Applicants</span>
                <span className="font-bold">800</span>
              </div>
              <hr />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
