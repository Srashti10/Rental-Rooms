import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RentDetails = () => {
  const { id } = useParams();

  const [rentData, setRentData] = useState(null);

  const fetchRentById = async () => {
    const res = await fetch("http://localhost:5000/rent/getbyid/" + id);
    console.log(res.status);

    const data = await res.json();
    console.log(data);
    setRentData(data);
  };
  useEffect(() => {
    fetchRentById();
  }, []);

  const displayRentDetails = () => {
    if (rentData !== null) {
      return (
        <div style={{
          backgroundImage: `url(/pngtreeimg.jpg)`,
          backgroundSize: 'cover',
        }}>
        <div style={{marginTop: '80px'}} >
          <div className="card w-50 m-auto">
          <div className="card-body ">
          <img style={{width:'500px', height:'300px',margin:'auto'}} src={'http://localhost:5000/' + rentData.image} alt="" />
          <h1>{rentData.propertyname}</h1>
          <h5>{rentData.propertytype}</h5>
          <h5>{rentData.facilities}</h5>
          <h5>{rentData.rentprice}</h5>
          <h5>{rentData.address}</h5>
          {/* <h5>{rentData.image}</h5> */}
          </div>
          </div>



        </div>
        </div>
      );
    }
  };

  return <div className="mt-5">
    <div className="container">
      {displayRentDetails()}
    </div>
  </div>;
};

export default RentDetails;