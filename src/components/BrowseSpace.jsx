import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const BrowseSpace = () => {


  const [spaceList, setSpaceList] = useState([]);

  const fetchSpacesData = async () => {
    const res = await fetch('http://localhost:5000/rent/getall');
    console.log(res.status);

    const data = await res.json();
    console.log(data);
    setSpaceList(data);
  };

  useEffect(() => {
    fetchSpacesData();
  }, [])


  const displaySpaces = () => {
    return spaceList.map((space) => {
      return <div className="col-md-3 mt-5" >
          <div className="card">
            <img style={{width: '255px', height: '150px'}} src={'http://localhost:5000/' + space.image} alt="" />
            <div className="card-body">
              <h3>{space.propertyname}</h3>
              <h5>{space.propertytype}</h5>
              {/* <h5>{space.facilities}</h5>
              <h5>{space.rentprice}</h5>*/
                <h5>{space.address}</h5>}
              {/* <h5>{space.image}</h5> */}
              <Link className='btn bg-danger' to={'/rentdetails/' + space._id}>ViewDetails</Link>
            </div>
          </div>
        </div>
        
      })
  }


  return (
    <div>
      <div className='container'>
        <div className='row'>

          {displaySpaces()}
        </div>
      </div>
    </div>
  )
}


  export default BrowseSpace;