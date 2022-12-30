import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function SignupDetails() {

  const [coach, setCoach] = useState('');


  return (
    <>
      <section className="h-screen signupnWidthModal sigupHeightModal">
        <main className="form-signupCustom text-center mt-5">
          <form>
            <h1 className="h3 mb-3 fw-normal">Create Account</h1>
            {/* <h2> Sign up </h2> */}
            <div id="carouselExampleIndicators" className="carousel slide indicatorsCustom">
            <div className="carousel-indicators customIndicatorButtons">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item carousel-itemCustom active ">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="name" />
                    <label htmlFor="floatingInput">Name</label>
                  </div>

                  <label htmlFor="basic-url" className="form-label">Select your team manager:</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">Coach</span>
                    <input type="text" className="form-control" aria-label="Text input with dropdown button" defaultValue={coach}></input>
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="chevron-compact-down"></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li><a className="dropdown-item" href="#" onClick={() => setCoach('Kyle')} >Kyle</a></li>
                      <li><a className="dropdown-item" href="#" onClick={() => setCoach('James')}  >James</a></li>
                      <li><a className="dropdown-item" href="#" onClick={() => setCoach('Chris')} >Chris</a></li>
                      {/* <li><hr className="dropdown-divider"/></li>
          <li><a className="dropdown-item" href="#"> Lawrence </a></li> */}
          
                    </ul>
                  </div>

                  <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="rank" />
                    <label htmlFor="floatingInput">Rank</label>
                  </div>


                </div>
                <div className="carousel-item carousel-itemCustom">
                  
                  <div className="form-floating inputCustomCarousel">
                    <input type="text" className="form-control" id="floatingInput" placeholder="club name" />
                    <label htmlFor="floatingInput">Club Name</label>
                  </div>
                  <div className="form-floating inputCustomCarousel">
                    <input type="text" className="form-control" id="floatingInput" placeholder="club address" />
                    <label htmlFor="floatingInput">Club Address</label>
                  </div>

                  <div className="form-floating inputCustomCarousel">
                    <input type="number" className="form-control" id="floatingInput" placeholder="contact number" />
                    <label htmlFor="floatingInput">Contact Number</label>
                  </div>
                  <div className="form-floating inputCustomCarousel">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>


                </div>
                <div className="carousel-item carousel-itemCustom">

                  <label htmlFor="basic-url" className="form-label">Upload your photo</label>
                  <div className="input-group mb-3">
                    <input type="file" className="form-control" id="inputGroupFile02" />
                    <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                  </div>


                  <label htmlFor="basic-url" className="form-label">Upload your valid Id</label>
                  <div className="input-group mb-3">
                    <input type="file" className="form-control" id="inputGroupFile02" />
                    <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                  </div>

                  <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>

                  <motion.button
                    className="w-100 btn btn-lg btn-primary save-button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={event => loginClick(event, !modalOpen)}
                    href="#"
                    style={{margin: "15px 0px"}}
                  // type="submit"
                  >Next
                  </motion.button>

                </div>
              </div>
            </div>
          </form>
        </main>
      </section>











      {/* 

        

       


        */}





    </>
  )
}
