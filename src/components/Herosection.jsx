import React from 'react'
import { FaArrowDownLong } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <>
      <body class="hero d-flex text-center">
       
<div class="cover-container1 d-flex w-100 h-100 p-3 mx-auto flex-column">

  <main class="px-3">
    <h1 className='text-light bw-bold'>Only Quality Food</h1>
    <p className="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br /> dolormque laudantium,totam rem aperiam,eaque ipsa quae ab illo inventore  <br /> veritatis et quasi architectoeaque ipsa quae ab illo inventore.</p>
    <p class="lead">
      <a href="#" class="menu btn btn-md  border-white  mx-3 rounded-0 mt-3">VIEW MENU</a>
      <a href="#" class="reservation btn btn-md rounded-0 mt-3">RESERVATION</a>
    </p>
   
    <a href="#" class="btn btn-md   rounded-0 mt-3"> <FaArrowDownLong /></a>
  </main>

</div>
  

</body>
    </>
  )
}

export default HeroSection
