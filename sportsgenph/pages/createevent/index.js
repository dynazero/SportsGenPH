import React from 'react';
import Link from 'next/link'
import { MotionConfig, motion } from 'framer-motion';
import { Datepicker } from '@adibfirman/react-datepicker'

const Createevent = () => {
    const MotionLink = motion(Link)
    return (
        <div className='wrapperForm'>
            <div className='containerForm'>
                <div className="col-md-7 col-lg-8">
                    <h2 className="mb-3">Create Event</h2>
                    <form className="needs-validation" noValidate="" />
                    <div className="row g-3">
                        <div className="col-sm-6">
                            {/* <label htmlFor="firstName" className="form-label">Name of Event/Tournament</label> */}
                            <input type="text" className="form-control" id="eventName" placeholder="Name of Event/Tournament" defaultValue="" required="" />
                            <div className="invalid-feedback">
                                Valid Event/Tournament name is required.
                            </div>
                        </div>
                        <div className="col-sm-6">

                        </div>

                        <div className="col-sm-6" style={{ zIndex: '4' }}>
                            <label htmlFor="startDate" className="form-label">From Date</label>
                            {/* <input type="date" className="form-control" id="DateofBirth" placeholder="Select Date" defaultValue="" required="" ></input> */}
                            <div className="form-control" style={{ height: '38px' }}>
                                <Datepicker onBlur={'test'}/>
                            </div>
                            <div className="invalid-feedback">
                                Valid Date is required.
                            </div>
                        </div>
                        <div className="col-sm-6" style={{ zIndex: '4' }}>
                            <label htmlFor="endDate" className="form-label">To Date</label>
                            {/* <input type="date" className="form-control" id="DateofBirth" placeholder="Select Date" defaultValue="" required="" ></input> */}
                            <div className="form-control" style={{ height: '38px' }}>
                                <Datepicker />
                            </div>
                            <div className="invalid-feedback">
                                Valid Date is required.
                            </div>
                        </div>

                        <div className="col-sm-6" style={{ zIndex: '4' }}>

                            
                        </div>

                        <hr className="my-4" />
                        <h4 className="mb-3">Location</h4>

                        <div className="col-md-5">
                            <label htmlFor="country" className="form-label">City</label>
                            <select className="form-select" id="city" required="">
                                <option defaultValue="">Choose...</option>
                                <option>Mandaluyong</option>
                                <option>Pasig</option>
                                <option>Manila</option>
                                <option>Marikina</option>
                                <option>San Juan</option>
                                <option>Taguig</option>

                            </select>
                            <div className="invalid-feedback">
                                Please Enter a valid Location.
                            </div>
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="state" className="form-label">State/Barangay</label>
                            <select className="form-select" id="barangay" required="">
                                <option defaultValue="">Choose...</option>
                                <option>Loading...</option>
                            </select>
                            <div className="invalid-feedback">
                                Please provide a valid Barangay.
                            </div>
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="zip" className="form-label">Zip</label>
                            <input type="text" className="form-control" id="zip" placeholder="" required="" />
                            <div className="invalid-feedback">
                                Zip code required.
                            </div>
                        </div>

                        <div className="col-12">
                            <label htmlFor="username" className="form-label">Exact Address</label>
                            <div className="input-group has-validation">
                                <input type="text" className="form-control" id="Address" placeholder="" defaultValue="" required="" />
                                <div className="invalid-feedback">
                                    Event Address is required.
                                </div>
                            </div>
                        </div>



                        {/* 
          <div className="col-md-5">
            <label htmlFor="country" className="form-label">Country</label>
            <select className="form-select" id="country" required="">
              <option defaultValue="">Choose...</option>
              <option>United States</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid country.
            </div>
          </div> */}

                        {/* <div className="col-md-4">
            <label htmlFor="state" className="form-label">State</label>
            <select className="form-select" id="state" required="">
              <option defaultValue="">Choose...</option>
              <option>California</option>
            </select>
            <div className="invalid-feedback">
              Please provide a valid state.
            </div>
          </div> */}

                        {/* <div className="col-md-3">
            <label htmlFor="zip" className="form-label">Zip</label>
            <input type="text" className="form-control" id="zip" placeholder="" required="" />
            <div className="invalid-feedback">
              Zip code required.
            </div>
          </div>*/}
                    </div>



                    <hr className="my-4" />



                    <div className="my-3">

                        <div className='row'>
                            <div className="col-sm-6">
                                <label htmlFor="uploadLogo" className="form-label">Add logo of your club</label>
                                <input type="file" className="form-control" id="uploadlogo" placeholder="" required="" />
                                <small className="text-muted">optional</small>
                                <div className="invalid-feedback">
                                    Please upload only valid format
                                </div>
                            </div>


                            <div className='col-sm-6'>
                                <label htmlFor="entryfee" className="form-label">Entry fee per category</label>
                                <input type="number" className="form-control" id="fee" placeholder="" required="" />
                                <div className="invalid-feedback">
                                    Entry fee is required
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="row categoryMargin">
                        <label htmlFor="category" className="form-label">Add Category</label>
                        <div className="col-1">

                            <button type="button" className="btn btn-primary form">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard2-plus-fill" viewBox="0 0 16 16">
                                    <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z" />
                                    <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5ZM8.5 6.5V8H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V9H6a.5.5 0 0 1 0-1h1.5V6.5a.5.5 0 0 1 1 0Z" />
                                </svg>

                            </button>

                        </div>
                        <div className="col-11">
                            <select className="form-select" id="category" required="">
                                <option defaultValue="">Choose...</option>
                                <option>Cadet Kata Female</option>
                                <option>Cadet Kata Male</option>
                                <option>Cadet Kumite Female -47 KG</option>
                                <option>Cadet Kumite Female -54 KG</option>
                                <option>Cadet Kumite Female 54+ KG</option>
                                <option>Cadet Kata Male -52 KG</option>
                                <option>Cadet Kata Male -57 KG</option>
                                <option>Cadet Kata Male -63 KG</option>
                                <option>Cadet Kata Male -70 KG</option>
                                <option>Cadet Kata Male 70+ KG</option>
                                <option>Junior Kata Female</option>
                                <option>Junior Kata Male</option>
                                <option>Junior Kata Female -48 KG</option>
                                <option>Junior Kata Female -53 KG</option>
                                <option>Junior Kata Female -59 KG</option>
                                <option>Junior Kata Female 59+ KG</option>
                                <option>Junior Kata Male -55 KG</option>
                                <option>Junior Kata Male -61 KG</option>
                                <option>Junior Kata Male -68 KG</option>
                                <option>Junior Kata Male -76 KG</option>
                                <option>Senior Kata Team Male</option>
                                <option>Senior Kumite Female +68 KG</option>
                                <option>Senior Kumite Female -50 KG</option>
                                <option>Senior Kumite Female -55 KG</option>
                                <option>Senior Kumite Female -61 KG</option>
                                <option>Senior Kumite Female -68 KG</option>
                                <option>Senior Kumite Male +84 KG</option>
                                <option>Senior Kumite Male -55 KG</option>
                                <option>Senior Kumite Male -60 KG</option>
                                <option>Senior Kumite Male -67 KG</option>
                                <option>Senior Kumite Male -75 KG</option>
                                <option>Senior Kumite Male -84 KG</option>
                                <option>Senior Kumite Team Female</option>
                                <option>Senior Kumite Team Male</option>
                                <option>U21 Kata Female</option>
                                <option>U21 Kata Male</option>
                                <option>U21 Kata Female -50 KG</option>
                                <option>U21 Kata Female -55 KG</option>
                                <option>U21 Kata Female -61 KG</option>
                                <option>U21 Kata Female -68 KG</option>
                                <option>U21 Kata Female 68+ KG</option>
                                <option>U21 Kata Male -55 KG</option>
                                <option>U21 Kata Male -60 KG</option>
                                <option>U21 Kata Male -67 KG</option>
                                <option>U21 Kata Male -75 KG</option>
                                <option>U21 Kata Male -84 KG</option>
                                <option>U21 Kata Male 84+ KG</option>

                            </select>
                            <div className="invalid-feedback">
                                Please Enter a valid Category.
                            </div>




                        </div>

                    </div>
                    <div className="row categoryMargin">
                        <div className="col-1">

                            

                        </div>
                        <div className="col-10">
                            <select className="form-select" id="category" required="">
                                <option defaultValue="">Choose...</option>
                                <option>Cadet Kata Female</option>
                                <option>Cadet Kata Male</option>
                                <option>Cadet Kumite Female -47 KG</option>
                                <option>Cadet Kumite Female -54 KG</option>
                                <option>Cadet Kumite Female 54+ KG</option>
                                <option>Cadet Kata Male -52 KG</option>
                                <option>Cadet Kata Male -57 KG</option>
                                <option>Cadet Kata Male -63 KG</option>
                                <option>Cadet Kata Male -70 KG</option>
                                <option>Cadet Kata Male 70+ KG</option>
                                <option>Junior Kata Female</option>
                                <option>Junior Kata Male</option>
                                <option>Junior Kata Female -48 KG</option>
                                <option>Junior Kata Female -53 KG</option>
                                <option>Junior Kata Female -59 KG</option>
                                <option>Junior Kata Female 59+ KG</option>
                                <option>Junior Kata Male -55 KG</option>
                                <option>Junior Kata Male -61 KG</option>
                                <option>Junior Kata Male -68 KG</option>
                                <option>Junior Kata Male -76 KG</option>
                                <option>Senior Kata Team Male</option>
                                <option>Senior Kumite Female +68 KG</option>
                                <option>Senior Kumite Female -50 KG</option>
                                <option>Senior Kumite Female -55 KG</option>
                                <option>Senior Kumite Female -61 KG</option>
                                <option>Senior Kumite Female -68 KG</option>
                                <option>Senior Kumite Male +84 KG</option>
                                <option>Senior Kumite Male -55 KG</option>
                                <option>Senior Kumite Male -60 KG</option>
                                <option>Senior Kumite Male -67 KG</option>
                                <option>Senior Kumite Male -75 KG</option>
                                <option>Senior Kumite Male -84 KG</option>
                                <option>Senior Kumite Team Female</option>
                                <option>Senior Kumite Team Male</option>
                                <option>U21 Kata Female</option>
                                <option>U21 Kata Male</option>
                                <option>U21 Kata Female -50 KG</option>
                                <option>U21 Kata Female -55 KG</option>
                                <option>U21 Kata Female -61 KG</option>
                                <option>U21 Kata Female -68 KG</option>
                                <option>U21 Kata Female 68+ KG</option>
                                <option>U21 Kata Male -55 KG</option>
                                <option>U21 Kata Male -60 KG</option>
                                <option>U21 Kata Male -67 KG</option>
                                <option>U21 Kata Male -75 KG</option>
                                <option>U21 Kata Male -84 KG</option>
                                <option>U21 Kata Male 84+ KG</option>

                            </select>
                            <div className="invalid-feedback">
                                Please Enter a valid Category.
                            </div>




                        </div>
                        <div className="col-1">
                        <button type="button" className="btn btn-danger">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard-x-fill" viewBox="0 0 16 16">
  <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z"/>
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm4 7.793 1.146-1.147a.5.5 0 1 1 .708.708L8.707 10l1.147 1.146a.5.5 0 0 1-.708.708L8 10.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 10 6.146 8.854a.5.5 0 1 1 .708-.708L8 9.293Z"/>
</svg>

                            </button>

                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-8"></div>
                        <div className="col-6 col-md-4 alignRight">
                            <MotionLink type="button" href="/createevent" className="btn btn-primary submitCreate"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >

                                Create
                            </MotionLink>
                        </div>
                    </div>



                </div>

            </div>

        </div>

    );
}

export default Createevent;
