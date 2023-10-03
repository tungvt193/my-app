import './App.scss';
import Container from 'react-bootstrap/Container';
import Header from './components/Header'; 
import TableUser from './components/TableUsers';
import UserModal from './components/UserModal';
import { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false)

  const handleShow = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <>
      <Header />
      <Container>
        <TableUser />
        <UserModal show={showModal} handleClose={handleClose}/>
      </Container>
    </>
  );
}

export default App;
