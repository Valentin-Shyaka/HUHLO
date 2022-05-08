import React from 'react'

import {BsArrowRight} from "react-icons/bs"
import NavBAr from './NavBAr'

function Home() {
  return (
    <>
    <NavBAr/>
    <div className='home'>
        <div className='about'>
          <div className='text'>
            <p><strong>The best cars,</strong><br/>for better<br/><strong>Living.</strong></p>
            

          </div>
          <p>We provide the best Automotive services and often provide them as a single solution to your lives</p>

          <div className='about_buts'>
            <button>Start Now</button>
            <button>Read more</button>
          </div>
          <p>Huhlo is the world’s leading community for Automotive services to Buy, Lent, and get hired.</p>

          <div className='email'>
              <input type={'email'} placeholder="Enter your email"/>
              <div className='icon'><BsArrowRight id='arrow'/></div>
          </div>

        </div>
        <div className='ventures'>
          <div className='show'>
            <div className='cont'>
              
                <img src='images-removebg-preview (1).png'/>
                <div className='ident'>
                  <div className='icon'>
                        <img src='download-removebg-preview.png'/>
                  </div>
                  <div className='bucks'>
                      <p>Model</p>
                      <strong>281</strong>
                      <p id='p2'>+78.63%</p>
                  </div>

                </div>
            </div>
            <div className='cont'>
            <div className='next'><BsArrowRight id='arrow'/></div>
            <img src='images-removebg-preview.png'/>
            </div>

          </div>
          <div className='stats'>
            <div className='stat'>
              <strong>10+</strong>
              <p>Companies</p>

            </div>
            <div className='stat'>
              <strong>109</strong>
              <p>Partners</p>

            </div>
            <div className='stat'>
              <strong>29</strong>
              <p>Garages</p>

            </div>
            <div className='stat'>
              <strong>7</strong>
              <p>Branches</p>

            </div>

          </div>

        </div>









    </div>
    </>
  )
}

export default Home