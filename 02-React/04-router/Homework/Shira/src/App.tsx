import { BrowserRouter, Routes, Route } from "react-router-dom";
// import your route components too

import Main from "./view/pages/main/Main";
import Home from "./view/pages/home/Home";
import About from "./view/pages/about/About";
import Profile from "./view/pages/profile/Profile";
import Products from "./view/pages/products/Products";
import Page404 from "./view/pages/404/404";

import'./view/styles/app.scss'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<Main />}>
          {/* OUTLET */}

          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path="profile" element={<Profile />} />
          <Route path='products' element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
