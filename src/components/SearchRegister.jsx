import React from 'react'

const SearchRegister = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col col-12">

                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6">

                        <label htmlFor="" className="form-kabel">Enter Registration No:</label>
                        <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6"></div>
                    <div className="col col-12 col-sm-6 col-md-6">
                        <button className="btn btn-primary">Search</button>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default SearchRegister
