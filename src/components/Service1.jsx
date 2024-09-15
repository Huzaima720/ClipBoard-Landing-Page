import React from 'react'
import "./styles/services1.css";
import LaptopPic from "../assets/images/image-computer.png";



export default function Service1() {
  return (
    <div className='services1'>
        <div className="img">
            <img src={LaptopPic} alt="" />
        </div>
        <div className="service-list">
            <div className="service-item">
                <h3>Quick Search</h3>
                <p>
                Easily search your snippets by content, category, web address, application, and more.
                </p>
            </div>
            <div className="service-item">
                <h3>
                iCloud Sync</h3>
                <p>
                Instantly saves and syncs snippets across all your devices.
                </p>
            </div>
            <div className="service-item">
                <h3>Complete History</h3>
                <p>
                Retrieve any snippets from the first moment you started using the app.
                </p>
            </div>
            
            
        </div>
    </div>
  )
}
