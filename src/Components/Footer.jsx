import React from 'react'
import '../css/footer.css';

export default function Footer() {
  return (
    <div className='footer px-5'>
        <div className="container footer-top p-5 col-12">
            <div className="row footer-text">
                <div className="col-2 company-name"><h3>First Step</h3></div>
                <div className="col-4">
                    <h5 className='footer-links-headings'>Contact us</h5>
                    <div className="row">Call: 1800 111 111</div>
                    <div className="row">Email: info@firststep.com</div>
                    <div className="row">Address: 12/3, MG Road <br />New Delhi 110024</div>
                    
                </div>
                <div className="col-3">
                    <h5 className='footer-links-headings'>Quick Links</h5>
                    <div className="row">Call: 1800 111 111</div>
                    <div className="row">Email: info@firststep.com</div>
                    <div className="row">Address: 12/3, MG Road <br />New Delhi 110024</div>
                </div>
                <div className="col-3"><h5 className='footer-links-headings'>Quick Links</h5></div>
            
            </div>
        </div>
        <div className="footer-bottom"><hr />
            <p className='m-auto py-5'>First Step 2022 &copy; All Rights Reserved</p>
        </div>
    </div>
  )
}
