import { useFormik } from 'formik';
import React, { useState } from 'react'

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

    const res = await fetch("http://localhost:5000/user/add", {
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
    <div>
      <div className='w-50  m-auto mt-5'>
        <div className='card'>
          <div className='card-body'>
            <h3 className='text-center'>Add Property for Rent</h3>
            <hr />
            <form>
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
    </div>
  )
};
export default AddRentProperty;