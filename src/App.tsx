import "./App.css";
import TableUsers from "./components/TableUsers";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import {DataProvider} from "./context/DataProvider";
import { useState } from "react";
import Users from "./models/users";



function App() {
  const [show,setShow] = useState(false)
  const [dataUsers, setDataUsers] = useState<Users>()

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="App">
      <DataProvider>
        <Navbar />
        <TableUsers  onOpenModal={handleShow} setDataUsers={setDataUsers}/>
        <Modal show={show} onHide={handleClose} dataUser={dataUsers} />
      </DataProvider>
    </div>
  );
}

export default App;
