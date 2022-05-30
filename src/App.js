import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Teacher from "./components/Teacher/Teacher";
import Message from "./components/Message/Message";
import Manager from "./components/Manager/Manager";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AdminPick from "./components/Admin/AdminPick";
import AdminTeacher from "./components/Admin/AdminTeacher";
import AddPhotos from "./components/Admin/AddPhotos";
import Card from "./components/Teacher/Card";
import GalleryScreen from "./components/Gallery/GalleryScreen";
// import { Card } from "@mui/material";

function App() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#F7F9BC",
        }}
        className="App"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faculties" element={<Teacher />} />
          <Route path="/message" element={<Message />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/gallery" element={<GalleryScreen />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<AdminTeacher />} />
          <Route path="/add-photos" element={<AddPhotos />} />
          <Route path="/manager" element={<Manager />} />
        </Routes>
      </div>
      {/* <AdminPick /> */}
      {/* <AdminTeacher/> */}
      {/* <Card/> */}
      {/* <Teacher/> */}
    </>
  );
}

export default App;
