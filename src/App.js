import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Reiki from "./components/Reiki";
import Services from "./components/Services";
import Main from "./components/Main";
import Contact from "./components/Contact";
import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <body>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/reiki" element={<Reiki />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <Alert />
        </body>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
