import './App.scss';
import Container from 'react-bootstrap/Container';
import Header from './components/Header'; 
import TableUser from './components/TableUsers';

function App() {
  return (
    <>
      <Header />
      <Container>
        <TableUser />
      </Container>
    </>
  );
}

export default App;
