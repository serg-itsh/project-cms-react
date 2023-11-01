// import { lazy, Suspense } from 'react';

// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./widgets/Header";
import Home from "./pages/Home";
import DummyTable from "./pages/DummyTable.jsx";
import DummyChart from "./pages/DummyChart";
import DummyList from "./pages/DummyList";

import Footer from "./widgets/Footer";

import tabsData from "./tabs.json";

const tabs = tabsData;
console.log(tabs[0].path);

function App() {
  return (
    <div>
      <>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* {tabs.map((tab) => (
            // <Route
            //   key={tab.id}
            //   path={`/${tab.id}`}
            //   // component={lazy(() => import(`./tabs/${tab.path}`))}
            //   component={() => import(`./${tab.path}`)}
            //   className="active"
            // />
       

            <Route
            key={tab.id}
            path={`/${tab.id}`}
           
            element={ 
              <Suspense fallback={<div>Loading...</div>}>
               {lazy(() => import(`./${tab.path}`))}
            
              </Suspense>
            }
          />
          ))} */}
        
          <Route path={tabs[0].path} element={<DummyTable />} />
          <Route path={tabs[1].path} element={<DummyChart />} />
          <Route path={tabs[2].path} element={<DummyList />} />
        </Routes>
        <Footer />
      </>
    </div>
  );
}

export default App;
