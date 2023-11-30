import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="footer-section flex-wrap d-flex">
        <div className="card1">
          <div className="card1-text">
            <p>Hours of Operation</p>
            <strong>MON – FRI <br /> </strong>
            <span>10:00am – 1:00pm <br />  4:00pm – 10:30pm</span>
            <hr className='hr3' />
            <strong>SAT  <br /> </strong>
            <span>3:00pm – 10:30pm</span>
            <hr className='hr3' />
            <b>SUN <br /></b>
            <span>We are closed</span>
            <br />

            <p class="lead">
              {/* <a href="#" class="menu btn btn-md  border-white  mx-3 rounded-0 mt-3">VIEW MENU</a> */}
              <a href="#" class="reservation btn btn-md rounded-0 mt-3">MAKE A RESEVERVATION</a>
            </p>
          </div>
        </div>


        <div className="card2 flex-wrap">
          <div className="card2-text">
            <h1 class="Drop">Drop Us a Line</h1>
            <p>Don’t be shy. Let us know if you have any questions!</p>

            <p class="lead">
              {/* <a href="#" class="menu btn btn-md  border-white  mx-3 rounded-0 mt-3">VIEW MENU</a> */}
              <a href="#" class="reservation btn btn-md rounded-0 mb-4">CONTACT US</a>
            </p>

            <h2 class="Newsletter">Our Newsletter</h2>

            <p className='script'>Dialogue is an essential part of any script</p>

            <input className="input mb-3" type="text" placeholder="First Name" ></input>

            <input className="input mb-3" type="text" placeholder="Last Name" ></input>
            <br />
            <input className="input" type="text" placeholder="Email" ></input>

            <p class="Footer3">
              <a href="#" class="reservation btn btn-md rounded-0 mt-3">CONTACT US</a>
            </p>
          </div>
        </div>
      </div>





    </>


  )
}

export default Footer
