import React from 'react';

// import '../home.css'

export default function Home() {
    return (
        <div className='d-flex justify-content-center text-center'>
            <div id='image-cropper' className=''>
                {/* <img src={Face} id='profile-pic' alt='profile'/> */}
            </div>
            <div id='text-container' className=''>
                <h1>Welcome to my Portfolio!</h1>
                <p>Use the navbar at the top to navigate through information and projects</p>
            </div>
      </div>
    )
}