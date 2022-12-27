import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function SignupDetails() {
  return (
    <>
    <section className="h-screen signupnWidthModal">
    <main className="form-signupCustom text-center mt-5">
      <h2> Sign up </h2>
      <form>
        <h1 className="h3 mb-3 fw-normal">Create Account</h1>

        <div className="form-floating">
          <input type="text" className="form-control" id="floatingInput" placeholder="name" />
          <label htmlFor="floatingInput">Name</label>
        </div>
        

        <label for="basic-url" class="form-label">Select your team manager:</label>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon3">Coach</span>
        <input type="text" class="form-control" aria-label="Text input with dropdown button"></input>
        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <i class="chevron-compact-down"></i>
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><a class="dropdown-item" href="#">Kyle</a></li>
          <li><a class="dropdown-item" href="#">James</a></li>
          <li><a class="dropdown-item" href="#">Chris</a></li>
          {/* <li><hr class="dropdown-divider"/></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li> */}
        </ul>
      </div>

      
        <div className="form-floating">
          <input type="text" className="form-control" id="floatingInput" placeholder="rank" />
          <label htmlFor="floatingInput">Rank</label>
        </div>
        {/* <div className="form-floating">
          <input type="text" className="form-control" id="floatingInput" placeholder="club name" />
          <label htmlFor="floatingInput">Club Name</label>
        </div>
        <div className="form-floating">
          <input type="text" className="form-control" id="floatingInput" placeholder="club address" />
          <label htmlFor="floatingInput">Club Address</label>
        </div>

        <div className="form-floating">
          <input type="number" className="form-control" id="floatingInput" placeholder="contact number" />
          <label htmlFor="floatingInput">Contact Number</label>
        </div>
        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label htmlFor="floatingInput">Email address</label>
        </div>

        <label for="basic-url" class="form-label">Upload your photo</label>
              <div class="input-group mb-3">
          <input type="file" class="form-control" id="inputGroupFile02"/>
          <label class="input-group-text" for="inputGroupFile02">Upload</label>
        </div>
          

        <label for="basic-url" class="form-label">Upload your valid Id</label>
            <div class="input-group mb-3">
          <input type="file" class="form-control" id="inputGroupFile02"/>
          <label class="input-group-text" for="inputGroupFile02">Upload</label>
        </div>


        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div> */}

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <motion.button 
        className="w-100 btn btn-lg btn-primary save-button" 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={event => loginClick(event, !modalOpen)}
        href="#"
        // type="submit"
        >Next
        </motion.button>
      </form>
    </main>

  </section>
    </>
  )
}
