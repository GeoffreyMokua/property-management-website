import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-all w-100 p-3">
            <div className="footer row ">
            <div className="col-lg-3 col-xs-12 my-2">
                <h3>QUICK LINKS</h3>
                <p><Link className="url"  to="/">Home   </Link></p>
                <p><Link className="url"  to="/">Properties   </Link></p>
                <p><Link className="url"  to="/"> Owners  </Link></p>
                <p><Link className="url"  to="/"> Tenants  </Link></p>
                <p><Link className="url"  to="/about">About Us </Link></p>
                <p><Link className="url"  to="/"> Contacts Us  </Link></p>
                <p><Link className="url"  to="/"> Owner Login  </Link></p>
                <p><Link className="url"  to="/"> Tenant Login  </Link></p>
         </div> 
         <div className="col-lg-3 col-xs-12 my-2">
         <h2 style={{fontFamily: 'cursive'}}>Golden Property Management</h2>
                <p>PROFESSIONAL BOUTIQUE ASSET MANAGEMENT</p>
                
            </div> 
            <div class="col-md-2 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>Nairobi, Kenya</p>
                </li>
                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 254 7 24002308</p>
                </li>
                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>info@goldenmanagement.com</p>
                </li>
            </ul>
        </div>

        </div>

        
        <div class="text-center">
            <footer>© Copyright 2023 by GPM. All Rights Reserved.</footer>
        </div>
        <div class="form-group col-25">
            <hr></hr>
        <div class="text-center">
            <p>GOLDEN Management is committed to ensuring that its website is accessible to people with disabilities. All the pages on our website will meet W3C WAI's Web Content Accessibility Guidelines 2.0, Level A conformance. Any issues should be reported to info@goldenmanagement.com. Website Accessibility Policy</p>
            <hr></hr>
        </div>
        </div>
        </div>
  )
}

export default Footer