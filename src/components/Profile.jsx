import React from 'react'

const Profile = () => {
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
      <form className="file-upload">
        <div className="row mb-5 gx-5">
          {/* Contact detail */}
          <div className="col-xxl-8 mb-5 mb-xxl-0">
            <div className="bg-secondary-soft px-4 py-5 rounded">
              <div className="row g-3">
                <h4 className="mb-4 mt-0"> Personal detail</h4>
                {/* First Name */}
                <div className="col-md-6">
                  <label className="form-label">First Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    aria-label="First name"
                    defaultValue="Scaralet"
                  />
                </div>
                {/* Last name */}
                <div className="col-md-6">
                  <label className="form-label">Last Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    aria-label="Last name"
                    defaultValue="Doe"
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
                    defaultValue="9876543210"
                  />
                </div>
                
                {/* Email */}
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    defaultValue="example@homerealty.com"
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
                  <input type="file" id="customFile" name="file" hidden="" />
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
                  <p className="text-muted mt-3 mb-0">
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
        <div className="gap-3 d-md-flex justify-content-md-end text-center">
          <button type="button" className="btn btn-danger btn-lg">
            Delete profile
          </button>
          <button type="button" className="btn btn-primary btn-lg">
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