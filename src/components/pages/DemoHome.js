import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link  } from 'react-router-dom'

// import ColumnResizer from "react-column-resizer";


const DemoHome = () => {
    const[users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    },[]);

    const loadUsers =  async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data.reverse());
    }

    const deleteUser = async id => {
      await axios.delete(`http://localhost:3003/users/${id}`);
      loadUsers();
    }

  return (
      <div className='container'>
          <div className='py-4'>
              <h1>Home page</h1>
              <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">S.No</th>
              {/* <ColumnResizer className="columnResizer" /> */}
              <th scope="col">Name</th>
              {/* <ColumnResizer className="columnResizer" /> */}
              <th scope="col">User Name</th>
              {/* <ColumnResizer className="columnResizer" /> */}
              <th scope="col">Email</th>
              {/* <ColumnResizer className="columnResizer" /> */}
              <th>Action</th> 
              {/* <ColumnResizer className="columnResizer" /> */}
              
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <td scope="row">{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td> 
                <Link type="button" className="btn btn-primary" to={`/users/${user.id}`}>View</Link>
                <Link type="button" className="btn btn-success" to={`/users/edit/${user.id}`}>Edit</Link>
                <Link type="button" className="btn btn-danger"
                onClick={() => deleteUser(user.id)}
                to="#">Delete</Link>
                </td>
                {/* <td>
                  <Link class="btn btn-primary mr-2"> View </Link>
                  <Link class="btn btn-outline-primary mr-2"> Edit </Link>
                  <Link class="btn btn-danger" > Delete </Link>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
          </div>
      </div>
  )
}

export default DemoHome