import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Wine } from './Models/wine';
import NavBar from './components/NavBar/NavBar';
import  './styles.css';
import WineDashboard from './components/wineDashboard/wineDashboard';
import Modal from './components/Modal/Modal';
import useModal from "./hooks/useModal";
import WineForm from './components/forms/WineForm';
import { Outlet } from 'react-router-dom';

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
        <WineForm></WineForm>
      </Modal>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <NavBar></NavBar>
          </div>
        </div>
        <Outlet />
        <button type='button' style={{position:'absolute', bottom:'30px' }} className='btn btn-secondary btn-sm' onClick={toggle}>Add Wine</button>
        <div style={{fontSize:'10px', bottom:'50px', position:'absolute', marginTop:'10px'}}>
          <h5>To Do:</h5>
          <ul>
            <li>sorting wines</li>
            <li>filter wines</li>
            <li>image showing</li>
            <li>image upload</li>
            <li>storing images</li>
            <li>resume page</li>
            <li>components page</li>
            <li>add new wine</li>
            <li>deleting wines</li>
            <li>working nav bar when small screen</li>
            <li>publish to azure</li>
            <li>wine card compoent style and layout</li>
            <li>showing wine type by enum number</li>
          </ul>
        </div>
        
      </div>
    </div>
    
  );
}

export default App;
