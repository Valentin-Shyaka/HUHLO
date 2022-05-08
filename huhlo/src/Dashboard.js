import React from 'react'
import {FaStar} from "react-icons/fa"
import {MdVerified} from "react-icons/md"
import {FaGgCircle} from "react-icons/fa"
import {AiFillSketchCircle} from "react-icons/ai"
import {FaSearch} from "react-icons/fa"
import {AiFillRightCircle} from "react-icons/ai"


function Dashboard() {
  return (
    <div className='dash'>
        <div className='Lfloaters'>
          <h3>HUHLO</h3>
          <div className='rating'>
            <div className='rate'><FaStar id='star'/> 5.0</div>
            <div className='nominee'>Car of the <br/> Year <MdVerified id='verif'/></div>
            <p>Extremes Tech's Car for <span>2022</span> </p>
            <img src='93-931079_sports-car-svg-vector-file-vector-clip-art-removebg-preview.png' />
            <button>view all</button>
            

          </div>
          <div className='premium'>
            <h4><span>Premium</span> All Brands <FaGgCircle id='gg'/></h4>
            <img src='brands.png'/>

          </div>
          {/* <img src='logo.png'/> */}
          <button>Get in Touch</button>

        </div>
        <div className='Rfloaters'>
          <div className='header'>
            <div className='head1'>
              <h3>Hello, Popular car brand</h3>
              <div className='text2'>
                <AiFillSketchCircle className='sketch'/>
                <p>Car brands - <span>Top 20</span> in the World</p>

              </div>

            </div>
            <div className='head2'>
              <div className='links'>
                <p>Cars</p>
                <p>Makes</p>
                <p>Types</p>
                <p>Tops</p>
                <FaSearch id='search'/>

              </div>
              <div className='opts'>
                <button>Upcoming</button>
                <button id='button2'>Recent</button>
              </div>

            </div>

          </div>
          <div className='upcoming'>
            <div className='title'>
              <h3>Upcoming</h3>
              <button>8</button>

            </div>
            <div className='info'>
              <div className='model'>
                <p>New 2022 BMW</p>
                <h3>i7 Gran Coupe <br/>M57</h3>
                <button>Shop Now</button>
              </div>
              <div className='retro'>
                  <img src='car.png'/>
              </div>

            </div>

          </div>
          <h3>Highlighted Features</h3>
          <div className='features'>
            
            <div className='ftr'>
              <img src='nav.jpg' className='img'/>
              <div className='den'>
                <p>Navigation system</p>
                <p id='type'>New <span id='year'>2022 </span><span id='car'>BMW</span></p>

              </div>

            </div>
            <div className='ftr'>
              <img src='nav.jpg' className='img'/>
              <div className='den'>
                <p>Navigation system</p>
                <p id='type'>New <span id='year'>2022 </span><span id='car'>BMW</span></p>

              </div>

            </div>
            <div className='ftr'>
              <img src='nav.jpg' className='img'/>
              <div className='den'>
                <p>Navigation system</p>
                <p id='type'>New <span id='year'>2022 </span><span id='car'>BMW</span></p>

              </div>

            </div>
            <div className='div'><AiFillRightCircle id='next'/></div>

          </div>
          <div className='sls'>
            <div className='brand'>
              <p><FaStar id='star'/> 5.0</p>
              <img src='model.png'/>
              <h4>Lamborghini Urus</h4>
              <span>Petrol   7.87 kmpl</span>



            </div>
            <div className='brand'>
              <p><FaStar id='star'/> 5.0</p>
              <img src='model.png'/>
              <h4>Lamborghini Urus</h4>
              <span>Petrol   7.87 kmpl</span>



            </div>
            <div className='brand'>
              <p><FaStar id='star'/> 5.0</p>
              <img src='model.png'/>
              <h4>Lamborghini Urus</h4>
              <span>Petrol   7.87 kmpl</span>



            </div>



          </div>

        </div>



    </div>
  )
}

export default Dashboard