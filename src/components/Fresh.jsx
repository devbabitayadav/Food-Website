import React from 'react'


const HeroSection = () => {
  return (
    <>
      <body class="fresh d-flex text-center">
       
<div class="cover-container1 d-flex w-100 h-100 p-3 mx-auto flex-column">

  <main class="main px-3">
    <p className='Best'>ONLY THE BEST</p>
    <hr className='hr' />
  <h1 id='fresh'>Fresh Ingredient, Tasty Meals</h1>
    <p className="Lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis <br /> nostrud exercitation ullamco laboris nisi</p>
    <p class="lead">
      {/* <a href="#" class="menu btn btn-md  border-white  mx-3 rounded-0 mt-3">VIEW MENU</a> */}
      <a href="#" class="reservation btn btn-md rounded-0 mt-3">VIEW ITEMS</a>
    </p>
   
    {/* <a href="#" class="btn btn-md   rounded-0 mt-3"> <FaArrowDownLong /></a> */}
  </main>

</div>
  

</body>
    </>
  )
}

export default HeroSection
