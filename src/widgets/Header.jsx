import { NavLink, Link } from "react-router-dom";
import Container from "../components/common/Conteiner";
const Header = () => {
  return (
    // fixed w-full z-10  bg-blue-800 bg-gradient-to-b from-[#1E40AF] via-[#1E40AF] to-[#0E1D82]
    //
    <header
      class={` sticky top-0  w-full z-[10] bg-black/30 backdrop-blur-[10px]  transition duration-[1000ms] ease-in-out 
     


     
     
     `}
    >
      <Container class="">
        {/* lg:justify-normal */}
        <div class="flex items-center justify-between  lg:justify-between  py-4 ">
          {/*  */}
          <Link
            to="/"
            class=" w-[200px] h-auto  hover:scale-95 transition-all lg:w-[125px]"
          >
            <span class="text-2xl text-white font-bold  ">TEST</span>
            {/* <img width={118} height={30} src={logo} alt="logo" /> */}
          </Link>

          <div class={`  lg:block  `}>
            {/* lg:ml-10  xl:ml-60*/}
            <div class="  flex flex-col lg:flex-row  gap-5 xl:gap-8 text-[12px]  lg:text-[11px] text-white  uppercase">
              {/* <NavLink
                to="/"
                class="text-white  hover:text-white/50 transition-all max-w-max inlin-block"
              >
                HOME
              </NavLink> */}
              <NavLink
                to="/about"
                class="text-white hover:text-white/50 transition-all max-w-max inlin-block"
              >
               About
              </NavLink>
              <NavLink
                to="/products"
                class="text-white hover:text-white/50 transition-all max-w-max inlin-block"
              >
              Products
              </NavLink>
              

              {/* <NavLink to="/personal_office" class=" hover:text-white/50 transition-all">
             
                Персональний кабінет
              
            </NavLink> */}
            </div>
          </div>

          <div class="flex items-center  lg:hidden">
            {/* <ToggleTheme iconClass="w-6 h-6" /> */}
            {/* <ToggleMenu iconClass="w-6 h-6" /> */}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
