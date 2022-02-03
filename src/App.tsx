import "./App.css";
import TableUsers from "./components/TableUsers";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import {DataProvider} from "./context/DataProvider";
import { useState } from "react";



function App() {
  const [show,setShow] = useState(false)
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div className="App">
      <DataProvider>
        <Navbar />
        <TableUsers  onOpenModal={handleShow}/>
        <Modal show={show} onHide={handleClose}/>
      </DataProvider>
    </div>
  );
}

export default App;
