import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./components/Category/Category";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import AppContext from "./utils/context";
import GlobalStyles from "./GlobalStyles";
import ScrollToTop from "./components/ScrollToTop";

function App() {
   return (
      <BrowserRouter>
         {window.scrollTo(0, 0)}
         <AppContext>
            <GlobalStyles />
            <Header />
            <ScrollToTop />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/category/:id" element={<Category />} />
               <Route path="/product/:id" element={<SingleProduct />} />
            </Routes>
            <Newsletter />
            <Footer />
         </AppContext>
      </BrowserRouter>
   );
}

export default App;
