import { useFormik } from 'formik';
import React, { useState } from 'react'
import Swal from 'sweetalert2';


  

const Profile = () => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')))

   // Initializing formik
 const profileForm = useFormik({
  initialValues: {
    email : "",
    name : "",
    password : "",
    age : "",
    avatar : "",
  },
  onSubmit : async ( values, {resetForm} ) => {
    console.log(values);

    const res = await fetch('http://localhost:5000/user/update/'+currentUser._id, {
      method: 'PUT',
      body: JSON.stringify(values),
      headers: {
        'Content-Type' : 'application/json'
      }
    });

    console.log(res.status);

    if(res.status === 200){
      Swal.fire({
        icon : 'success',
        title : 'Nice!',
        text : 'Profile Updated 😎'
      });

      const data = await res.json();
      console.log(data);
      sessionStorage.setItem('user', JSON.stringify(data) );
      // setLoggedIn(true);
      resetForm();

    }else{
      Swal.fire({
        icon : 'error',
        title : 'Error',
        text : 'Something went wrong'
      })
    }
    }

    })

    // write code to submit form to server
  return (
    <div style={{marginTop: '100px'}}>
        <div className="container">
  <div className="row">
    <div className="col-12">
      {/* Page title */}
      <div className="my-5">
        <h3>My Profile</h3>
        <hr />
      </div>
      {/* Form START */}
      <form className="file-upload" onSubmit={profileForm.handleSubmit}>
        <div className="row mb-5 gx-5">
          {/* Contact detail */}
          <div className="col-xxl-8 mb-5 mb-xxl-0">
            <div className="bg-secondary-soft px-4 py-5 rounded">
              <div className="row g-3">
                <h4 className="mb-4 mt-0"> Personal detail</h4>
                {/* First Name */}
                <div className="col-md-6">
                  <label className="form-label">Name *</label>
                  <input
                    type="text"
                    className="form-control"              
                    placeholder=""
                    aria-label="First name"
                    id='name'
                    onChange={profileForm.handleChange}
                    value={profileForm.values.name}
                  />
                </div>
               
                {/* Phone number */}
                <div className="col-md-6">
                  <label className="form-label">Mobile number *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    aria-label="Mobile number"
                    
                    onChange={profileForm.handleChange}
                    value={profileForm.values.mobilenumber}
                  />
                </div>
                
                {/* Email */}
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder=""
                    className="form-control"
                    id="email"
                    aria-label="Email"
                    onChange={profileForm.handleChange}
                    value={profileForm.values.email}
                  />
                </div>
                {/* Address */}
                <div className="col-md-6">
                  <label className="form-label">Address*</label>
                  <input
                    type="text-area"
                    className="form-control"
                    placeholder=""
                    aria-label="Address"
                    defaultValue="123, Street2, Anywhere"
                    onChange={profileForm.handleChange}
                    value={profileForm.values.address}
                  />
                </div>
              </div>{" "}
              {/* Row END */}
            </div>
          </div>
          {/* Upload profile */}
          <div className="col-xxl-4">
            <div className="bg-secondary-soft px-4 py-5 rounded">
              <div className="row g-3">
                <h4 className="mb-4 mt-0">Upload your profile photo</h4>
                <div className="text-center">
                  {/* Image upload */}
                  <div className="square position-relative display-2 mb-3">
                    <i className="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary" />
                  </div>
                  {/* Button */}
                  <input type="file" id="customFile" name="file" hidden=""    />
                  <label
                    className="btn btn-success-soft btn-block"
                    htmlFor="customFile"
                  >
                    Upload
                  </label>
                  <button type="button" className="btn btn-danger-soft">
                    Remove
                  </button>
              
                  {/* Content */}
                  <p className="text-muted mt-3 ">
                    <span className="me-1">Note:</span>Minimum size 300px x
                    300px
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Row END */}
        {/* button */}
        <div className="mt-2 d-md-flex justify-content-md-center text-center">
          
          <button 
          disabled={profileForm.isSubmitting}
          type="submit" className="btn btn-primary btn-lg">
            Update profile
          </button>
        </div>
      </form>{" "}
      {/* Form END */}
    </div>
  </div>
</div>

    </div>
  )
}

export default Profile;