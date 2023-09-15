import React, { useEffect, useState } from 'react'

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
      return <div style={{marginTop: '80px'}}>
        <div className="col-md-3">
        <div className="card">
          <div className="card-body">
            <h3>{space.propertyname}</h3>
            <h5>{space.propertytype}</h5>
            <h5>{space.facilities}</h5>
            <h5>{space.rentprice}</h5>
            <h5>{space.address}</h5>
            <h5>{space.image}</h5>
            
          </div>
        </div>
      </div>
      </div>
    })
  }

  return (
    <div>
      <div className='container'>
        {displaySpaces()}
      </div>
    </div>
  )
}

export default BrowseSpace;