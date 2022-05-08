import React from 'react'


function NavBAr() {
  return (
    <div className='navbar'>
        <p>HUHLO</p>
        <div className='nav_links'>
            <p>Home</p>
            <p>Key features</p>
            <p>Pricing</p>
            <p>Testimonial</p>
            <p>FAQ</p>
        </div>
        <div className='nav_buts'>
            <button>Log in</button>
            <button id='but2'>Sign up</button>

        </div>

    </div>
  )
}

export default NavBAr