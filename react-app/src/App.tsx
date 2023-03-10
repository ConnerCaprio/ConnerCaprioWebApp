import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Wine } from './Models/wine';
import NavBar from './components/NavBar/NavBar';
import  './styles.css';
import WineDashboard from './components/wineDashboard/wineDashboard';
import Modal from './components/Modal/Modal';
import useModal from "./hooks/useModal";

function App() {
  const [wines, setWines] = useState<Wine[]>([]);
  const { isOpen, toggle } = useModal();
  const [modalDiv, setModalDiv] = useState();

  useEffect(() => {
    axios.get<Wine[]>('http://localhost:5000/API/wines')
    .then(Response => {
      console.log(Response);
      setWines(Response.data);
    })
  }, [])  

  return (
    <div className='background'>
      <Modal isOpen={isOpen} toggle={toggle}>
        <div className='modalDiv'>To be implemented with content</div>
      </Modal>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <NavBar></NavBar>
          </div>
        </div>
        <WineDashboard wines={wines} />
        <button type='button' style={{position:'absolute', bottom:'30px' }} className='btn btn-secondary' onClick={toggle}>Open Modal </button>
      
      </div>
    </div>
    
  );
}

export default App;
