import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUsers } from '../services/UserService';
import Paginate from './Paginate';

function TableUser() {
  const [users, setUsers] = useState([])
  const [pageCount, setpageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    getAllUsers()
  }, [currentPage])

  const getAllUsers = async () => {
    let res = await fetchAllUsers(currentPage)
    setUsers(res && res.data)
    setpageCount(res.total_pages)
  }

  const handlePageClick = (e) => {
    const newOffset = (+e.selected + 1);

    setCurrentPage(newOffset);
  }

  return (
    <>
      <div className='my-3 d-flex justify-content-between'>
          <h3>List User</h3>
          <button onClick={handleShow} className='btn btn-success float-right'>Add User</button>
        </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            return <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
            </tr>
          })}
        </tbody>
      </Table>
      <Paginate handlePageClick={handlePageClick} pageCount={pageCount}/>      
    </>
  );
}

export default TableUser;