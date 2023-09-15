import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ManageUser = () => {

    const [userList, setuserList] = useState([]);

    const fetchUserData = async () => {
        const res = await fetch( 'http://localhost:5000/rent/getall' );
        console.log(res.status);

        const data = await res.json();
        console.log(data);
        setuserList(data);
    };

    const deleteRent = async (id) => {
        const res = await fetch('http://localhost:5000/rent/delete/'+id, {method : 'DELETE'});
        console.log(res.status);
        if(res.status === 200){
            fetchUserData();
            toast.success('User Deleted Successfully ❗')
        }
    }

    useEffect(() => {
      fetchUserData();
    }, []);

    const displayUserData = () => {
        return <table className='table table-dark'>
            <thead>
                <tr>
                    <th>Property Name</th>
                    <th>Property Type</th>
                    <th>Facilities</th>
                    <th>Rent Price</th>
                     <th colSpan={2}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    userList.map( (rent) => ( <tr>
                        <td>{rent.propertyname}</td>
                        <td>{rent.propertytype}</td>
                        <td>{rent.facilities}</td>
                        <td>{rent.rentprice}</td>
                        <td>
                            <Link to={'/updaterent/'+rent._id} className='btn btn-primary'>Edit</Link>
                        </td>
                        <td>
                            <button onClick={() => {deleteRent(rent._id)}} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>

                    ))
                }
            </tbody>
        </table>
        
    }
    

  return (
    <div>
        <h1 className='text-center fw-bold'>Manage User Data</h1>
        <hr />
        <div className='container'>
            {displayUserData()}
        </div>
    </div>
  )
}

export default ManageUser;