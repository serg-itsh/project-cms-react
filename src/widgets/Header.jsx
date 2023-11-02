import { useState } from "react";

import { NavLink, Link } from "react-router-dom";
import Container from "../components/common/Conteiner";
import ToggleMenu from "../components/features/ToggleMenu";

const Header = () => {
  const [isShown, setIsShown] = useState(false);
  return (
   
    <header
      className={` bg-black/10 backdrop-blur-[10px]  transition duration-[1000ms] ease-in-out 
     
     
     `}
    >
      <Container className="">
       
        <div className="py-5 lg:py-3  flex items-center justify-between  lg:justify-between   border-b border-black ">
          {/*  */}
          <Link
            to="/"

            className=" w-[200px] h-auto  hover:scale-95 transition-all lg:w-[125px]"
          >
           
            <img
              className="w-[150px] h-auto"
              width={118}
              height={30}
              src="https://support.backendless.com/uploads/default/original/2X/4/4ade7ca8e305b50307d71ad1474aed2c6bad783a.png"
              alt="Backendless"
            />
          </Link>

          <div className={`  lg:block ${isShown ? "block absolute top-[72px] left-0 w-full h-screen bg-bgDark z-[5] p-10 transition-all text-[20px] text-white/70  " : "hidden"} `} >
           
            <div
              className="  flex flex-col font-[700]  lg:flex-row  gap-5 xl:gap-8 text-[12px]  lg:text-[11px]  uppercase"
              onClick={() => {
                if (window.innerWidth < 768) {
                  setIsShown(!isShown);
                 
                }
              }}
            >
              <NavLink
                to="/"
                className=" p-2 px-4 rounded  transition-all max-w-max inlin-block"
              >
                HOME
              </NavLink>
              <NavLink
                to="tabs/dummyTable"
                className="p-2 px-4 rounded  transition-all max-w-max inlin-block"
              >
                Table
              </NavLink>
              <NavLink
                to="tabs/dummyChart"
                className="p-2 px-4 rounded  transition-all max-w-max inlin-block"
              >
                Chart
              </NavLink>
              <NavLink
                to="tabs/dummyList"
                className="p-2 px-4 rounded  transition-all max-w-max inlin-block"
              >
                List
              </NavLink>
            </div>
          </div>

          <div className="flex items-center  lg:hidden">
            <ToggleMenu setIsShown={setIsShown} isShown={isShown} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
