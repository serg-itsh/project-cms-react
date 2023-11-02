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


function App() {
  return (
    <div>
      <>
        <Header />

        <Routes>
          <Route path="/project-cms-react" element={<Home />} />
         
        
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
