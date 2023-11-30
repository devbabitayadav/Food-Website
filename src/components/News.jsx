import React from 'react'
import bakery from "../assets/bakery.jpg"
import pillow from "../assets/Pillow.jpg"
import Flower from "../assets/Flower.jpg"



const News = () => {
  return (
    <>
      <div className="news-section">
        <p className='text-center pt-4'>DON'T MISS</p>
        <hr className='hr2' />
        <h1 id='testimonials'>Our News And Events</h1>
        <p className='text-center m-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br /> doloremque laudantium, totam rem aperiam.</p>
        <div class="container d-flex flex-wrap news-section">
          <div class="row  flex-column">
            {/* <!-- Image Section --> */}
            <div class="col-md-6 me-4">
              <img src={bakery} class="img-fluid1" alt="Image" />
            </div>

            {/* <!-- Text Section --> */}
            <div class="col- mx-">
              <h5 className='mt-3'>Nunc Volutpat Venenatis</h5>

              <p className='mt-3'>CATEGORY</p>
              <p>Nulla a odio sed magna congue condimentum. <br /> Pellentesque convallis enim nec libero vulputate, et <br /> rhoncus urna placerat. Phasellus mattis, diam vel <br /> vehicula facilisis, erat leo dapibus augue, at mollis <br /> tellus ex non nisi. Ut faucibus fringilla semper. <br /> Aenean nunc ex,...</p>
            </div>
          </div>

          <div class="row flex-column">
            {/* <!-- Image Section --> */}
            <div class="col-md-6">
              <img src={pillow} class="img-fluid1" alt="Image" />
            </div>

            {/* <!-- Text Section --> */}
            <div class="col-md- mx-1">
              <h5 className='mt-3'>Vestibulum Nisl Felis</h5>
              <p className='mt-3'>CATEGORY</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Nunc aliquam justo et nibh venenatis aliquet. Morbi mollis mollis pellentesque. Aenean vitae erat velit.</p>
            </div>
          </div>


          <div class="row flex-column">
            {/* <!-- Image Section --> */}
            <div class="col-md-6">
              <img src={Flower} class="img-fluid1 mx-4" alt="Image" />
            </div>

            {/* <!-- Text Section --> */}
            <div class="col-md-8 mx-5">
              <h5 className='mt-3'>Proin Eu Augue Efficitur</h5>
              <p className='mt-3'>CATEGORY</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. Morbi mollis mollis pellentesque. Aenean vitae erat velit.</p>
            </div>
          </div>

        </div>


        <p class="lead text-center">
          {/* <a href="#" class="menu btn btn-md  border-white  mx-3 rounded-0 mt-3">VIEW MENU</a> */}
          <a href="#" class="reservation btn btn-md rounded-0 mt-3">READ MORE</a>
        </p>

      </div>
    </>
  )
}

export default News;
