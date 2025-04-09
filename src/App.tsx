import { Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home/Home"
import Product from "./Pages/Product/Product"
import Contact from "./Pages/ContactUs/Contact"
import People from "./Pages/People/People"
import AboutUs from "./Pages/AboutUs/AboutUs"
import PersonDetails from "./Pages/People/components/PersonDetails"
import Office from "./Pages/Offices/Office"
import ProductDetails from "./Pages/Product/components/ProductDetails"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addProductData } from "./redux/slices/productSlice"



import News from "./Pages/News/News"

function App() {

    const dispatch = useDispatch()
    
    useEffect(() => {
      fetch("https://api.sheetbest.com/sheets/c0395f84-a71c-482e-a914-e8136e51f495")
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          const reversedData = data.reverse(); 
          dispatch(addProductData(reversedData));
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
    }, [dispatch]);
    
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<PersonDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/office" element={<Office />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Toaster />
      <Footer />
    </>
  )
}

export default App