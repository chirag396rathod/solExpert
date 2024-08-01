import React from "react";
import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
import HomePage from "./Views/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Services from "./Views/Home/Services";
import AboutUs from "./Views/Home/AboutUs";
import NoDataFoundPage from "./Views/NoDataFoundPage";
import ContactUs from "./Views/ContactUs";
import Blogs from "./Views/Blogs";
import BlogPost from "./Views/Blogs/blogPost";
import ServiceDetail from "./Views/Home/ServiceDetalPage";
import CreateBlogs from "./Views/Admin/CreateBlogs";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          Component={() => (
            <>
              <Header />
              <HomePage />
              <Footer />
            </>
          )}
        ></Route>
        <Route
          path="/services"
          Component={() => (
            <>
              <Header />
              <div className="container">
                <Services className="mt-50" />
              </div>
              <Footer />
            </>
          )}
        ></Route>
        <Route
          path="/service/:id"
          Component={() => (
            <>
              <Header />
              <div className="container">
                <ServiceDetail className="mt-50" />
              </div>
              <Footer />
            </>
          )}
        ></Route>
        <Route
          path="/about-us"
          Component={() => (
            <>
              <Header />
              <div className="container">
                <AboutUs className="mt-50" />
              </div>
              <Footer />
            </>
          )}
        ></Route>
        <Route
          path="/contact-us"
          Component={() => (
            <>
              <Header />
              <div className="container">
                <ContactUs />
              </div>
              <Footer />
            </>
          )}
        ></Route>
        <Route
          path="/blogs"
          Component={() => (
            <>
              <Header />
              <div className="container">
                <Blogs className="mt-50" />
              </div>
              <Footer />
            </>
          )}
        ></Route>
        <Route
          path="/blog/:id"
          Component={() => (
            <>
              <Header />
              <div className="container">
                <BlogPost />
              </div>
              <Footer />
            </>
          )}
        ></Route>
        <Route path="/create-blog" Component={() => <CreateBlogs />}></Route>
        <Route path="*" Component={() => <NoDataFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
