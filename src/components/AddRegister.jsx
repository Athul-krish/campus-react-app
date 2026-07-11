import React from "react";
import Navbar from "./Navbar";


const AddRegister = () => {
  return (
    <div>
     <Navbar/>
      <div className="container mt-4">
        <div className="row">
          <div className="col col-12">

            <div className="card p-4">
              <h3 className="text-center mb-4">Campus Placement Registration</h3>

              <div className="row g-3">

                <div className="col-md-6">
                  <label className="form-label">Registration Number</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Aadhar Number</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Phone Number</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Branch / Department</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">SSLC Mark (%)</label>
                  <input type="number" className="form-control" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Plus Two Mark (%)</label>
                  <input type="number" className="form-control" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">UG Degree Name</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">UG Mark (%)</label>
                  <input type="number" className="form-control" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">PG Degree Name (Optional)</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">PG Mark (%) (Optional)</label>
                  <input type="number" className="form-control" />
                </div>

                <div className="col-12 text-center mt-3">
                  <button className="btn btn-primary">
                    Submit
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRegister;