import { Link } from "react-router-dom";

import logo from "../images/logo.png";

import Container from "../components/common/Conteiner";

const Footer = () => {
  return (
   
    <footer className=" pt-8 lg:pt-[60px] text-white bg-bgDark">
      <Container>
        <div className="lg:flex justify-between  ">
          <div>

          
          <Link
            to="/"
            className=" w-[200px] lg:w-[118px]  h-auto  hover:scale-95 transition-all"
          >
           
            <img className="w-[150px] h-auto" width={118} height={30} src={logo} alt="logo" />
          </Link>

          <div className="flex gap-10 mt-10  text-[12px] lg:mt-none lg:justify-between  ">
           
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10s">
             
              
              <Link
                to="/"
                className="uppercase  text-white/50 hover:text-white cursor-pointer transition-all "
                >
                HOME
                </Link>
             
              <Link  to="tabs/dummyTable.js" className="uppercase  text-white/50 hover:text-white cursor-pointer transition-all ">
                TABLE
              </Link>
              <Link to="tabs/dummyChart.js"  className="uppercase  text-white/50 hover:text-white cursor-pointer transition-all ">
                CHART
              </Link>
              <Link  to="tabs/dummyList.js"  className="uppercase  text-white/50 hover:text-white cursor-pointer transition-all ">
              List
              </Link>
            </div>
          </div>
          </div>

          <div className="flex gap-10 mt-5 lg:mt-0 items-end">
            {/* <h3 className="text-white">Підписуйтесь на нас у соцмережах</h3> */}

            <ul className="flex gap-4 mt-10 ">
              <li>
                <a
                  className="p-1  hover:bg-white/10 flex items-center rounded border border-white/50 transition-all"
                  href={"https://www.linkedin.com/in/"}
                  target="blank"
                >
                  <svg
                    className=" fill-white w-6 h-6"
                    // focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    // style="color: white;"
                  >
                    <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  className="p-1 hover:bg-white/10 flex items-center rounded border border-white/50 transition-all"
                  href={"https://www.instagram.com/"}
                  target="blank"
                >
                  <svg
                    className="fill-white w-6 h-6"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  className="p-1 hover:bg-white/10 flex items-center rounded border border-white/50 transition-all"
                  href={"https://www.instagram.com/"}
                  target="blank"
                  // rel="noopener noreferrer"
                  // aria-label="Instagram"
                >
                  <svg
                    className="fill-white w-6 h-6"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  className="p-1 hover:bg-white/10 flex items-center rounded border border-white/50 transition-all"
                  href={"https://www.instagram.com/"}
                  target="blank"
                  // rel="noopener noreferrer"
                  // aria-label="Instagram"
                >
                  <svg
                    className="fill-white w-6 h-6"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
     
      <div className="text-center mt-[50px] py-[13px]  w-full bg-black text-[#7C7C7C] hover:text-white/70 transition-all">
        © 2023 Backendless
      </div>
    </footer>
  );
};

export default Footer;
