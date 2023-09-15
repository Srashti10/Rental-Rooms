import { useFormik } from 'formik';
import React, { useState } from 'react'
import { motion } from "framer-motion";

const AddRentProperty = () => {
  const [PropImg, setPropImg] = useState("");

  const propertyForm = useFormik({
    initialValues: {
      propertyname: "",
      propertytype: "",
      facilities: "",
      rentprice: "",
      image: ""
    },

  onSubmit: async (values, { resetForm, setSubmitting }) => {
    values.avatar = PropImg;

    console.log(values);
    setSubmitting(true);

    const res = await fetch("http://localhost:5000/rent/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    })



  const uploadFile = async (e) => {
    if (!e.target.files[0]) return;
    const file = e.target.files[0];
    setPropImg(file.name);
    const fd = new FormData();
    fd.append("myfile", file);

    const res = await fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    });

    console.log(res.status);

    if (res.status === 200) {
      console.log("File uploaded successfully");
    } else {
      console.log("File upload failed");
    }
  };
  

  return (
    <motion.div className="bg d-flex justify-content-center align-items-center"
    initial={{ opacity: 0, x: "100%" }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: "-100%" }}
    transition={{ duration: 0.3, type: "spring", stiffness: 50, damping: 10 }}
    style={{ paddingTop: '40px',backgroundImage: `url('/propbgimg2.jpg')`,
    backgroundSize: 'cover',  minHeight: '100vh'
    }}>
      <div className='w-50  m-auto mt-5 '>
        <div className='card'>
          <div className='card-body'>
            <h3 className='text-center'>Add Property for Rent</h3>
            <hr />
            <form onSubmit={propertyForm.handleSubmit}>
              <label htmlFor="">Property Name</label>
              <input
               type="text"
               className='form-control mb-3'
               name="propertyname"
               onChange={propertyForm.handleChange}
               value={propertyForm.values.propertyname}
               />
               <label htmlFor="">Property Type</label>
              <input
               type="text"
               className='form-control mb-3'
               name='propertytype'
               onChange={propertyForm.handleChange}
               value={propertyForm.values.propertytype}
               />
               <label htmlFor="">Facilities</label>
              <input
               type="text-area"
               className='form-control mb-3'
               name='facilities'
               onChange={propertyForm.handleChange}
               value={propertyForm.values.facilities}
               />
              <label htmlFor="">Address</label>
              <input
               type="text-area"
               className='form-control mb-3'
               name='address'
               onChange={propertyForm.handleChange}
               value={propertyForm.values.address}
               />
                <label htmlFor="">Rent Price</label>
              <input
               type="number"
               className='form-control mb-3'
               name='rentprice'
               onChange={propertyForm.handleChange}
                value={propertyForm.values.rentprice}
               />
              <input type="file" onChange={uploadFile} />
              <button
                disabled={propertyForm.isSubmitting}
                className="btn btn-primary w-100 mt-5"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  )
};
export default AddRentProperty;