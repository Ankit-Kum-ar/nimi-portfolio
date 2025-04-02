import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home/Home"
import Product from "./Pages/Product/Product"
import Contact from "./Pages/ContactUs/Contact"
import People from "./Pages/People/People"
import AboutUs from "./Pages/AboutUs/AboutUs"
import PersonDetails from "./Pages/People/components/PersonDetails"
import Office from "./Pages/Offices/Office"
import News from "./Pages/News/News"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<PersonDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/office" element={<Office />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App