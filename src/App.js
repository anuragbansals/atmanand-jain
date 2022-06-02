import "./App.css";
import { Route, Routes } from "react-router-dom";
import Teacher from "./components/Teacher/Teacher";
import Message from "./components/Message/Message";
import Manager from "./components/Manager/Manager";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import AdminTeacher from "./components/Admin/AdminTeacher";
import AddPhotos from "./components/Admin/AddPhotos";
import GalleryScreen from "./components/Gallery/GalleryScreen";
import Workers from "./components/Workers/Workers";
import AddTeacher from "./components/Admin/AddTeacher";
import AddWorker from "./components/Admin/AddWorker";

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
          <Route path="/other-members" element={<Workers />} />
          <Route path="/add-teacher" element={<AddTeacher />} />
          <Route path="/add-worker" element={<AddWorker />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
